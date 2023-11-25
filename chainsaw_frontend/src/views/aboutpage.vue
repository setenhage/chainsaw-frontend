<template>

<div class="contentBox">

    <div class="yellowBlock">
        <bigText class="bigText" style="left: -300px; top: 0px">Wat is dit?</bigText>
      <div class="smallText">
        Dit is een website waar je je verhuurder of woningcorporatie kunt beoordelen en beoordelingen van andere mensen kunt lezen om jezelf en anderen beter te informeren wanneer je besluit naar een nieuwe plek te verhuizen. <br> 
        Als je een goede of slechte ervaring hebt met een verhuurder, kun je hier vrijuit je mening delen met anderen.
      </div>

    <bigText class="bigText" style="left: -400px; top: 0px">Hoe werkt het?</bigText>
      <div class="smallText">
        Dit is een website waar je je verhuurder of woningcorporatie kunt beoordelen en beoordelingen van andere mensen kunt lezen om jezelf en anderen beter te informeren wanneer je besluit naar een nieuwe plek te verhuizen. <br> 
        Als je een goede of slechte ervaring hebt met een verhuurder, kun je hier vrijuit je mening delen met anderen.
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

    export default {
    name: 'aboutPage',
    components: {
        menuBar
        }
    }

</script>

<style>

.contentBox {
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
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