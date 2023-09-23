<template>
    <menuBar></menuBar>

    <div class="homePage">
        <center>
        <h1>Rate and Review your Landlord! </h1>
        <p>Chainsaw allows tenants to share their experiences and rate their landlords. 
          It provides a platform for tenants to provide feedback and help others 
          make informed decisions when choosing a place to live.</p>
        </center>
    </div>

    <!-- block with two buttons -->
    <div class="buttonBlock">
      <center>
        <div class="button">
            <router-link to="/homepage/revsubformview"><prettyButton :disabled="isDisabled" style="margin-right: 2em">Submit a Review</prettyButton></router-link>
            <router-link to="/userReviews"><prettyButton :disabled="isDisabled">Read Reviews</prettyButton></router-link>
        </div>
    </center>
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

</style>
