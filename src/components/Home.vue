<script>
import Navbar from './Navbar.vue';
import Jumbotron from './Jumbotron.vue';
import axios from 'axios';
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
      const userID = sessionStorage.getItem("id");
      event.preventDefault()

      let ax;
      if (import.meta.env.VITE_API_BASEURLPORT === "8000") {
        ax =
          axios(
            {
              method: 'post',
              url: import.meta.env.VITE_API_LOGGOUT_API_KEY + "/" + userID,
            })
      } else {
        ax = axios.post(import.meta.env.VITE_API_LOGGOUT_API_KEY + "/" + userID)
      }

      ax.then(response => {
        /* clear the sessionStorage */
        sessionStorage.clear('session')
        if (response.status === 200) {
          router.push("/");
          sessionStorage.clear()

        }

      }).catch(e => { console.log(e) });
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
