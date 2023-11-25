<template>
    <!-- fix menubar always at top right of screen -->

    <div>
        <div class="menuBar">
            <router-link to="/homepage"><img src="../assets/logo.png" class="logo"></router-link>
            <router-link to="/homepage/revsubformview"><button class="menuButton">Informeer Anderen</button></router-link>
            <router-link to="/userReviews"><button class="menuButton">Informeer Jezelf</button></router-link>
            <router-link to="/aboutpage"><button class="menuButton">Wat is dit?</button></router-link>
            <!-- <router-link to="/login"><button class="menuLoginButton">Login</button></router-link> -->
        </div>

        </div>

        <!-- horizontal divider line (black line of 1px height) along the whole page below the menubar -->
        <div class="dividerLine">

    </div>

</template>

<script>
export default {
  name: 'menuBar',
}
</script>

<style scoped>
.dividerLine {
    background-color: black;
    height: 1px;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0%;
}

.menuBar {
    display: flex;
    background-color: rgb(255, 213, 0);
    color: rgb(255, 213, 0);
    font-weight: 500;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 0px;
    transition: background-color 0.3s ease;
    height: 20px;
    width: 50%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    right: 0%;
}
.menuBar {
    display: flex;
    background-color: rgb(255, 213, 0);
    color: rgb(255, 213, 0);
    font-weight: 500;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 0px;
    transition: background-color 0.3s ease;
    height: 50px;
    width: 50%;
    margin: 0 auto;
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


/* logo image in top left of menubar */
.logo {
    width: 60px;
    height: 50px;
    margin: 20px 0px 10px -500px;
    padding: 0px;
    float: left;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.menuHomeButton {
    padding: 10px 10px;
    font-size: 30px;
    background-color: rgb(255, 213, 0);
    color: rgb(30, 30, 30);
    font-weight: 300;
    font-family: 'Arial';
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 0px;
    transition: background-color 0.3s ease;
    height: 50px;
}
.menuHomeButton:hover {
    background-color: rgb(255, 254, 211);
    border-color: black;
    border-radius: px;
  }

.menuButton {
    padding: 20px 30px;
    font-size: 20px;
    font-weight: 500;
    color: rgb(30, 30, 30);
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 0px;
    background-color: transparent;
    transition: background-color 1s ease;
    height: 50px;
}

.menuButton:hover {
    color: rgb(255, 254, 211);
    background-color: rgb(255, 213, 0);
    border-radius: 0px;
  }

.menuLoginButton {
    padding: 20px 30px;
    font-size: 20px;
    font-weight: 300;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 0px;
    background-color: transparent;
    transition: background-color 1s ease;
    height: 100px;
    float: right;
}

.menuLoginButton:hover {
    color: rgb(255, 254, 211);
    background-color: black;
    border-radius: 0px;
  }

</style>
