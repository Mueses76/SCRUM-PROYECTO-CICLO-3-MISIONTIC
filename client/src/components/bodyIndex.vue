<template>
  <body style="background: #6F42C1;">

    <h1 class="display-3 text-center" style="font-family: Consolas;font-size: 51.8px; margin: 50px 0px 0px 0px;">Bienvenido a CourseSearch</h1>
    <p style="text-align: center;font-family: Consolas;margin: 0px 0px 0px 0px;">Plataforma para la búsqueda de contenido educativo gratuito de programación</p>
    <p style="text-align: center;font-family: Consolas;">en internet</p>
    
    <div id="buscar" v-on:keyup.enter="onEnter">
        <div class="flex-container">
            <div class="flex-10"></div>
            <div class="flex-80 " style="margin: 30px 0px 10px 0px;">
                <div class="flex-container">
                    <label class="col-form-label">&nbsp;<i class="fa fa-search" style="margin: 0px 10px 0px 10px;"></i>
                    </label>
                    <input v-model="busqueda_principa" class="form-control flex-10" type="text" placeholder="Buscar Curso" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">

                </div>
            </div>
            <div class="flex-10"></div>
        </div>
        
        <div class="flex-container">
            <div class="flex-10"></div>
            <div class="flex-80 flex-container" style="margin: 0px 0px 10px 0px;">
                <div class="flex-80-49l flex-container" >
                    <label class="col-form-label" style="font-family: Consolas;">Titulo:&nbsp;</label>
                    <input v-model="titulo" class="form-control flex-10" type="text" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">

                </div>
                <div class="flex-80-1"> </div>
                <div class="flex-80-49r flex-container">
                    <label class="col-form-label" style="font-family: Consolas;">Autor:&nbsp;</label>
                    <input v-model='autor' class="form-control flex-10" type="text" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">

                </div>
            </div>
            <div class="flex-10"></div>
        </div>
        <div class="flex-container">
            <div class="flex-10"></div>
            <div class="flex-80 flex-container" style="margin: 0px 0px 10px 0px;">
                <div class="flex-80-32l flex-container">
                    <label class="col-form-label" style="font-family: Consolas;">Plataforma:&nbsp;</label>
                    <input v-model ="plataforma" class="form-control flex-10" type="text" style="font-family: Consolas;background: var(--bs-indigo);color: var(--bs-gray-900)">

                </div>
                <div class="flex-80-1"> </div>
                <div class="flex-80-32c flex-container">
                    <div class="col fecha" style="text-align: left;">
                        <p style="font-family: Consolas">Fecha inicio:</p>
                    </div>
                    <div class="row">
                        <div class="col fecha"><input v-model='fecha_inicio' type="date" ></div>
                    </div>
                </div>
                <div class="flex-80-1"> </div>
                <div class="flex-80-32r flex-container">
                    <div class="col fecha" style="text-align: left;">
                        <p style="font-family: Consolas;">Fecha fin:</p>
                    </div>
                    <div class="row">
                        
                        <div class="col fecha"><input v-model='fecha_fin' type="date"></div>
                    </div>
                </div>
            
            </div>
            <div class="flex-10"></div>
        </div>
    </div>

</body>
</template>