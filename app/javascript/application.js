// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import * as Vue from "vue";

const App = Vue.createApp({
    data(){
        return {
            text: 'OFF',
            isShow: false
        }
    },
    methods:{
        viewSearchChange() {
            this.isShow = !this.isShow;
            this.text = this.isShow ? "ON" : "OFF";
            },
          },
    
})
App.mount("#app");

const Example = Vue.createApp({
    el: '#vue_example',
  
    template: `<div>
      <p>{{ message }}</p>
      <input v-model="message" />
      <button v-on:click="reverse()">Reverse</button>
      </div>`,
  
    data() {
        return{
      message: 'Hello Vue.js!',
    }
    },
  
    methods: {
      reverse: function () {
        this.message = this.message.split('').reverse().join('')
      },
    },
  });

  Example.mount("#vue_example");