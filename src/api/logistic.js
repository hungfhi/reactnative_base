import apisauce from 'apisauce';
import qs from 'qs'
import { link_logistic } from './domain'

export const api = apisauce.create({
    baseURL: link_logistic,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});


export const createOrder = (params) => {
    return api.post(`api/v1/order-requests?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
    });
};
//api/v1/order-requests?
export const getOrders = (params) => {
    return api.get(`api/v1/order-requests?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
    });
};

export const getDetailOrder = (params) => {
    return api.get(`api/v1/order-requests/${params.id}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
    });
};

export const getDefinitions = () => {
    return api.get(`api/v1/common/definitions`);
};