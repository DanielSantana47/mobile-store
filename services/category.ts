import { data } from '../data/index'


export const getAllCategories = ()=> {
    return data.categories
}

export const getCategoryByProductId = (id: number) => {
    return data.categories.find(item => item.id === id)
}