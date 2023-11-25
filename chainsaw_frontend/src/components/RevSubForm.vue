<template>
    <div class="address-form">
      <h2 class="form-title">Reviewdetails</h2>

      <hr/>

    <form @submit.prevent="postAddress">
      <input
        type="text"
        name="street"
        placeholder="Street name and house number (+ suffix)"
        v-model="addressData.street"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        v-model="addressData.city"
      />

      <input
        type="text"
        name="state"
        placeholder="Province"
        v-model="addressData.state"
      />

      <input
        type="text"
        name="zip"
        placeholder="Postal code"
        v-model="addressData.zip"
      />

      <input
        type="number"
        name="rent_price"
        placeholder="Rent price (optional)"
        v-model="addressData.rent_price"
      />

      <button type="submit">Submit</button>
    </form>
    </div>
  </template>
  
  <script>
 import axios from 'axios';


  export default {
    name: "AddressForm",
  
    data() {
      return {
        addressData: {
          street: "",
          city: "",
          state: "",
          zip: "",
          rent_price: "",
        }
      };
    },
  
    methods: {
      // async handleSubmit(event) {
      //   event.preventDefault();
      //   console.log(this.addressData)
      //   this.postAddress()
      // },

      async postAddress() {
        console.log(this.addressData)
        try {
          const response = await axios.post("http://127.0.0.1:8000/address_create/", this.addressData);
          console.log(response)
        } catch (e) {
          console.log('oops')
          // this.errors.push(e)
        }
      }
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
  