import { data } from '../data/index'

export const getAllProducts = ()=> {
    return data.products
}

export const getProductById = (id: number)=> {
    return data.products.find(item => item.id === id)
}

export const getProductByIdCategory = (idCategory: number) => {
    return data.products.filter(item => item.idCategory === idCategory)
}