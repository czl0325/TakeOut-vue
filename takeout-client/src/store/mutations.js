export default {
    ["RECEIVE_USER"](state, {userInfo}) {
        state.userInfo = userInfo
    },
    ["LOGOUT"](state) {
        state.userInfo = {}
    }
}
