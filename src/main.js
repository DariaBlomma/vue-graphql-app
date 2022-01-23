import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

let apolloClient;
if (process.env.NODE_ENV === 'production') {
  apolloClient = new ApolloClient({
    uri: `${process.env.VUE_APP_DATABASE_URI}:5432/graphql`
  });
} else {
  apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql'
  });
}


const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
