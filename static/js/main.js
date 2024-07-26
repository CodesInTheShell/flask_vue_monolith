import store from './store.js';
import { getMe } from "./backend.js"
import childComp from './childComp.js';

const app = Vue.createApp({
    data(){
        return {
            message: 'Hehehe',
            storeText: store.gettestStoreText(),
            me: {},
            forChild: 'For you my child',
        }
    },
    created () {
        getMe().then(function (response) {
            var res = response.data
            if (res != ''){
                this.me = res.data
            } else {
                console.error('Might have an error')
            }
        }.bind(this))
    },
    components: {
        'child-comp': childComp,
    },
    template: /*html*/`
    <div>
        <p>My message is: {{message}}</p>
        <p>Store: {{storeText}}</p>
        <p>Me: {{me}}</p>
    </div>
    <child-comp
        :aProp='forChild'
    >
    </child-comp>
    `
})
app.use().mount('#app')