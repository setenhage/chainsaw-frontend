<template>
    <div class="address-form">
      <h2 class="form-title">Reviewdetails</h2>

      <hr/>

    <form @submit="handleSubmit">
      <input
        type="text"
        name="street"
        placeholder="Street name and house number (+ suffix)"
        v-model="street"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        v-model="city"
      />

      <input
        type="text"
        name="state"
        placeholder="Province"
        v-model="state"
      />

      <input
        type="text"
        name="zip"
        placeholder="Postal code"
        v-model="zip"
      />

      <input
        type="number"
        name="rent_price"
        placeholder="Rent price (optional)"
      />

      <div class="rating">
        <h3>Overall satisfaction</h3>
        <star-rating></star-rating>
        <input type="radio" name="overall-satisfaction" value="1" v-model="overallSatisfaction" />
        <input type="radio" name="overall-satisfaction" value="2" v-model="overallSatisfaction" />
        <input type="radio" name="overall-satisfaction" value="3" v-model="overallSatisfaction" />
        <input type="radio" name="overall-satisfaction" value="4" v-model="overallSatisfaction" />
        <input type="radio" name="overall-satisfaction" value="5" v-model="overallSatisfaction" />
      </div>

      <div class="rating">
        <h3>Responsiveness</h3>
        <input type="radio" name="rating-responsiveness" value="1" v-model="ratingResponsiveness" />
        <input type="radio" name="rating-responsiveness" value="2" v-model="ratingResponsiveness" />
        <input type="radio" name="rating-responsiveness" value="3" v-model="ratingResponsiveness" />
        <input type="radio" name="rating-responsiveness" value="4" v-model="ratingResponsiveness" />
        <input type="radio" name="rating-responsiveness" value="5" v-model="ratingResponsiveness" />
      </div>

      <div class="rating">
        <h3>Cleanliness</h3>
        <input type="radio" name="rating-cleanliness" value="1" v-model="ratingCleanliness" />
        <input type="radio" name="rating-cleanliness" value="2" v-model="ratingCleanliness" />
        <input type="radio" name="rating-cleanliness" value="3" v-model="ratingCleanliness" />
        <input type="radio" name="rating-cleanliness" value="4" v-model="ratingCleanliness" />
        <input type="radio" name="rating-cleanliness" value="5" v-model="ratingCleanliness" />
      </div>

      <div class="rating">
        <h3>Loudness</h3>
        <input type="radio" name="rating-loudness" value="1" v-model="ratingLoudness" />
        <input type="radio" name="rating-loudness" value="2" v-model="ratingLoudness" />
        <input type="radio" name="rating-loudness" value="3" v-model="ratingLoudness" />
        <input type="radio" name="rating-loudness" value="4" v-model="ratingLoudness" />
        <input type="radio" name="rating-loudness" value="5" v-model="ratingLoudness" />
      </div>

      <div class="rating">
        <h3>Neighbours</h3>
        <input type="radio" name="rating-neighbours" value="1" v-model="ratingNeighbours" />
        <input type="radio" name="rating-neighbours" value="2" v-model="ratingNeighbours" />
        <input type="radio" name="rating-neighbours" value="3" v-model="ratingNeighbours" />
        <input type="radio" name="rating-neighbours" value="4" v-model="ratingNeighbours" />
        <input type="radio" name="rating-neighbours" value="5" v-model="ratingNeighbours" />
      </div>

      <button type="submit">Submit</button>
    </form>
  

    </div>
  </template>
  
  <script>
  import StarRating from '@/vue-star-ratings.js'
  
  export default {
    name: "AddressForm",
    components: {
        StarRating
    },
  
    data() {
      return {
        street: "",
        city: "",
        state: "",
        zip: "",
        rent_price: "",
      };
    },
  
    methods: {
      handleSubmit(event) {
        event.preventDefault();
  
        // Validate the form data
  
        // Submit the form data to your API
      },
    },
  };
  </script>
  
  <style scoped>
  .address-form {
  width: 500px;
  margin: 0 auto;
  }
  
  .form-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  input {
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  .rating {
    display: flex;
    justify-content: space-around;
  }
  
  .rating input {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  
  button {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

.rating input:checked {
background-color: yellow;
}
  </style>
  