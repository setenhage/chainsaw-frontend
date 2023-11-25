<template>
  <div class="about-us">
    <h2 class="title">About Us</h2>
    <p class="description">
      We are a dedicated team passionate about democratizing the housing market. We firmly believe in freedom of information and strive to provide the best platform for democratic access.
    </p>
    <div class="team-members">
      <div class="team-member" v-for="member in teamMembers" :key="member.name">
        <img src="../assets/submit.png" alt="Team Member" />
        <h3 class="member-name">{{ member.name }}</h3>
        <p class="member-title">{{ member.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      teamMembers: [
        {
          name: "Kris Evers",
          title: "CEO",
          image: "./assets/submit.png"
        },
        {
          name: "Suus ten Hage",
          title: "CTO",
          image: "https://www.pic2map.com/"
        },
        {
          name: "Raphael Stolpe",
          title: "CFO",
          image: "https://www.pic2map.com/"
        },
        {
          name: "Julia Fritz",
          title: "Head of Legal",
          image: "https://www.pic2map.com/"
        },
      ]
    };
  }
};
</script>

<style scoped>
.about-us {
  padding: 20px;
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 24px;
  text-align: center;
}

.description {
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
  margin-top: 10px;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.team-member {
  margin: 10px;
  width: 25%;
  text-align: center;
}

.member-name {
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
}

.member-title {
  font-size: 14px;
  color: #888;
}

img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
</style>

