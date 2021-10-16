var usuario = new Vue({
    el: '#wrapper',
    data() {
        return{
            class_img: 'img-user-style',
            class_email_text: 'email-text text-light',
            class_username_text: 'username-text text-light',           
            busqueda_principa: '',
            titulo : '',
            autor: '',
            plataforma: '',
            fecha_inicio: '',
            fecha_fin: '', 
            descripcion: '',
            enlace: '',
            select:'',
            button: {
                text: 'Agregar'
            },
            cursos: [
                
                ['Titulo curso 1', '0'],
                ['Titulo curso 2', '1'],
                ['Titulo curso 3', '2'],
                ['Titulo curso 4', '3'],
                ['Titulo curso 5', '4'],
                
            ]           
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
        },
        seleccion(curso){
            this.titulo = this.cursos[curso][0];
            this.button.text = "Editar";
            select = curso;
            
        },
        editar_agregar(){
            if(this.button.text == "Editar"){
                this.cursos[select][0] = this.titulo;
                console.log(this.cursos[select][0])
            }else{
                console.log("añadido");
                this.cursos.push([this.titulo, '5']);
            }
            
        },
        boton_agregar(){
            this.titulo = '';
            this.button.text = "Agregar";
        }
    },
    created: function(){
        console.log('usuario creado');
    }

})
usuario.$mount('#wrapper')