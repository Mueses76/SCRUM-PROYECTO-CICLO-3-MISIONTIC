var menu = new Vue({
    el: '#menu',
    data() {
        return{
            class_img: 'img-user-style',
            class_email_text: 'email-text text-light',
            class_username_text: 'username-text text-light',                       
        }
    
    },
    methods: {
        achiquitar(){
            console.log('Achiquita');
            if(this.class_img == 'img-user-style'){
                this.class_img = 'imgSize';
                this.class_email_text = 'email-text-size text-light';
                this.class_username_text = 'username-text-size text-light';
            }else{
                this.class_img = 'img-user-style';
                this.class_email_text = 'email-text text-light';
                this.class_username_text = 'username-text text-light';
            }
        }
    },
    created: function(){
        console.log('menu creado');
    }

})
menu.$mount('#menu')