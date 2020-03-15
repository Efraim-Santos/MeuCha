<template>
        <v-row v-if="logado">
            <!-- ##########################  NABBAR  ############################ -->
            <v-app-bar color="indigo darken-4 " dense dark width="100%">
                <v-toolbar-title class="ml-sm-12 ">MEU CHÁ</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <p class="text-center" style="border: 2px solid red; width: 100%; margin-left: 56px">alinhamento</p> -->
                <span>
                    Seja Bem-Vindo <span id="barNome" class="red--text">{{nome}} !!</span>
                </span>
                <v-btn icon class="coracaoMOB">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-menu left bottom>
                    <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                    </template>
                    <v-list>
                    <v-list-item
                        @click="() => {}"
                    >
                    <v-list-item-title @click="logado = false">Sair</v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>
            <v-row id="painel">
                <!-- ################################    MENU LATERAL  ######################################## -->
                <v-col id="coluna1" cols='4' sm="3" md="3" lg="2" xl="2" class="pt-0 pr-0">
                        <v-navigation-drawer
                        v-model="drawer"
                        :mini-variant.sync="mini"
                        permanent
                        dark
                        color="indigo darken-4 "
                        class="ml-3"
                        >
                        <v-list-item class="px-2" @click.stop="mini = !mini">
                            <v-list-item-avatar>
                                <v-icon>fas fa-smile-beam</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-title><span id="lateralNome">{{nome}}</span></v-list-item-title>

                            <v-btn
                            icon
                            >
                            <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                        </v-list-item>

                        <v-v-rowider></v-v-rowider>

                        <v-list dense class="listMOB" >
                            <v-list-item
                            v-for="item in items"
                            :key="item.titulo"
                            @click="exibicao(item.titulo)"
                            link
                            @click.stop="mini = !mini"
                            >
                            <v-list-item-icon class="mx-auto">
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.titulo }}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        </v-navigation-drawer>
                </v-col>
                <!-- ################################   PAINEL PRINCIPAL  ######################################## -->
                <transition name="fade">
                    <v-col cols="8" sm="9" md="9" lg="10" xl="10" v-if="mini" class="py-0 px-0" id="coluna2">
                        <!-- ####################     INICIO   #######################  -->
                        <v-row align="center" justify="end" class="mt-0 pr-4" id="inicio" v-show="items[0].exibir">
                            <h2 class="white--text text-right mr-12">"Compartilhar com vocês <br> esse momento tão significativo, <br> torna essa realização ainda mais especial. <br> Venham comemorar conosco <br> em nosso chá de casa nova."</h2>
                        </v-row>
                        <!-- ####################     INFORMAÇÃO   #######################  -->
                        <v-row id="informacao" v-show="items[2].exibir"> 
                            <v-col cols="12">
                                <h2 class="white--text text-center">Informações</h2>
                                <v-col cols="12" class="white--text mt-6">
                                    <v-row>
                                        <h3 class="black--text ">05</h3>    
                                        <h4 class="ml-4 text-center pt-7 pl-5" >Abril <br>Domingo</h4>
                                    </v-row>
                                    <v-row>
                                        <h3 class="black--text ">2020</h3>    
                                        <h4 class="ml-4 text-center pt-7 pl-5">Às 17:00<br>Horas</h4>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" class="white--text">
                                    <h4 class="text-center">Recanto da Natureza</h4>
                                    <p class="mt-4 text-center font-weight-bold"> Rua Jasiel de Brito Côrtes, 847 - Jabutiana, Aracaju - SE, 49095-780</p>
                                    <p class="text-center">No Salão de Festa</p>
                                    <p class="text-center">
                                        <v-btn rounded color="primary" dark href="https://www.google.com/maps/place/Recanto+Da+Natureza/@-10.9346519,-37.0955341,17z/data=!3m1!4b1!4m5!3m4!1s0x71ab23789824127:0x6e3c973279594d5e!8m2!3d-10.9346519!4d-37.0933454" target="_blank">Acessar Endereço <i class="fas fa-map-marker-alt ml-2"></i></v-btn>
                                    </p>
                                </v-col>
                            </v-col>
                        </v-row>
                        <!-- ####################     CONFIRMAR PRESENÇA   #######################  -->
                        <v-row id="presenca" v-show="items[3].exibir" >
                             <v-col>
                                <h2 class="white--text text-center pr-5 mt-4">EFRAIM <i class="fas fa-heart red--text"></i> LEISLE</h2>
                                <v-col class="white--text mt-4">
                                    <v-row>
                                        <h3 class="black--text">05</h3>    
                                        <h4 class="ml-4 text-center pt-7 pl-5" >Abril <br>Domingo</h4>
                                    </v-row>
                                    <v-row>
                                        <h3 class="black--text">2020</h3>    
                                        <h4 class="ml-4 text-center pt-7 pl-5" >Às 17:00<br>Horas</h4>
                                    </v-row>
                                     <p class="text-center">
                                        <v-btn rounded color="primary" dark target="_blank" @click="confirmarPresenca()">Confirmar Presença</v-btn>
                                    </p>
                                    <p class="px-8 mt-12" v-if="presenca">
                                        <v-alert type="success" border="left" class="mt-5 mx-auto" > 
                                            Presença Confirmada!!
                                        </v-alert>  
                                    </p>
                                </v-col>
                            </v-col>
                        </v-row>
                           <!-- ####################     PRESENTES   #######################  -->
                        <v-row id="presentes" v-show="items[1].exibir"> 
                            <h2 class="white--text text-center my-5">Lista de Presentes</h2>
                            <v-row>
                                <v-card
                                class="mx-auto"
                                width="80%"
                                height="75vh"
                                tile
                                dark
                                >
                                    <v-list :nav="nav" :three-line="threeLine" >
                                        <v-list-item-group v-model="item" color="primary">
                                            <v-list-item 
                                                    two-line dark 
                                                    v-for="presente in totals.id"
                                                    :key= presente
                                                    :nav="nav"
                                                    @click="selecionar(presente)"
                                                    :disabled="selecionado(presente)"
                                                >
                                                    <v-list-item-content >
                                                        <v-list-item-title>
                                                            <v-icon small>fas fa-caret-right</v-icon> 
                                                                {{totals.titulo[presente]}}
                                                            <span class="pt-3 float-right" v-if="verificar(presente)">
                                                                <v-icon>fas fa-check</v-icon>
                                                            </span>
                                                            <span class="pt-3 float-right" v-if="totals.numero_selecionado[presente] != 0">
                                                                <span v-if="totals.numero_selecionado[presente] != tel">
                                                                    Já selecionado
                                                                    <v-icon>far fa-times-circle</v-icon>
                                                                </span>
                                                                 <span v-if="totals.numero_selecionado[presente] == tel">
                                                                    Você selecionou
                                                                    <v-icon>far fa-check-square</v-icon>
                                                                </span>
                                                            </span>
                                                        </v-list-item-title>
                                                        <v-list-item-subtitle>
                                                            <i class="far fa-badge"></i>
                                                            <span>Dicas de compras: </span>
                                                        </v-list-item-subtitle>
                                                        <v-list-item-subtitle>
                                                            <v-btn class="ma-2" tile color="indigo" dark x-small
                                                                :href="totals.link_1[presente]"
                                                                target="_blank"
                                                                v-if="totals.link_1[presente] != ''"
                                                            >
                                                                {{totals.dica_1[presente]}}
                                                            </v-btn>
                                                               <v-btn class="ma-2" tile color="indigo" dark x-small
                                                                :href="totals.link_2[presente]"
                                                                target="_blank"
                                                                v-if="totals.link_2[presente] != ''"
                                                            >
                                                                {{totals.dica_2[presente]}}
                                                            </v-btn>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-card>
                            <v-row id="botaoSalvar" class="mt-3">
                                <v-btn small color="primary" class="mx-auto" @click="salvar()" dark><v-icon color="red">mdi-heart</v-icon>SALVAR </v-btn>
                            </v-row>
                            </v-row>
                        </v-row>
                    </v-col>
                </transition>
            </v-row>
        </v-row>
</template>  

<script>
    export default {    
        props: [
            'nome',
            'tel'        
        ],
        created(){
            this.getPresentes(),      
            this.getUsuarios()
        },
        computed: {
            totals (){
                const {expenses: exp} = this
                const values = {
                    id: exp.map(i => i.id),
                    titulo: exp.map(i => i.titulo),
                    dica_1: exp.map(i => i.nome_1),
                    link_1: exp.map(i => i.link_1),
                    dica_2: exp.map(i => i.nome_2),
                    link_2: exp.map(i => i.link_2),
                    numero_selecionado: exp.map(i => i.numero_selecionado),
                    selecionar: exp.map(i => i.selecionar)
                }
                return values
            }       
        },
        data: function (){
            return {
                drawer: true,
                items: [
                    { titulo: 'Inicio', icon: 'mdi-account',  exibir: true },
                    { titulo: 'Lista de Presentes', icon: 'fas fa-gift', exibir: false  },
                    { titulo: 'Informações', icon: 'fas fa-info-circle', exibir: false  },
                    { titulo: 'Confirmar presença', icon: 'fas fa-check', exibir: false }
                    // { titulo: 'Quem Con', icon: 'fas fa-check', exibir: false }
                ],
                mini: true,
                expenses: [],
                presenca: false,
                logado: true,
                selecionarId: [],
                bdUsuarios: []
            }
        },
        methods: {
            exibicao(aux){
                this.items.forEach(element => {
                    if(element.titulo == aux){
                        element.exibir = true
                    }else {
                        element.exibir = false
                    }
                })
            },
            selecionado(valor){
                if(this.totals.numero_selecionado[valor] == 0){
                    return false
                }else if(this.totals.numero_selecionado[valor] == this.tel){
                    return false
                }else{
                    return true
                }
            },
            selecionar(valor){
                let existe = 0
                this.selecionarId.forEach((element, id) => {
                    if(element == valor){
                        existe = id +1
                    }
                })
                if(existe == 0){
                    this.selecionarId.push(valor)
                }else if(existe != 0){
                    this.selecionarId.splice(existe -1, 1)
                }   
            },
            verificar(valor){
                let aux = false
                this.selecionarId.forEach((element) => {
                    if(element == valor){
                        aux = true
                    }
                })
                return aux
            },
            salvar(){
               console.log(this.selecionarId)
               let id = 0
               this.selecionarId.forEach(element => {
                   id = ("00" + (element)).slice(-2)
                   console.log(element)
                   console.log(id)                   
                   if(this.totals.numero_selecionado[element] == this.tel){  
                        this.setPresente(id, element, 0)
                   }else{
                        this.setPresente(id, element, this.tel)
                   }
               })
            //    alert("Obrigado! Você acabou de selecior o(s) presente(s): " this.totals.)
               this.selecionarId = []
               this.getPresentes()
            },
            confirmarPresenca(){
                const {bdUsuarios: usu} = this
                usu.map(element => {
                    if(this.tel == element.telefone){
                       const ref = this.$firebase.database().ref('id_usuarios/id_usu_'+element.id)
                        ref.update({ confirmaPresenca: true });
                        this.presenca = true
                    }
                })
            },
            getPresentes(){
                const ref = this.$firebase.database().ref('id_presentes/')
                
                ref.once('value', data => {
                    const values = data.val()
                    this.expenses = Object.keys(values).map(i => values[i])
                })
            },
            setPresente(id, id_2, tel){
                const ref = this.$firebase.database().ref('id_presentes/id_presente_'+id)
                ref.update({ id: id_2, numero_selecionado: tel });
            },
            getUsuarios(){
                const ref = this.$firebase.database().ref('id_usuarios/')
                
                ref.once('value', data => {
                    const values = data.val()
                    this.bdUsuarios = Object.keys(values).map(i => values[i])
                })
            },
        }
    }
</script>

<style>
    @font-face {
        font-family: Indie_Flower;
        src: url('../fonts/Indie_Flower/IndieFlower-Regular.ttf');
    }
     @font-face {
        font-family: Lemonada;
        src: url('../fonts/Lemonada/Lemonada-VariableFont_wght.ttf');
    }
    #containerPrincipal {
        padding: 0;
        margin: 0;
        height: 100vh;
    }
    #containerPrincipal .row{
        position: relative;
        height: 100%;
    }
    #coluna1.v-list-item--dense .v-list-item__content, .v-list--dense .v-list-item .v-list-item__content {
        padding: 8px 10px !important;
    }
    #coluna1.v-list-item--dense .v-list-item__content, .v-list--dense .v-list-item .v-list-item__content .v-list-item__title{
        font-size: 1rem !important;
    }
    #inicio h2{
        font-size: 40px;
    }
    #presentes .v-card {
        overflow-y: scroll;
    }
    #presentes .v-list-item{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    #presentes h2 {
        width: 100%;
    }
    #presentes #botaoSalvar{
        height: inherit;
        width: 100%;
    } 
    #presentes h2,
    #informacao h2,
    #informacao h3{
        font-family: lemonada;
    }
    #informacao h2,
    #presenca h2{
        font-size: 50px !important;
    }
      #inicio h2{
        font-family: 'Indie_Flower';
    }
    #informacao h3,
    #presenca h3{
        font-family: lemonada;
        text-shadow: 2px 2px #ffffff;
        font-size: 90px;
    }
    #informacao .col .col:nth-of-type(1) h4,
    #presenca .col h4{
        font-size: 25px;
    }
    #informacao .col .col:nth-of-type(2) h4 {
        font-size: 30px;
    }
    #informacao .col:last-child p,
    #presenca p{
        font-size: 25px;
    }
    #presenca h2{
        font-family: Indie_Flower;
        font-size: 30px;
    }
    #presenca .col .row:nth-of-type(1),
     #presenca .col .row:nth-of-type(2),
     #informacao .col .row:nth-of-type(1),
     #informacao .col .row:nth-of-type(2){
        padding-left: 14%;
    }
    #presenca .col p:nth-of-type(1){
        margin-top: 90px;
    }
    #presenca .v-alert {
        width: 35%;
    }
    #presenca,
    #informacao,
    #presentes {
        margin-left: -10vw;
    }
    .fade-enter-active {
        transition: opacity .7s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    /* ############################################################################ */
    @media screen and (max-width: 600px) {
        #inicio h2{
            font-size: 6vw;
        }
         #coluna1.v-list-item--dense .v-list-item__content, .v-list--dense .v-list-item .v-list-item__content .v-list-item__title{
            font-size: 13px !important;
        }
        #coluna1.v-list-item--dense .v-list-item__content, .v-list--dense .v-list-item .v-list-item__content {
           padding: 8px 2px 8px 3px !important;
        }
        #painel .v-avatar {
            height: 20px !important; 
            min-width: 20px !important; 
            width: 20px !important;
        }
        .v-toolbar__title {
            font-size: 1rem !important;
        }
        .coracaoMOB {
            display: none !important;
        }
        .listMOB .v-list-item{  
            padding: 0 !important; 
            display: inherit;
            text-align: center;
        }
        .listMOB .v-list-item__icon:first-child {
             margin-right: 0px !important;
        }  
        .v-icon.v-icon{
            font-size: 25px !important;
        }
        .listMOB .v-list-item__title{
            font-size: 13.5px !important;
        }
        #presentes h2 {
            font-size: 1.2em !important;
             margin-right: 90px;
        }
        #presentes .v-card {
              width: 82% !important;
              height: 73vh !important;
              margin: 0 !important;  
        }
        #presentes .v-list-item__title {
            font-size: 14px !important;
        }
        #presentes .v-list-item__title .v-icon{
            font-size: 18px !important;
        }
        #presentes .v-list-item__subtitle{
            font-size: 12px !important;
        }
        #botaoSalvar .v-btn{
            margin-left: 32% !important;
        }
        #informacao h2,
        #presenca h2 {
            margin-left: -32px;  
        }
        #informacao h3,
        #presenca h3{
            font-size: 50px;
        }
        #informacao .col .col:nth-of-type(1) h4,
        #presenca .col .col:nth-of-type(1) h4  {
            font-size: inherit;
            padding: 14px 0 0 0px !important;
        }
         #informacao .col .col:nth-of-type(2) h4 {
           font-size: 18px;
           margin-left: -70px;
        }
        #presenca .col .row:nth-of-type(1),
        #presenca .col .row:nth-of-type(2),
        #informacao .col .row:nth-of-type(1),
        #informacao .col .row:nth-of-type(2){
            padding-left: inherit !important;
        }
        #informacao .col:last-child p,
        #presenca p{
            font-size: 14px !important;
            margin-left: -19%;
        }
        #informacao h2 {
            font-size: 25px !important;
        }
        #presenca h2{
            font-size: 30px !important;
        }
         #presenca .v-alert {
           width: 100%;
        }
        #lateralNome{
            font-size: 12px;
        }
    }
</style>