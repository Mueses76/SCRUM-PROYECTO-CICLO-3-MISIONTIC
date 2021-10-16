

var login = new Vue({
    
    el: '#login',
    data() {
        return{
            usuario_correo: '',
            contraseña : '', 
        }
    
    },
    methods: {
        log(){
            window.location.href = 'menu.html';     
        },
        onEnter: function(){
            window.location.href = 'menu.html';     
        }

    },
    
    created: function(){
        console.log('login creado');
    }

})
login.$mount('#login');

