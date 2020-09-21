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

export const onSendCode = (phone) => {
    return ajax(`/api/sendcode`, { phone })
}

export const smsLogin = (phone, code) => {
    return ajax(`/api/login_sms`, {phone, code}, "POST")
}

export const passwordLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')
