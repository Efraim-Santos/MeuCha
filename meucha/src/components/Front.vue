<template>
    <v-container fluid id="container">
        <v-row align="center" justify="center" id="rowLogo" v-if="!logado">
        <!-- <v-row align="center" justify="center" id="rowLogo" v-if="false"> -->
            <!-- <img src="../img/img_teste.png" height="100%" style="opacity: 0.3" alt="imagem">  -->
            <v-col cols="12" id="logo" v-show="!entrar">
                <h1 class="white--text text-center">{{titulo}}</h1>
                <h1 class="white--text text-center">{{subTitulo}}</h1>
                <v-row class="mt-8" justify="center">
                    <v-btn class="ma-2 white--text" large outlined @click="entrar = !entrar">Entrar</v-btn>
                </v-row>
            </v-col>
            <v-col class="px-10 py-10" cols="10" sm="6" id="validar" v-show="entrar" style="outline: 2px solid rgba(255, 255, 255, 0.5)">
                <h2 class="white--text text-center mb-6">{{valide}}</h2>
                <v-form>
                    <v-text-field 
                        v-model="nome" 
                        label="Nome:" 
                        :rules="[() => !! nome || 'FAVOR PREENCHER ESSE CAMPO']" 
                        color="white" 
                        placeholder="Nome e Sobrenome: Efraim Santos"
                    ></v-text-field>
                    <v-text-field 
                        v-model="numero" 
                        :rules="[() => !! numero || 'FAVOR PREENCHER ESSE CAMPO']" 
                        label="Telefone:" 
                        color="white" 
                        placeholder="Ex: 79988887777"
                        required
                        @keyup.enter="usuario"
                        ></v-text-field>
                        <v-row justify="space-between" class="mx-1 mt-2">
                            <v-btn class="white--text" outlined @click="usuario"> Validar </v-btn>
                            <v-btn class="white--text" outlined @click="entrar = !entrar; alert=false">Voltar</v-btn>
                        </v-row>
                </v-form> 
                <v-alert type="error" border="left" class="mt-5" v-if="alert"> 
                    Dados Invalidos
                </v-alert>
            </v-col>
        </v-row>

         <v-container id="containerPrincipal" v-if="true" fluid>
            <Principal :nome="nome" :tel="numero"/>
        </v-container>
    </v-container>
   
</template>

<script>
    import Principal from './Principal'
    export default {
        components: {
            Principal
        },
        created(){
            this.getUsuarios()
        },
        // computed: {
        //     totals (){
        //         const {expenses: exp} = this
        //         const values = {
        //             nome: exp.map(i => i.nome),
        //             tel: exp.map(i => i.telefone)
        //         }
        //         return values
        //     }       
        // },
        data: function() {
            return {
                titulo: "Meu Chá",
                subTitulo: "Efraim & Leisle",
                valide: "Valide Seu Convite",
                nome: "",
                numero: "",
                entrar: false,
                logado: false,
                alert: false,
                expenses: []
            }
        },
        methods:  {
           usuario(){
               if(this.nome != '' && this.numero != ''){
                    const {expenses: exp} = this
                    exp.map(element => {
                       this.numero = parseInt(this.numero)
                    //    console.log(this.numero == element.telefone)
                       if(this.numero == element.telefone){
                           this.logado = true
                           if(element.nome == ""){
                               //acidionar nome
                              this.setUsuarios(element.id, this.nome, element.telefone)
                           }else{
                               this.nome = element.nome
                           }
                       }
                    });
                    !this.logado ? this.alert = true : this.alert
               }else {
                   !this.alert ? this.alert = !this.alert : this.alert
               }
           },
            getUsuarios(){
                const ref = this.$firebase.database().ref('id_usuarios/')
                
                ref.once('value', data => {
                    const values = data.val()
                    this.expenses = Object.keys(values).map(i => values[i])
                })
            },
            setUsuarios(id, nome, tel){
                const ref = this.$firebase.database().ref('id_usuarios/')
                ref.child('id_usu_'+id).update({id, nome, telefone: tel})
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
    #container{
        padding: 0;
        margin: 0;
    }
    #rowLogo{
        height: 100%;
    }
    #container{
        height: 100vh !important;
    }
    #logo,
    #validar {
        position: relative;
    }
    #logo h1 {
        font-family: 'Indie_Flower';
        font-size: 6vw;
        text-shadow: black 0.1em 0.1em 0.3em;
    }
    #validar input::placeholder {
        color: rgba(0, 0, 0, 0.8)
    }
    div#validar input{
        margin-top: 10px;
        background-color: rgba(0, 0, 0, 0.2);
        color: #ffffff;
    }
    div#validar label{
        font-size: 1.6vw;
        font-weight: bold;
        color: #000000;
        font-family: 'Lemonada';
    } 
    /* ############################################################################ */
    @media screen and (max-width: 600px) {
        #logo h1 {
            font-size: 12vw;
        }
        div#validar h2 {
            font-size: 6vw;
        }
        div#validar label{
            font-size: 3.5vw;
        }
        #rowLogo img{
            width: 100%;
        }
    }
    </style>