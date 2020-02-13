<template>
  <div class="front">
      <div v-if="!entrar">
            <h1>Meu Chá</h1>
            <h1>Efraim & Leisle</h1>
            <button @click="entrar = !entrar">Entrar</button>
      </div>
      <div id="validar" v-else-if="entrar">
          <h3>Valide Seu Convite</h3>
          <form action="">
              <label for="">Digite Seu Nome: </label>
              <input type="text" placeholder="Exemplo: Efraim Santos">
              <label for="">Digite Seu Numero: </label>
              <input type="tel" name="" id="" placeholder="Exemplo: 79 98888-8888">
          </form>
          <button>Entrar</button>
          <button>Voltar</button>
      </div>
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                entrar: false,
                somar: 1
            }
        }
    }
</script>

<style>
    .front {
        width: 100%;
        height: 100vh;
        background: #360033;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #0b8793, #360033);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #0b8793, #360033); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .front div{
        position: absolute;
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
    }
    .front div h1 {
        font-family: 'Indie Flower', cursive;
        font-size: 5em;
        margin: 0;
        color: #ffffff;
        text-align: center;
        font-weight: bold;
        text-shadow: black 0.1em 0.1em 0.3em;
    }
    .front div button{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 50px;
        border-radius: 10px;
        border: 4px solid rgba(0, 0, 0, 0.6);
        background-color: rgba(255, 255, 255, 0) ;
        padding: 10px 30px;
        font-weight: bold;
        color: #ffffff;
        font-size: 1em;
    }
    .front button {
        transition-duration: 0.4s;
    }
    .front button:hover {
        background-color: rgba(0, 0, 0, 0.3); /* Green */
        color: white;
    }
    div#validar h3 {
        text-align: center;
        color: #ffffff;
    }
    div#validar form {
        border: 2px solid rgba(255, 255, 255, 0.5);
        padding: 50px;
    }
    div#validar input{
        display: block;
        margin: 20px 0;
        background-color: rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        height: 25px;
    }
    div#validar label{
        font-size: 1.2em;
        font-weight: bold;
        color: white
    }

    </style>