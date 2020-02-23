<template>
    <div id="app">
        <MeuCha />
    </div>
</template>

<script>
    import MeuCha from './main/MeuCha'
    
    export default {
        components: {MeuCha}
    }
    
</script>

<style>
    html, 
    body, 
    div#app{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    div#app{
        background: #360033;  
        background: -webkit-linear-gradient(to top, #0b8793, #360033); 
        background: linear-gradient(to top, #0b8793, #360033);
    }  
   
</style>