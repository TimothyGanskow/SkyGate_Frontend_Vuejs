<template>
  <div style="background: url(src/assets/pexels.jpg) no-repeat center center fixed;
                                                content: '';
                                                z-index: -1;
                                                width: 100%;
                                                height: 100%;
                                                position:absolute; 
                                                -webkit-background-size: cover;
                                                -moz-background-size: cover;
                                                -o-background-size: cover;
                                                background-size: cover;
                                                -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
                                                filter: grayscale(100%);">
  </div>

  <Navbar />

  <!-- <div style="margin:50px">
    <RouterLink to="/mydata" style="text-decoration: none; color: black;">MyData</RouterLink> |

    <RouterLink to="/personlist" style="text-decoration: none; color: black;">List Persons</RouterLink> |

    <RouterLink to="/search" style="text-decoration: none; color: black;">Search</RouterLink> |
    <a style="text-decoration: none; color: black; cursor: pointer;" class="text-center" @click="loggout">Logout</a>

    <RouterView />
  </div>
 -->


  <!-- Menu to nav between pages -->

  <div>
    <div class="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center" style="padding: 50px;">

      <div class="col">
        <RouterLink to="/mydata" style="text-decoration: none; color: black;">
          <div class="card" style="background-color: lightgray;">
            <img src="src/assets/myData.jpg" class="img-fluid img-thumbnail" alt="..."
              style="height: 200px; width:400px ;">
            <div class="card-body">
              <h5 class="card-title">Mydata</h5>
              <p class="card-text">Show your own Data</p>
            </div>
          </div>
        </RouterLink>
      </div>

      <div class="col">
        <RouterLink to="/searchResult" style="text-decoration: none; color: black;">

          <div class="card" style="background-color: lightgray;">
            <img src="src/assets/listPerson.jpg" class="img-fluid img-thumbnail" alt="..."
              style="height: 200px; width:400px;">
            <div class="card-body">
              <h5 class="card-title">List Person</h5>
              <p class="card-text">Show all users</p>
            </div>
          </div>

        </RouterLink>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center" style="padding: 20px;">
      <div>
        <RouterLink to="/search" style="text-decoration: none; color: black;">

          <div class="card" style="background-color: lightgray;">
            <img src="src/assets/search.jpg" class="img-fluid img-thumbnail" alt="..."
              style="height: 200px; width:400px ;">
            <div class="card-body">
              <h5 class="card-title">Search</h5>
              <p class="card-text">Search for Usern</p>
            </div>
          </div>
        </RouterLink>
      </div>

      <div class="col">
        <a style="text-decoration: none; color: black; cursor: pointer;" @click="loggout">
          <div class="card" style="background-color: lightgray;">
            <img src="src/assets/logout.jpg" class="img-fluid img-thumbnail" alt="..."
              style="height: 200px; width:400px;">
            <div class="card-body">
              <h5 class="card-title">Loggout</h5>
              <p class="card-text">Log out of the app</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import { RouterLink } from 'vue-router'
import router from '../router';
import Navbar from "./Navbar.vue";
export default {
  name: "UserNav",
  components: { Navbar },
  data() {
    return {
      userID: sessionStorage.getItem("id")
    }
  },
  methods: {
    setOpenClose() {
      this.openClose = !this.openClose;
    },
    toggleLogReg() {
      this.logRegBool = !this.logRegBool;
    },
    loggout(event) {
      event.preventDefault()
          this.setOpenClose()
          router.push("/");
          sessionStorage.clear()
    }

  },
  beforeMount() {
    if (!sessionStorage.getItem("session")) {
      router.push("/")
    }
  }

}
</script>
