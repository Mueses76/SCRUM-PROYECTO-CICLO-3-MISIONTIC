var buscarEnResultados = new Vue({
    el: '#buscarEnResultados',
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
            console.log(this.busqueda_principa);
            console.log(this.titulo);
            console.log(this.autor);
            console.log(this.plataforma);
            console.log(this.fecha_inicio);
            console.log(this.fecha_fin);    

            window.location.href = "resultadosBusqueda.html";
        }

    },
    created: function(){
        console.log('buscarEnResultados creado');
    }

})
buscarEnResultados.$mount('#buscarEnResultados')