<template>    
      <menuBar></menuBar>

    <div class="contentBox">

      <div class="imageBlock">
        <center>
          <img src="../assets/landlord.jpg" alt="landlord" style="width: 100%; height: 100%"/>
        </center>
      </div>

      <!-- <div class="whiteBlock">
        <div class="infoBlock">
          <h1>Rate and Review your Landlord </h1>
          <p>Chainsaw allows tenants to share their experiences and rate their landlords. 
            It provides a platform for tenants to provide feedback and help others 
            make informed decisions when choosing a place to live.</p>
        </div>  
        <div class="buttonContainer">
          <router-link to="/homepage/revsubformview"><prettyButton :disabled="isDisabled" style="margin-right: 2em">Submit a Review</prettyButton></router-link>
          <router-link to="/userReviews"><prettyButton :disabled="isDisabled">Read Reviews</prettyButton></router-link>
        </div>
      </div> -->

      <div class="greyBlock">
        <div class="infoBlock">
          <h1>Rate your Landlord</h1>
          <p>Chainsaw allows tenants to share their experiences and rate their landlords. 
            It provides a platform for tenants to provide feedback and help others 
            make informed decisions when choosing a place to live.</p>
        </div>  
        <div class="buttonContainer">
          <router-link to="/revsubformview"><prettyButton :disabled="isDisabled" style="center">Submit Your Review</prettyButton></router-link>
        </div>
      </div>

      <div class="footer">
        <center>
          <p>© 2023 Chainsaw</p>
        </center>
      </div>

    </div>

      <!-- three blocks with info text horizontally aligned -->
    
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
  background-color: white;
  width: 70%;
  height: 100%;
  position: absolute;
  top: 60px;
  left: 15%;
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
  left: 0%;
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

.infoBlock {
  width: 80%;
  height: 50%;
  top: 10%;
  left: 10%;
  position: relative;
}

.buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20%;
}

.greyBlock {
  display: flex;
  flex-direction: column;
  justify-content: left-top;
  align-items: left;
  background-color: rgb(0, 0, 0, 0.7);
  color: rgb(255, 255, 255);
  padding: 0px;
  text-indent: 0%;
  width: 40%;
  height: 31.5%;
  position: absolute;
  top: 250px;
  left: 50%;
}



.footer {
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 0px;
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
}


</style>
