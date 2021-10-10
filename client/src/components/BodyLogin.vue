<template>
  <body style="background-color: #6F42C1;">

   <section id="login" v-on:keyup.enter="onEnter" class="login-dark" style="background: var(--bs-purple);">
        <form method="post" style="background: #9371D1;">
            <div class="illustration">
                <i class="icon ion-ios-locked-outline" style="color: rgb(255,255,255);"></i>
            </div>
            <div class="mb-3">
                <input v-model="usuario_correo" class="form-control" type="email" name="email" placeholder="Email" style="background: var(--bs-purple);">
            </div>
            <div class="mb-3">
                <input v-model="contraseña" class="form-control" type="password" name="password" placeholder="Password" style="background: var(--bs-purple);">
            </div>
            <div class="mb-3">
                <router-link role="button" :to="{ name: 'BodyUsuarios', params: {} }" class="btn btn-primary d-block w-100" type="button" style="background: var(--bs-purple);color: var(--bs-body-bg);">Log In</router-link>
            </div>
            <a class="forgot" href="#" style="color: rgb(255,255,255);">Forgot your email or password?</a>
        </form>
    </section>

</body>
</template>
<script>
export default {
   
    name: 'login',
    data() {
        return{
            usuario_correo: '',
            contraseña : '', 
        }
    
    },
    methods: {
        
        onEnter: function(){
            window.location.href = 'menu.html';     
        }

    },
    
    created: function(){
        console.log('login creado');
    }
}
</script>
