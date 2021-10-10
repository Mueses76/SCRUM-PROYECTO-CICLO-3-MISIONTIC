<template>
  <body style="background-color: #6F42C1;">

    <div id="buscarEnResultados" v-on:keyup.enter="onEnter">
        <div class="flex-container">
            <div class="flex-10"></div>
            <div class="flex-80 " style="margin: 30px 0px 10px 0px;">
                <div class="flex-container">
                    <label class="col-form-label">&nbsp;<i class="fa fa-search" style="margin: 0px 10px 0px 10px; color: rgba(0, 0, 0, 0.9); "></i>
                    </label>
                    <input v-model="busqueda_principa" class="form-control text-index flex-10 text-index" type="text" placeholder="Buscar Curso" style="background: var(--bs-indigo)">

                </div>
            </div>
            <div class="flex-10"></div>
        </div>
        
        <div class="flex-container">
            <div class="flex-10"></div>
            <div class="flex-80 flex-container" style="margin: 0px 0px 10px 0px;">
                <div class="flex-80-49l flex-container" >
                    <label class="col-form-label text-index">Titulo:&nbsp;</label>
                    <input v-model="titulo" class="form-control flex-10 text-index" type="text" style="background: var(--bs-indigo);">

                </div>
                <div class="flex-80-1"> </div>
                <div class="flex-80-49r flex-container">
                    <label class="col-form-label text-index">Autor:&nbsp;</label>
                    <input v-model='autor' class="form-control text-index flex-10" type="text" style="background: var(--bs-indigo)">

                </div>
            </div>
            <div class="flex-10"></div>
        </div>
        <div class="flex-container">
            <div class="flex-10"></div>
            <div class="flex-80 flex-container" style="margin: 0px 0px 10px 0px;">
                <div class="flex-80-32l flex-container">
                    <label class="col-form-label text-index">Plataforma:&nbsp;</label>
                    <input v-model ="plataforma" class="form-control text-index flex-10" type="text" style="background: var(--bs-indigo)">

                </div>
                <div class="flex-80-1"> </div>
                <div class="flex-80-32c flex-container">
                    <div class="col fecha" style="text-align: left;">
                        <p class="text-index">Fecha inicio:</p>
                    </div>
                    <div class="row">
                        <div class="col fecha"><input v-model='fecha_inicio' type="date" ></div>
                    </div>
                </div>
                <div class="flex-80-1"> </div>
                <div class="flex-80-32r flex-container">
                    <div class="col fecha" style="text-align: left;">
                        <p class="text-index">Fecha fin:</p>
                    </div>
                    <div class="row">
                        
                        <div class="col fecha"><input v-model='fecha_fin' type="date"></div>
                    </div>
                </div>
            
            </div>
            <div class="flex-10"></div>
        </div>
    </div>

    <div class="container">
        <ul class="list-group">
            <li class="list-group-item"><span style="font-family: Consolas;">Titulo Curso</span>
                <p style="font-family: Consolas;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></p>
                <div class="row">
                    <div class="col"><input type="url" value="https://www.lipsum.com/banners/" style="font-family: Consolas;"></div>
                    <div class="col" style="text-align: right;"><button class="btn btn-primary" type="button" style="background: var(--bs-purple);">Ver mas&nbsp;</button></div>
                </div>
            </li>
            <li class="list-group-item"><span style="font-family: Consolas;">Titulo Curso</span>
                <p style="font-family: Consolas;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></p>
                <div class="row">
                    <div class="col"><input type="url" value="https://www.lipsum.com/banners/" style="font-family: Consolas;"></div>
                    <div class="col" style="text-align: right;"><button class="btn btn-primary" type="button" style="background: var(--bs-purple);">Ver mas&nbsp;</button></div>
                </div>
            </li>
            <li class="list-group-item"><span style="font-family: Consolas;">Titulo Curso</span>
                <p style="font-family: Consolas;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></p>
                <div class="row">
                    <div class="col"><input type="url" value="https://www.lipsum.com/banners/" style="font-family: Consolas;"></div>
                    <div class="col" style="text-align: right;"><button class="btn btn-primary" type="button" style="background: var(--bs-purple);">Ver mas&nbsp;</button></div>
                </div>
            </li>
            <li class="list-group-item"><span style="font-family: Consolas;">Titulo Curso</span>
                <p style="font-family: Consolas;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></p>
                <div class="row">
                    <div class="col"><input type="url" value="https://www.lipsum.com/banners/" style="font-family: Consolas;"></div>
                    <div class="col" style="text-align: right;"><button class="btn btn-primary" type="button" style="background: var(--bs-purple);">Ver mas&nbsp;</button></div>
                </div>
            </li>
        </ul>
    </div>

</body>
</template>
<script>
import router from '../router'

export default {
    name: 'buscarEnResultados',
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

            router.push({ name: "BodyResultadosBusqueda" });
            this.$forceUpdate();

        }

    },
    created: function(){
        console.log('buscarEnResultados creado');
    }

}
</script>
