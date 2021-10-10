<template>
  <div class="menu">

       <nav class="navbar navbar-light navbar-expand-md" style="color: var(--bs-blue);font-size: 20px;background: #9371D1;">
        <div class="container-fluid"><i class="fa fa-search" style="background: 9371D1;border-color: var(--bs-purple);color: var(--bs-gray-900);margin: 0px 10px 0px 0px;"></i><a class="navbar-brand" href="#" style="font-family: Consolas;color: var(--bs-gray-900);background: #9371D1;"><strong>CourseSearch</strong></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link " :to="{ name: 'BodyUsuarios', params: {} }" style="font-family: Consolas;" >Mi Perfil</router-link>
                    <li class="nav-item">
                        <router-link class="nav-link " :to="{ name: 'BodyIndex', params: {} }" style="font-family: Consolas;" >Buscar Curso</router-link>
                    </li>
                </ul>
            "</div>
            <router-link :to="{ name: 'BodyLogin', params: {} }" role = "button" class="btn btn-primary" type="button" style="padding: 7px 12px;margin: 0px 6px;font-family: Consolas;color: var(--bs-body-bg);border-color: var(--bs-blue);background: #6F42C1;">Sign in</router-link>
            <router-link :to="{ name: 'BodyRegister', params: {} }" role="button" href="registerBase.html" class="btn btn-primary" type="button" style="font-family: Consolas;background: #6F42C1;">Sign up</router-link>
        </div>
    </nav>
  </div>
</template>
