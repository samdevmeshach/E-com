import API from '../config'


export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method :"POST",
        headers:{
            Accept:'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}


export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method :"POST",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}


export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method :"GET",
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}

export const listOrders = (userId,token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method :"GET",
        headers:{
            Accept:'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },
    })
        .then(response =>{
            return response.json();
        })
        .catch(err => {
            console.log(err)
        })
}

export const getStatusValue = (userId,token) => {
    return fetch(`${API}/order/status-value/${userId}`, {
        method :"GET",
        headers:{
            Accept:'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },
    })
        .then(response =>{
            return response.json();
        })
        .catch(err => {
            console.log(err)
        })
}

export const updateOrderStatus = (userId,token,orderId,status) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
        method :"PUT",
        headers:{
            Accept:'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({status,orderId})
    })
        .then(response =>{
            return response.json();
        })
        .catch(err => {
            console.log(err)
        })
}

export const deleteProduct = (userId, token,productId) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method :"DELETE",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}
export const deleteCategory = (userId, token,productId) => {
    return fetch(`${API}/category/${productId}/${userId}`, {
        method :"DELETE",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}