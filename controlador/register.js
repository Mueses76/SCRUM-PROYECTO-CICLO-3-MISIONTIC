

var register = new Vue({
    
    el: '#register',
    data() {
        return{
            correo: '',
            username: '',
            contraseña : '', 
            check_contraseña,
        }
    
    },
    methods: {
        log(){
            window.location.href = 'menu.html';     
        },
        onEnter: function(){
            window.location.href = 'menu.html';     
        },
        register(){
            window.location.href = 'menu.html';     
        },

    },
    
    created: function(){
        console.log('register creado');
    }

})
register.$mount('#register');

