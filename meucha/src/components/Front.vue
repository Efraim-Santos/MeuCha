<template>
  <div class="front">
      <img src="../img/img_teste.png" alt="">
      <div class="logo" v-show="!entrar">
            <h1>Meu Chá</h1>
            <h1>Efraim & Leisle</h1>
            <button @click="entrar = !entrar">Entrar</button>
      </div>
        <div id="validar" v-show="!entrar">
            <h2>Valide Seu Convite</h2>
            <form action="">
                <label for="">Digite Seu Nome: </label>
                <input type="text" placeholder="Exemplo: Efraim Santos">
                <label for="">Digite Seu Numero: </label>
                <input type="nunber" name="" id="" placeholder="Exemplo: 79 98888-8888">
            </form>
            <button @click="'./principal'">Entrar</button>
            <button @click="entrar = !entrar">Voltar</button>
         </div>
  </div>
</template>

<script>
    // import Principal from './Principal'
    export default {
        // components: {Principal},
        data: function() {
            return {
                entrar: false
            }
        }
    }
</script>

<style>
    @font-face {
        font-family: Lemonada;
        src: url('../fonts/Lemonada/Lemonada-VariableFont_wght.ttf');
    }
    @font-face {
        font-family: Indie_Flower;
        src: url('../fonts/Indie_Flower/IndieFlower-Regular.ttf');
    }
    :root{
        --corInput: rgba(0, 0, 0, 0.4);
    }
    .front {
        width: 100%;
        height: 100%;
    }
    .logo button,
    .front div,
    .front img,
    div#validar {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .front img {
        height: 100%; 
        opacity: .3;
    }
    .logo h1 {
        font-family: 'Indie_Flower';
        font-size: 7vw;
        margin: 0;
        color: #ffffff;
        text-align: center;
        font-weight: bold;
        text-shadow: black 0.1em 0.1em 0.3em;
    }
    .logo button,
    div#validar button{
        margin-top: 50px;
        border-radius: 10px;
        border: 4px solid rgba(0, 0, 0, 0.6);
        background-color: rgba(255, 255, 255, 0);
        padding: 10px 30px;
        font-weight: bold;
        color: #ffffff;
        font-size: 1.5vw;
    }
    .logo button,
    div#validar button {
        transition-duration: 0.4s;
    }
    .logo button:hover,
    div#validar button:hover {
        background-color: var(--corInput); /* Green */
        color: white;
    }
    /* ############################################################################ */
    div#validar,
    .front img {
        position: absolute;
    }
    div#validar h2 {
        font-size: 2vw;
        text-align: center;
        color: #ffffff;
        font-family: 'Lemonada';
    }
    div#validar form {
        border: 2px solid rgba(255, 255, 255, 0.5);
        padding: 6vw 10vw;
    }
    div#validar input{
        display: block;
        margin: 20px 0;
        background-color: var(--corInput);
        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        height: 30px;
        width: 100%;
        color: #ffffff
    }
    ::placeholder{
        text-align: center;
    }
    div#validar label{
        font-size: 1.5vw;
        font-weight: bold;
        color: white;
        font-family: 'Lemonada';
    } 
    div#validar button:last-of-type{
        float: right;
    }   
    /* ############################################################################ */
    @media screen and (max-width: 600px) {
        .logo h1 {
            font-size: 12vw;
        }
        .logo button,
         div#validar button{
            font-size: 4vw;
        }
        div#validar {
            width: 70%;
        }
        div#validar h2 {
            font-size: 6vw;
        }
        div#validar label{
            font-size: 3.5vw;
        }
         .front img {
            height: 100%;
            width: 100%;
        }
    }
    </style>