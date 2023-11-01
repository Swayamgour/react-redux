import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath:'productsApi' , 
    baseQuery:fetchBaseQuery({
        baseUrl:"https://estilo.phoneo.in/public/api/",
    }),
    endpoints:(bulider)=>({
        getProducts:bulider.query({
            query:()=> 'Prod'
        })
    })
});

const {useGetProducts }=productsApi