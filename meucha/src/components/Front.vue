<template>
  <div class="front">
      <h1>
          Meu Chá <br>
          Efraim & Leisle
      </h1>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .teste{
        width: 100px;
        height: 100px;
    }
    .front {
        width: 100%;
        height: 100vh;
        background: #360033;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #0b8793, #360033);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #0b8793, #360033); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .front h1 {
        font-family: 'Indie Flower', cursive;
        font-size: 4em;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
        color: #ffffff;
        text-align: center;
        font-weight: bold;
        /* text-shadow: black 0.1em 0.1em 0.3em; */
    }
    </style>