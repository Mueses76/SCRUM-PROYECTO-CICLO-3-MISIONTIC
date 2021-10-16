<template>
  <body id="bodyUsuarios"  style="background-color: #6F42C1;">
    <div id="wrapper"  style="background: #6F42C1;color: var(--bs-purple);">
        <div class>
        <nav  class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion  p-0" style="background-color: #9371D1;">
            <div class="container-fluid d-flex flex-column p-0">
    
                <img v-bind:class="class_img" src="assets/img/user.png">
                <span v-bind:class ="class_username_text" >Username</span>
                <span v-bind:class="class_email_text">Email</span>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li  class="nav-item" v-for= "curso in cursos" v-bind:key="curso" v-on:click="seleccion(curso[1])">
                        <a class="nav-link"> 
                            <i class="fas fa-table"></i>
                            <span>{{curso[0]}}</span>
                        </a>
                    </li>
                </ul>
                <div class="text-center">
                    <button v-on:click="boton_agregar" class="agregar btn rounded-circle border-0 " type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg>
                    </button>
                </div>
                <div class="text-center d-none d-md-inline">
                    <button v-on:click="achiquitar" class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
                </div>
            </div>
        </nav>
        </div>
        <div v-on:keyup.enter="editar_agregar" class ="container-course-form" id="content-wrapper" style="background: #9371D1">
            <div class = "row">
                <div class="width50">
                    <label class="col-form-label" style="color: rgba(0, 0, 0, 0.9);font-family: Consolas;">Titulo curso</label>
                    <input v-model="titulo" class="form-control " type="text" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">

                </div>
                <div class="width50">
                    <label class="col-form-label" style="color: rgba(0, 0, 0, 0.9);font-family: Consolas;">Autor original</label>
                    <input v-model="autor" class="form-control " type="text" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">
                </div>
            </div>
            <div  class="row">
                <div class="width50">
                    <label class="col-form-label" style="color: rgba(0, 0, 0, 0.9);font-family: Consolas;">Plataforma</label>
                    <input v-model="plataforma" class="form-control " type="text" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">

                </div>
                <div  class="row width50" style="align-items: center">
                    <div class="width-50" style="align-items: center;">
                        <label class="form-label" style="color: rgba(0, 0, 0, 0.9);font-family: Consolas;">Fecha inicio:&nbsp;</label>
                        <input v-model="fecha_inicio" type="date">

                    </div> 
                    <div class="width-50" style="align-items: center;">
                        <label class="form-label" style="color: rgba(0, 0, 0, 0.9);font-family: Consolas;">Fecha final: &nbsp;</label>
                        <input v-model="fecha_fin" type="date">
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <label class="col-form-label" style="color: rgba(0, 0, 0, 0.9);font-family: Consolas;">Descripción&nbsp;</label>
                    <input v-model="descripcion" class="form-control " type="text" style="height: 300px; font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">
                </div>
            </div>
            <div class="row">
                <div>
                    <label class="col-form-label" style="color: rgba(0, 0, 0, 0.9);font-family: Consolas;">Enlace</label>
                    <input v-model="enlace" class="form-control " type="text" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">
                </div>
            </div>
           
            <div >
                <div style="margin: 20px;">
                    <button v-on:click="editar_agregar()" class="btn btn-primary" type="button" style="background: var(--bs-purple); width: 100px; height: 50px;">{{button.text}}</button>
                </div>
            </div>
            
        </div>
    </div>

</body>
</template>


<script>
import axios from "axios";
export default {
  name: 'BodyUsuario',
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
          var sidebar = document.querySelector('.sidebar')
          var sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');
          console.log('sidebarToggles', sidebarToggles);
          console.log("joasjdfña", sidebar);
          console.log("joasjdffdgsfdgña", document.querySelector('#app'));
          sidebar.classList.toggle('toggled'); 
  
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
            this.select = curso;
            
        },
        editar_agregar(){
            if(this.button.text == "Editar"){
                this.cursos[this.select][0] = this.titulo;
                console.log(this.cursos[this.select][0])
                console.log("añadido");

            }else{
                console.log("añadido");
                this.cursos.push([this.titulo, '5']);
            }
            
        },
        boton_agregar(){
            this.titulo = '';
            this.button.text = "Agregar";
        },
        
    },
    created: function(){
        axios.get('http://localhost:3000/hola').then(response => {
            console.log(response.data);
        });
        console.log('usuario creado');
    }

}
</script>