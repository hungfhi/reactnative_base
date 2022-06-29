import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import { updateTimeNoti } from '../Screen/Home/Home.Action'

const ManagementNoti = memo((props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const onUpdateTimeNoti = (params) => dispatch(updateTimeNoti(params))
    const user = useSelector(state => state.profile?.user)

    const requestPermissionNoti = () => {
        try {
            messaging().requestPermission()
                .then(async (res) => {
                    const enabled =
                        res === messaging.AuthorizationStatus.AUTHORIZED ||
                        res === messaging.AuthorizationStatus.PROVISIONAL;
                    if (enabled) {
                        const fcmToken = await messaging().getToken();
                        console.log("fcmToken", fcmToken)
                        notifi()
                    }
                })
                .catch(err => {
                    console.log("err messaging", err)
                })
        } catch (error) {

        }
    }

    const notifi = () => {
        try {
            messaging().onNotificationOpenedApp(remoteMessage => {
                onRedriect(remoteMessage)
                console.log('===========', remoteMessage)
            });

            messaging()
                .getInitialNotification()
                .then(remoteMessage => {
                    if (remoteMessage) {
                        onRedriect(remoteMessage)
                    }
                });
        } catch (error) {

        }
    }

    const onNavigate = (data) => {
        switch (data.event_type) {
            case '1':
                return navigation.navigate('OpenMap', { data: JSON.parse(data.data) })
            default:
                return navigation.navigate('DetailNotification', { id: data?.id, type: 'template' })
        }

    }

    const onRedriect = (message) => {
        const data = message?.data;

        onUpdateTimeNoti(new Date())
        if (user) {
            onNavigate(data)
        }

        // if (data?.id) {
        //     if (user) {
        //         navigation.navigate('DetailNotification', { id: data?.id, type: 'template' })
        //     }
        // } else {
        //     navigation.navigate('NotificationsScreen')
        // }
    }


    useEffect(() => {
        requestPermissionNoti()
        notifi()
    }, [])


    return (
        <View />
    );
});
export default ManagementNoti;
