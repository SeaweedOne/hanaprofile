<template>
  <q-layout view="lHh lpr lFf">
    <div v-bind:class="{'main': $q.platform.is.desktop, 'mobile_main': $q.platform.is.ipad || $q.platform.is.mobile}"
         class="full-height" style="background-color:rgba(0, 0, 0, 0.7);">

      <q-header class="q-py-sm" style="background-color:rgba(0, 0, 0, 0.7);">
        <q-toolbar class="text-h4">
          <q-space></q-space>
          <q-tabs v-model="selected_tab" shrink>
            <q-tab name="about_me" :style="[selected_tab == 'about_me' ? {backgroundColor: 'green'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_about_me')" style="width:120px;min-height:auto !important;color: white"
                   label="About Me 실제 표현부"/>
            <q-tab name="works" :style="[selected_tab == 'works' ? {backgroundColor: 'green'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_projects')" style="width:120px;min-height:auto !important;color: white"
                   label="Works"/>
            <q-tab name="pubs" :style="[selected_tab == 'pubs' ? {backgroundColor: 'green'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_publications')" style="width:120px;min-height:auto !important;color: white"
                   label="Publications"/>
            <q-tab name="photo" :style="[selected_tab == 'photo' ? {backgroundColor: 'green'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_photo')" style="width:120px;min-height:auto !important;color: white"
                   label="Photo"/>
            <q-tab name="contact" :style="[selected_tab == 'contact' ? {backgroundColor: 'green'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_contact_me')"
                   style="width:120px;min-height:auto !important;color: white" label="Contact Me"/>
          </q-tabs>
        </q-toolbar>
      </q-header>
      <section>
        <div class="full-height full-width flex flex-center text-center"
           style="background-color: rgba(0, 0, 0, 0.68) !important;z-index:0;height: 100vh !important;">
        <div class="">
        <div style="!important;" class="text-h6 q-mt-md text-grey-5">
          HANA KIM
        </div>
          <div class="text-h6 text-grey-5">WELCOME TO MY PAGE</div>
          <div class="text-h2 text-white q-py-sm q-my-md"
               style="border-top:3px solid #1595de;border-bottom: 3px solid #2faa64;">HELLO I'M HANA.
          </div>
          <div class="text-h6" style="color: #f4b825;">
            STILL STUDENT | KOPO | HADOOP
          </div>
        </div>
      </div>
      </section>
    </div>

    <div style="background-color:#33495e" id="id_about_me">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
          <div style="background-color:#ea4946" class="q-pa-md text-center text-white text-weight-bolder text-h4">
            ABOUT ME
          </div>
          <div style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div style="background-color: rgba(0, 0, 0, 0.68) !important;">
              <q-img style="height:900px"
                     class="col-5"
                     src="/statics/images/sol.jpg"
              />
            </div>
          </div>
        </div>
        <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12 q-px-md q-pt-sm">
          <div class="text-h4 text-center text-white q-py-xs q-my-xs"
               style="border-top:3px solid #bdbdbd;border-bottom: 3px solid #bdbdbd;">HELLO
          </div>
          <h5 class="q-my-none text-caption" style="color: white;">
            1992.09.24 : 출생
            <br>
            <br>
            2021.03.01 : KOPO 입학<br>
            - Python 학습<br>
            - Java 학습<br>
            - NodeJs 학습<br>
            - Linux 학습<br>
            - Hadoop 학습<br>
            - DataBase 학습<br>
            <br>

          </h5>
        </div>
      </div>
    </div>
    <div style="background-color:#2b5873" id="id_projects">
      <div class="row q-px-xl">
        <div class="text-h4 text-center text-white q-py-sm q-my-md full-width"
             style="border-top:3px solid #bdbdbd;border-bottom: 3px solid #bdbdbd;">MY Works
        </div>
        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#eb4f71">
                <a href="https://github.com/SeaweedOne/Hadoop" target="_blank">깃허브 바로가기</a>
              </q-ribbon>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs">
                    <div class="text-overline text-black">2021 GitHub Archive Program</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="project_link" style="text-decoration: none;color: #eb4f71;"
                         href="https://github.com/SeaweedOne/Hadoop" target="_blank">Hadoop</a>
                    </div>
                    <div class="text-caption text-grey-9">
                      <ul>
                        <li>Hadoop 설치</li>
                        <li>Spark ETL 모듈 개발</li>
                        <li>Jupyter Lab 기반에서의 Pyspark </li>
                        <li>Broadcating Block to certain Nodes</li>
                        <li>Compare and Merge Blocks</li>
                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      href="google.com"
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/hadoop.jpg"
                    />
                  </q-card-section>
                </div>
              </div>
            </q-card-section>

            <q-separator/>

            <q-card-actions class="block">

              <div class="float-right q-py-sm">
                <iframe class="float-right"
                        src="https://ghbtns.com/github-btn.html?user=SeaweedOne&repo=Hadoop&type=fork&count=true&size=large"
                        frameborder="0" scrolling="0" width="136" height="30" title="GitHub"></iframe>
              </div>
            </q-card-actions>
          </q-card>
        </div>


        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#eb4f71">
                <a href="hhttps://github.com/SeaweedOne/BaekJoon" target="_blank">깃허브 바로가기</a>
              </q-ribbon>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs">
                    <div class="text-overline text-black">Algorithm</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="project_link" style="text-decoration: none;color: #eb4f71;"
                         href="hhttps://github.com/SeaweedOne/BaekJoon" target="_blank">Algorithm Study</a>
                    </div>
                    <div class="text-caption text-grey-9">
                    SILVER 5

                      <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>BaekJoon</li>

                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/rank1.png"
                    />
                    <q-img
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/rank2.png"
                    />
                    <q-img
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/rank3.png"
                    />
                  </q-card-section>
                </div>
              </div>
            </q-card-section>

            <q-separator/>

            <q-card-actions class="block">
            <div class="float-right q-py-sm">
              <iframe class="float-right"
                      src="https://ghbtns.com/github-btn.html?user=SeaweedOne&repo=BaekJoon&type=fork&count=true&size=large"
                      frameborder="0" scrolling="0" width="136" height="30" title="GitHub"></iframe>
            </div>

            </q-card-actions>
          </q-card>

        </div>
        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#eb4f71">
                <a href="https://github.com/wonyongHwang/kopoStockModel" target="_blank">FORK ME ON
                  GITHUB!</a>
              </q-ribbon>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs">
                    <div class="text-overline text-pink">Smart Finance</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="project_link" style="text-decoration: none;color: #eb4f71;"
                         href="https://github.com/wonyongHwang/kopoStockModel" target="_blank">Kopo Stock Model</a>
                    </div>
                    <div class="text-caption text-grey-9">
                      Forecasting stock price based on various finance statistics.
                      Lots of code is produced by students while using some external python libraries like FinanceReader, Selenium.
                      <ul>
                        <li>matplotlib, pandas, numpy, scipy</li>
                        <li>finance-datareader</li>
                        <li>beautifulsoup4</li>
                        <li>mplfinance</li>
                        <li>chart-studio</li>
                        <li>plotly</li>

                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/kopostock.png"
                    />
                  </q-card-section>
                </div>
              </div>
            </q-card-section>

            <q-separator/>

            <q-card-actions class="block">
              <div class="float-right q-py-sm">
                <iframe class="float-right"
                        src="https://ghbtns.com/github-btn.html?user=wonyongHwang&repo=kopoStockModel&type=fork&count=true&size=large"
                        frameborder="0" scrolling="0" width="136" height="30" title="GitHub"></iframe>
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <div style="background-color:#14104e" id="id_publications">
      <div class="row row q-px-xl">
        <div class="text-h4 text-center text-white q-py-sm q-my-md full-width"
             style="border-top:3px solid #bdbdbd;border-bottom: 3px solid #bdbdbd;">Current Publications
        </div>
        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section class="q-py-xs">
              <div class="text-overline text-pink">Current Publications</div>

                <div class="text-h5 q-mt-sm q-mb-xs">
                  <div style="text-decoration: none;color: #eb4f71;">Application Development Using BlockChain</div>
                </div>
                <div class="text-caption text-grey-9">
                  Dec 10, 2019 Korea Polytechnics college<br>
                  <br>
                  - learn the characteristics of blockchain architecture through bitcoin<br>
                  - ethereum and its application development<br>
                  ISBN : 978-89-6440-531-4 (13500)<br>
                </div>

                <div class="text-h5 q-mt-sm q-mb-xs">
                  <div style="text-decoration: none;color: #eb4f71;">Development of Industrial Electronic Hardware</div>
                </div>
                <div class="text-caption text-grey-9">
                  Dec 31, 2018 Korea Research Institute for Vocational Education & Training (KRIVET)<br>
                  ISBN : 979-11-339-6977-7 (95560), 979-11-339-6976-0 (95560), 979-11-339-6979-1 (95560), 979-11-339-6975-3 (95560),<br>
                   979-11-339-6978-4 (95560) <br><br>
                </div>

                <div class="text-h5 q-mt-sm q-mb-xs">
                  <div style="text-decoration: none;color: #eb4f71;">A Study on Implementation of BlockChain Voting System using Hyperledger Fabric</div>
                </div>
                <div class="text-caption text-grey-9">
                  Journal of Korea institute of information, electronics, and communication technology v.13 no.4 , 2020, pp.298 - 305<br>
                  <br>
                  This paper deals with the implementation of electronic voting system using permissioned block chain technology.<br>
                  Cases studies have recently been under way in many industrial areas to review the application of the blockchain<br>
                  based electronic voting system. The existing electronic voting system was easily exposed by hacking because of<br>
                  its centralized characteristics, making it difficult to ensure the reliability and transparency of the voting<br>
                  system itself. In this study, we proposed key considerations and concepts to ensure the reliability and<br>
                  transparency of voters and voting stakeholder by utilizing a hyperledger fabric which is nowadays widely<br>
                   used as a permissioned blockchain.
                   <br><br>

                   and more ...
                </div>

            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <section id="id_photo">
      <div style="background-color:#206b73;z-index:0;" class="content">
        <div class="row row q-px-xl">
          <div class="text-h4 text-center text-white q-py-sm q-my-md full-width"
               style="border-top:3px solid #bdbdbd;border-bottom: 3px solid #bdbdbd;">Photo
          </div>
          <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl">
            <div class="q-pa-md">
              <div class="q-col-gutter-md row">
                <div class="col-md-6 col-md-6 col-xs-12 col-sm-12 text-center flex flex-center">
                  <q-img
                    src="statics/images/pic1.png"
                    v-bind:class="{'sketch_desktop': $q.platform.is.desktop, 'sketch_mobile': $q.platform.is.ipad || $q.platform.is.mobile}"
                  >
                  </q-img>
                </div>

                <div class="col-md-6 col-md-6 col-xs-12 col-sm-12 text-center flex flex-center">
                  <q-img src="statics/images/pic2.png"
                         v-bind:class="{'sketch_desktop': $q.platform.is.desktop, 'sketch_mobile': $q.platform.is.ipad || $q.platform.is.mobile}">
                  </q-img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <canvas id="canvas2" style="height: 100%;width:100%;"></canvas> -->
    </section>
    <div id="contact_us">
      <div style="background-color: rgba(0, 0, 0, 0.68) !important;">
        <form
          action="https://formspree.io/f/mayabrvw"
          method="POST"
        >
          <div class="row text-center flex flex-center q-py-lg">
            <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
              <q-input required v-model="name" name="name" bg-color="white" outlined label="Your Name *">
                <template v-slot:append>
                  <q-icon name="list" style="color:green"/>
                </template>
              </q-input>
              <q-input type="email" required v-model="email" name="_replyto" bg-color="white" outlined label="Your Email *">
                <template v-slot:append>
                  <q-icon name="email" style="color:green"/>
                </template>
              </q-input>
            </div>
            <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
              <q-input required v-model="message" name="message" class="" type="textarea" bg-color="white" outlined
                       label="Your Message *">
                <template v-slot:append>
                  <q-icon name="comment" style="color:green"/>
                </template>
              </q-input>
            </div>
          </div>
          <div class="row flex flex-center text-center q-pb-xl q-mt-md">
            <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12">
              <q-btn type="submit" size="lg" style="background:green;color: white" label="Send Message"/>
            </div>
          </div>
        </form>
      </div>
    </div>
    <q-toolbar class="flex flex-center text-white" style="background-color: #1c1b21;border-top: 2px solid green"
               id="id_contact_me">
      <div class="q-pa-sm q-gutter-sm">
        <q-btn target="_blank" style="border: 2px solid green" round type="a" href="https://twitter.com/dreamonpanda"
               glossy
               icon="fab fa-twitter"/>
        <q-btn target="_blank" style="border: 2px solid green" round type="a"
               href="https://github.com/wonyongHwang"
               glossy
               icon="fab fa-github"/>
        <q-btn style="border: 2px solid green" round type="a" href="mailto:wonyong@wonyong.net"
               glossy
               icon="email"/>
        <q-btn target="_blank" style="border: 2px solid green;" round type="a"
               href="https://www.facebook.com/wonyong.hwang"
               glossy
               icon="fab fa-facebook"/>
        <q-btn target="_blank" style="border: 2px solid green;" round type="a"
               href="https://www.linkedin.com/in/justino/"
               glossy
               icon="fab fa-linkedin"/>
      </div>
    </q-toolbar>
  </q-layout>
</template>

<script>

    import {scroll} from 'quasar'

    const {getScrollTarget, setScrollPosition} = scroll
    export default {
        name: 'PageIndex',
        data() {
            return {
                name: "",
                email: "",
                message: "",
                selected_tab: 'about_me',
            }
        },
        methods: {
            scrollToElement(id) {
                let el = document.getElementById(id)
                const target = getScrollTarget(el)
                const offset = el.offsetTop - 65
                const duration = 800
                setScrollPosition(target, offset, duration)
            }
        },
        mounted: function () {
            // let canvas2Settings = {
            //     "target": "canvas2",
            //     "max": "120",
            //     "animate": true,
            //     "props": ["circle", "square", "triangle", "line"],
            //     "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
            //     "clock": "20"
            // };
            // let canvas2 = new ConfettiGenerator(canvas2Settings);
            // canvas2.render();
        }
    }
</script>

<style>
  .main {

    background: url(/statics/images/hong.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh !important;
  }

  .mobile_main {
    background: url(/statics/images/my_1_2.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh !important;
  }

  .my-card {
    width: 100%;
    max-width: 800px;
    border: none;
    border-radius: 0px;
  }

  .sponsor-card {
    width: 100%;
    max-width: 240px;
    border: none;
    border-radius: 6px;
  }

  .project_link:hover {
    text-decoration: underline !important;
  }

  .sketch_desktop {
    width: 100%;
    height: 100%;
    display:block;
    margin:auto;
    border: 5px solid #30313b;
  }

  .sketch_mobile {
    width: 100%;
    height: 100% !important;
    border: 20px solid #30313b;
  }

  #contact_us {
    background: url(/statics/images/contact_us.jpg);
    background-size: cover;
    background-position: 50%;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  .custom_tab {
    width: 130px;
  }

  body {
    overflow-x: hidden;
  }

  section {
    position: relative;
  }

  section > * {
    z-index: 9;
    position: relative;
    top: 0;
  }

  section > canvas {
    z-index: 1;
    position: absolute;
    left: 0;
  }
</style>
