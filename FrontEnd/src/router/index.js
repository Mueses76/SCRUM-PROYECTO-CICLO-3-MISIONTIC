import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
       
        {
            path: '/',
            name: 'BodyIndex',
            component: () => import('@/components/bodyIndex')
        },
        {
            path: '/',
            name: 'BodyUsuarios',
            component: () => import('@/components/BodyUsuario')
        },
        {
            path: '/',
            name: 'BodyLogin',
            component: () => import('@/components/BodyLogin')
        },
        {
            path: '/',
            name: 'BodyRegister',
            component: () => import('@/components/BodyRegister')
        },
        {
            path: '/',
            name: 'BodyResultadosBusqueda',
            component: () => import('@/components/BodyResultadosBusqueda')
        },
    ]
});