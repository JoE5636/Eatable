import apiFetch from "./api-fetch";

export async function getOrders(){
    const listOrders = await apiFetch("/orders")  
    
    console.log( listOrders);
        
    return listOrders;
}

export async function createOrder(body = {
    "delivery_address": "Jamaica",
    "items": [
        {"id": 1, "quantity": 1 },
        {"id": 4, "quantity": 1 },
        {"id": 10, "quantity": 5 }
    ]
}){
 

    const data = await apiFetch("/orders",{body})
    console.log(data)

    return data;
}