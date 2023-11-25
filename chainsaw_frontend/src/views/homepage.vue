<template>

    <div class="contentBox">

      <!-- large yellow block fills the top half of the page -->
      <div class="yellowBlock">
        <div class="imageBlock" style="left: 200px; top: 220px">
          <img src="../assets/appartment.png" alt="logo" class="logo">
        </div>

        <bigText class="bigText" style="left: -300px; top: 0px">WONEN IS EEN MENSENRECHT</bigText>

        <div class="smallText" style="left: -300px; top: 160px;">
            <p>Een dak boven je hoofd is een basisrecht. Het is cruciaal om de rechten van alle huurders te beschermen. <br>
              Grijp de macht, informeer jezelf over verhuurders en woningcorporaties of begin met het indienen van een beoordeling.</p>
        </div>

        <div class="buttonContainer" style="left: -300px; top: 160px; padding: 140px 0px 0px 400px;">
          <prettyButton class="pretty-button primary" @click="onClick">Beoordeel Mee</prettyButton>
        </div>
      </div>

    <div class="footer" style="font-size: 10px;">
      <center>
        <p>© 2023 Chainsaw</p>
      </center>
    </div>

    <menuBar class="menuBar" style="position: fixed;"></menuBar>



  </div>
    
</template>

<script>
import menuBar from '@/components/menuBar.vue'
import prettyButton from '@/components/prettyButton.vue'

export default {
  name: 'homePage',
  components: {
    menuBar,
    prettyButton
  }
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
body {
  background-color: rgb(218, 218, 218);
}

.contentBox {
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0%;
}

.imageBlock{
  display: flex;
  flex-direction: column;
  justify-content: center-top;
  align-items: center;
  background-color: transparent;
  padding: 0px;
  width: 100%;
  height: 30%;
  position: absolute;
  top: 0px;
  left: 0px;
}

.whiteBlock {
    display: flex;
    flex-direction: column;
    justify-content: left-top;
    align-items: left;
    background-color: rgb(255, 255, 255);
    color: rgb(30, 30, 30);
    padding: 0px;
    text-indent: 0%;
    width: 60%;
    height: 31.5%;
    position: absolute;
    top: 500px;
    left: 0%;
}

.buttonContainer {
  position: relative;
  height: 0px;
  width: 500px;
  margin: 10 auto;
  padding: 300px 0px 0px 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.greyBlock {
  display: flex;
  flex-direction: column;
  justify-content: left-top;
  align-items: left;
  background-color: rgb(0, 0, 0, 0.75);
  color: rgb(255, 255, 255);
  border-radius: 0px;
  padding: 0px;
  text-indent: 0%;
  text-align: center;
  width: 100%;
  height: 30%;
  position: absolute;
  top: 250px;
  left: 0%;
}

.yellowBlock {
  display: flex;
  flex-direction: column;
  justify-content: left-top;
  align-items: center;
  background-color: rgb(255, 213, 0);
  color: rgb(30, 30, 30);
  border-radius: 0px;
  padding: 0px;
  text-indent: 0%;
  text-align: center;
  width: 100%;
  height: 800px;
  position: absolute;
  top: 0px;
  left: 0%;
}

.bigText {
  font-family: 'Arial';
  font-size: 50px;
  font-weight: 1000;
  text-align: left;
  position: relative;
  color: rgb(30, 30, 30);
  height: 0px;
  width: 400px;
  margin: 10 auto;
  padding: 300px 0px 0px 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.smallText {
  font-family: 'Arial';
  font-size: 20px;
  font-weight: 1000;
  text-align: left;
  position: relative;
  color: rgb(30, 30, 30);
  height: 0px;
  width: 400px;
  margin: 10 auto;
  padding: 20px 0px 0px 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.footer {
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 0px;
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
}

</style>
