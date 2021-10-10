<template>
  <body style="background-color: #6F42C1;">

   <section id="register" class="register-photo" style="color: var(--bs-purple);background: var(--bs-purple);">
        <div class="form-container" style="width: 300px;">
            <form method="post" style="width: 300px;background: #9371D1;">
                <h2 class="text-center" style="width: 240px;">Create an account.</h2>
                <div class="mb-3" style="width: 240px;">
                    <input v-model="correo" class="form-control" type="email" name="email" placeholder="Username" style="width: 240px;"></div>
                <div class="mb-3" style="width: 240px;">
                    <input v-model="username" class="form-control" type="email" name="email" placeholder="Email" style="width: 240px;"></div>
                <div class="mb-3" style="width: 240px;">
                    <input v-model="contraseña" class="form-control" type="password" name="password" placeholder="Password" style="width: 240px;"></div>
                <div class="mb-3" style="width: 240px;">
                    <input v-model="check_contraseña" class="form-control" type="password" name="password-repeat" placeholder="Password (repeat)" style="width: 240px;"></div>
                <div class="mb-3" style="width: 240px;">
                    <router-link role="button" :to="{name:'BodyUsuarios',params:{}}" class="btn btn-primary" type="button" style="width: 240px;background: var(--bs-purple);">Sign Up</router-link>
                </div>
                <router-link :to="{name:'BodyLogin', params:{} }" class="already"  style="width: 240px;color: var(--bs-white);">You already have an account? Login here.</router-link>
            </form>
        </div>
    </section>

</body>
</template>
<script>
export default {
   
    name: 'register',
    data() {
        return{
            correo: '',
            username: '',
            contraseña : '', 
            check_contraseña: '',
        }
    
    },
    methods: {
        
        onEnter: function(){
            window.location.href = 'menu.html';     
        },
       

    },
    
    created: function(){
        console.log('register creado');
    }
}
</script>
