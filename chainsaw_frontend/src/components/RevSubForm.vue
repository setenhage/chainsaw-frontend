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

      <button type="submit">Submit</button>
    </form>
  

    </div>
  </template>
  
  <script>
  export default {
    name: "AddressForm",
  
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
  