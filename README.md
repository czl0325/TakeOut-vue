## 介绍

使用vue开发的外卖项目

## 运行

1、进入目录后先`npm install`下载相应的包<br>
2、运行`npm run dev`成功后在浏览器输入`localhost:8080`即可运行

## 错误

* 126错误
```
npm ERR! code ELIFECYCLE
npm ERR! errno 126
```
解决方案：
```
rm -rf node_modules
rm package-lock.json
npm cache clear --force
npm install
```

==========

## 知识点

#### vuex的使用

vuex通过action来异步更新mutation，再由mutation来更新state

 *  1.安装vuex `npm install vuex --save`
 *  2.创建store文件夹，分别创建store.js，mutations.js，actions.js文件(getters.js根据需要引入)，store.js中分别引入文件
    
```
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations
})
```

* 3.main.js中导入store
  
```
import store from './store/store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```

* 4.actions.js文件。记住action传给mutation的应该是一个对象{userInfo}

```
export default {
    reloadUserInfo({commit}, userInfo) {
        commit("RECEIVE_USER", {userInfo})
    }
}
```

* 5.mutations.js 接收actions传过来的对象并且更新到state中去，方法名和action需要保持一致

```
["RECEIVE_USER"](state, {userInfo}) {
    state.userInfo = userInfo
},
```

* 6.在页面中调用 dispatch调用action，commit是调用mutation，一个异步一个同步

```
this.$store.dispatch('reloadUserInfo', user)
```

===============
