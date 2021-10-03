

var buscar = new Vue({
    
    el: '#buscar',
    data() {
        return{
            busqueda_principa: '',
            titulo : '',
            autor: '',
            plataforma: '',
            fecha_inicio: '',
            fecha_fin: '',
        }
    
    },
    methods: {
        onEnter: function(){
            window.location.href = 'resultadosBusqueda.html';     
        }

    },
    
    created: function(){
        console.log('buscar creado');
    }

})
buscar.$mount('#buscar');

