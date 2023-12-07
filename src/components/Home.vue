<script>
import Navbar from './Navbar.vue';
import Jumbotron from './Jumbotron.vue';
import router from '../router';
export default {
  name: "Home",
  components: {
    Navbar,
    Jumbotron,
  },
  /* check whether the user has reached "/" when using the back button,
   then he should be logged out so that he can no longer go forward and can therefore bypass the login */
  mounted() {
    window.onpopstate = event => {
      if (event.state !== null) {
        if (event.state.current === "/") {
          this.loggout(event)
        }
      }

    };
  }, methods: {
    loggout(event) {
      event.preventDefault()
      /* clear the sessionStorage */
      sessionStorage.clear()
      router.push("/");
    }
  }

}


</script>

<template>
  <div id="app">
    <Navbar />
    <Jumbotron />
  </div>
</template>

<style scoped></style>
