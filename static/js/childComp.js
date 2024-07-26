import store from "./store.js"

export default {
    props: [
        'aProp',
    ],
    mounted(){
    },
    computed: {
    },
    methods: {
    },
    template: /*html*/`
        <p>I am a child component</p>  
        <p>I receive this from parent: {{aProp}}</p> 
    `
}



   