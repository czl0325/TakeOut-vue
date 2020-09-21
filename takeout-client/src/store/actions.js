
export default {
    reloadUserInfo({commit}, userInfo) {
        commit("RECEIVE_USER", {userInfo})
    },

    logout({commit}) {
        commit("LOGOUT")
    }
}
