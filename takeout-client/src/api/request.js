import ajax from "./ajax";

const base_url = "http://localhost:4000"

export const getAddress = (longitude, latitude) => ajax(`/api/position/${longitude},${latitude}`)

export const getShops = (longitude, latitude) => ajax(`/api/shops`, {longitude, latitude})

export const getCategories = () => ajax(`/api/index_category`)

export const onSendCode = (phone) => ajax(`/api/sendcode`, { phone })

export const smsLogin = (phone, code) => ajax(`/api/login_sms`, {phone, code}, "POST")

export const passwordLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')


export const getUserInfo = () => ajax("/api/userinfo")

export const requestLogout = () => ajax("/api/logout")
