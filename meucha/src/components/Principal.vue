<template>
        <v-row>
            <!-- ##########################  NABBAR  ############################ -->
            <v-app-bar color="indigo darken-4 " dense dark width="100%">
                <v-toolbar-title class="ml-sm-12 ">MEU CHÁ</v-toolbar-title>
                <v-spacer></v-spacer>
                <span>
                    Seja Bem Vindo <span id="barNome" class="red--text">{{nome}} !!</span>
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
                    <v-list-item-title>Sair</v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>
            <v-row id="painel" justify="center">
                <!-- ################################    MENU LATERAL  ######################################## -->
                <v-col id="coluna1" class="pt-0 pr-0">
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

                            <v-list-item-title>{{nome}}</v-list-item-title>

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
                <v-col cols="8" sm="10" v-if="mini" class="py-0" id="coluna2">
                    <!-- ####################     INICIO   #######################  -->
                    <v-row align="center" justify="end" class="mt-0 pr-4" id="inicio" v-show="items[0].exibir">
                        <h2 class="white--text text-right mr-12">"Compartilhar com vocês <br> esse momento tão significativo, <br> torna essa realização ainda mais especial. <br> Venham comemorar conosco <br> em nosso cha de casa nova."</h2>
                        {{items.inicio}}
                    </v-row>
                    <!-- ####################     INFORMAÇÃO   #######################  -->
                    <v-row id="informação" v-show="items[2].exibir"> 
                        <p>informação</p>
                    </v-row>
                    <!-- ####################     ENDEREÇO   #######################  -->
                    <v-row id="endereco" v-show="items[3].exibir">
                        <p>endereco</p>
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
                                                v-for="presente in presentes"
                                                :key=presente.titulo
                                                :nav="nav"
                                                @click="selecionado(presente)"
                                            >
                                                <v-list-item-content >
                                                    <v-list-item-title>
                                                        <v-icon small>fas fa-caret-right</v-icon> 
                                                            {{presente.titulo}}
                                                        <span class="float-right pt-3" v-if="presente.selecionar">
                                                            <v-icon>fas fa-check</v-icon>
                                                        </span>
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        <i class="far fa-badge"></i>
                                                        <span>Dicas de compras: </span>
                                                    </v-list-item-subtitle>
                                                    <v-list-item-subtitle>
                                                        <v-btn class="ma-2" tile color="indigo" dark x-small
                                                            v-for="dicas in presente.dicas"
                                                            :key="dicas"
                                                            :href="dicas[1]"
                                                            target="_blank"
                                                        >
                                                            {{dicas[0]}}
                                                        </v-btn>
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                        <v-row id="botaoSalvar" class="mt-3">
                            <v-btn small color="primary" class="mx-auto" dark><v-icon color="red">mdi-heart</v-icon>SALVAR </v-btn>
                        </v-row>
                        </v-row>
                    </v-row>
                </v-col>
            </v-row>
        </v-row>
</template>  

<script>
    export default {    
        props: ['nome'],
        data: function (){
            return {
                teste: "Meu chá",
                drawer: true,
                items: [
                    { titulo: 'Inicio', icon: 'mdi-account',  exibir: true },
                    { titulo: 'Lista de Presentes', icon: 'fas fa-gift', exibir: false  },
                    { titulo: 'Endereço', icon: 'fas fa-map-marked-alt', exibir: false  },
                    { titulo: 'Informação', icon: 'fas fa-info-circle', exibir: false  },
                    { titulo: 'Confirmar presença', icon: 'fas fa-check', exibir: false }
                ],
                mini: true,
                presentes: [
                    {titulo: "Aparelho de jantar de porcelana", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Jogo de sobremesa", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Bandeja", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Açucareiro", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Aparelho de fondue", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Conjunto de Assadeiras", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Jogo de facas Tramontina", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Boleira de vidro", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Bomboniere", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Garrafa térmica para café", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Jogo de copos para o dia-a-dia", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Chaleira", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Jarra para suco", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]},
                    {titulo: "Conjunto de bowls (para sopa)", selecionar: false, dicas: [["Americanas", "https://www.americanas.com.br/produto/19370173/relogio-x-games-masculino-xmgs1019-c2kx?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&cor=Dourado&epar=bp_pl_00_go_rel_todas_geral_gmv&gclid=CjwKCAiAy9jyBRA6EiwAeclQhIVqdPVuTmDzOrPWZTwcDXdjjYH-MpFa3fz0wq9EVV64J_C-3a1ECRoCBXkQAvD_BwE&i=582544e7eec3dfb1f80ebcba&o=584d0db4eec3dfb1f8757a5b&opn=YSMESP&sellerid=11626336000180&wt.srch=1"], ["Magazine", "https://www.magazineluiza.com.br/mala-de-viagem-yins-media-com-giro-360o-ys21055c-m-cinza/p/223890600/es/mala/"]]}
                ],
                // estilo: {
                //     // width: '25% !important'
                // }
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
            selecionado(aux){
                this.presentes.forEach(element => {
                    if(aux.titulo == element.titulo && aux.selecionar == false){
                        element.selecionar = true
                    } else if(aux.titulo == element.titulo && aux.selecionar == true){
                        element.selecionar = false
                    }
                })
            },
            // testeStyle(){
            //     if(this.mini){
            //         return this.estilo
            //     }
            // }   
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
    #inicio h2{
        font-family: 'Indie_Flower';
        font-size: 2.5vw;
    }
    /* .v-navigation-drawer--open{
        width: 100% !important;
    }
    .v-navigation-drawer--mini-variant{
        width: 60px !important;
    } */
    #presentes .v-card {
        overflow-y: scroll;
    }
    #presentes .v-list-item{
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    #presentes h2 {
        width: 100%;
        font-family: Lemonada;
    }
    #presentes #botaoSalvar{
        height: inherit;
        width: 100%;
    } 
    #coluna1 {
        position: absolute;
        top: 0;
        left: 0;
        height: 98vh; 
        width: 300px;
        border: 2px solid red
    }
    #coluna1 .v-navigation-drawer{
        position: absolute;
        top: 0;
        left: 0;
        max-width: 300px;
        border: 2px solid red
    }
    /* ############################################################################ */
    @media screen and (max-width: 600px) {
        /* #coluna1 {
            max-width: 40%;
        } */
        #inicio h2{
            font-size: 6vw;
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
            font-size: 15px !important;
        }
        #presentes h2 {
            font-size: 1.2em;
             margin-right: 40px;
        }
        #presentes .v-card {
              width: 85% !important;
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
    }
</style>