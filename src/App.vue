<script>


import { RouterLink, RouterView } from "vue-router";


export default{
  computed:{
    DisplayFooter(){
      return this.$route.name === 'lists' || this.$route.name === 'add' || this.$route.name === 'dashboard' || this.$route.name === 'profil' || this.$route.name === 'category'
    }

  }

}

</script>

<template>
  <footer v-if="DisplayFooter">
    <div class="wrapper">
      <nav>
        <RouterLink to="/lists"><img src="../../images/listes.png"></RouterLink>
        <RouterLink to="/add"><img src="../../images/add.png"></RouterLink>
        <RouterLink to="/dash"><img src="../../images/Dashboard.png"></RouterLink>
        <RouterLink to="/account"><img src="../../images/login.png"></RouterLink>
      </nav>
    </div>
  </footer>
  <RouterView />
</template>




<style>
.wrapper {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-style: inset;
  background: white;
  height: 100px;
  width: auto;
  border-radius: 5%;
}


footer {
  position: fixed;
  width: 100%;
  left: 0%;
  top: 90%;
}

nav {
  display: inline-block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  justify-content: space-around;
}


nav a {
  padding: 0 1rem;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
