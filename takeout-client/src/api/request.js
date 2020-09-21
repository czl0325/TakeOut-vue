import ajax from "./ajax";

const base_url = "http://localhost:4000"

export const getAddress = (longitude, latitude) => {
    return ajax(`/api/position/${longitude},${latitude}`)
}

export const getShops = (longitude, latitude) => {
    return ajax(`/api/shops`, {longitude, latitude})
}

export const getCategories = () => {
    return ajax(`/api/index_category`)
}
