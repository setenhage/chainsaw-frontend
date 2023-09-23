<template>
    <div>
        <div class="menuBar">
            <img src="../assets/logo.png" alt="logo" width="120" height="50">
            <router-link to="/homepage/revsubformview"><button class="menuButton">Submit</button></router-link>
            <router-link to="/userReviews"><button class="menuButton">Reviews</button></router-link>
            <router-link to="/login"><button class="menuButton">Login</button></router-link>
            <router-link to="/about"><button class="menuButton">About</button></router-link>
        </div>
    </div>

</template>

<script>
export default {
  name: 'menuBar',
}

</script>

<style scoped>
.menuBar {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightgray;
    color: white;
    padding: 10px;
}

.menuButton {
    padding: 10px 20px;
    font-size: 30px;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    transition: lightgray 0.3s ease;
}

.menuButton:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .menuButton.primary {
    background-color: #4CAF50;
    color: white;
  }

.menuButton.primary:hover {
    background-color: #45a049;
  }
  

</style>
