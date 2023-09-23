<template>
    <!-- fix menubar always at top of screen -->

    <div>
        <div class="menuBar">
            <router-link to="/homepage"><button class="menuHomeButton" font-size="60">CHAINSAW</button></router-link>
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
    float: center;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    color: white;
    padding: 0px;
    width: 70%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 15%;
}

@media all and (max-width: 768px) {
    .menuBar {
        flex-direction: counter-reset;
        justify-content: center;
    }
}

@media all and (max-width: 500px) {
    .menuBar{
        margin: 10px 0;
    }
}

.menuHomeButton {
    padding: 10px 20px;
    font-size: 30px;
    background-color: white;
    color: rgb(30, 30, 30);
    font-weight: 100;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}
.menuHomeButton:hover {
    background-color: rgb(255, 254, 211);
    border-color: black;
    border-radius: 5px;
  }

.menuButton {
    padding: 10px 20px;
    font-size: 20px;
    text-align: center;
    font-weight: 300;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 20px;
    background-color: transparent;
    transition: white 0.3s ease;
}

.menuButton:hover {
    background-color: rgb(255, 254, 211);
    border-color: black;
    border-radius: 20px;
  }

</style>
