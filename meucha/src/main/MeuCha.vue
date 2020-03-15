<template>
    <v-app>
        <img src="../img/img_teste.png" height="100%" style="opacity: 0.4" alt="imagem"> 
        <Front />
    </v-app>
</template>

<script>
    import Front from '../components/Front'
    export default {
        components: {
            Front
        }
    }
</script>

<style :scoped>
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } 
</style>