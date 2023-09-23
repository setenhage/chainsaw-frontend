<template>
    <div>
      <form @submit.prevent="submitForm" v-if="!formSubmitted">
        <span>Street Address</span><br>
        <input 
          v-model="street_address"
          type="text"
          placeholder="Enter your streetname and house number" 
        /><br>
        <span>Postal Code</span><br>
        <input 
          v-model="postal_code"
          type="text"
          placeholder="Enter your postal code" 
        /><br>
        <span>Gender</span><br>
        <input 
          type="radio" 
          v-model="gender" 
          value="Male" 
        />
        <label>Male</label>
        <input 
          type="radio" 
          v-model="gender" 
          value="Female" 
        />
        <label>Female</label><br>
        <input 
          class="submit" 
          type="submit" 
          value="Submit"
        >
      </form>
      <div v-if="formSubmitted">
        <h3>Form Submitted</h3>
        <p>Street Address: {{ street_address }}</p>
        <p>Postal Cord: {{ postal_code }}</p>
        <p>Gender: {{ gender }}</p>
        <small>Click on run to launch the app again.</small>
      </div>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          name: "",
          email: "",
          gender: "",
          formSubmitted: false
        };
      },
      methods: {
        submitForm: function () {
          this.formSubmitted = true
        }
      },
    };
  </script>
  <style>
    form {
      padding: 10px;
      border: 2px solid black;
      border-radius: 5px;
    }
  
    input {
      padding: 4px 8px;
      margin: 4px;
    }
  
    span {
      font-size: 18px;
      margin: 4px;
      font-weight: 500;
    }
  
    .submit {
      font-size: 15px;
      color: #fff;
      background: #222;
      padding: 6px 12px;
      border: none;
      margin-top: 8px;
      cursor: pointer;
      border-radius: 5px;
    }
  
  </style>