<template>
  <!-- Use Routerlinks to naviagte quickly between pages -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a v-if="this.id == null" class="navbar-brand" href="#" style="margin-left: 10px;">
      <img class="rounded-circle shadow-4-strong" src="src/assets/timAvatar.png" alt="" width="30">
    </a>
    <a v-if="this.id != null" class="navbar-brand" href="#" style="margin-left: 10px;">
      <RouterLink to="/about" style="text-decoration: none; color: lightgray;"><img class="rounded-circle shadow-4-strong"
          src="../assets/timAvatar.png" alt="" width="30"></RouterLink>
    </a>
    <a v-if="this.id == null" class="navbar-brand" href="#">Adminpage</a>
    <a v-if="this.id != null" class="navbar-brand">
      <RouterLink to="/about" style="text-decoration: none; color: lightgray;">AdminPage</RouterLink>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <div v-if="this.id == null">
          <li class="nav-item active">

            <div class="nav-link">
              <LoginModal v-bind:visible="false" />
            </div>
          </li>
        </div>
        <div v-if="this.id != null">

          <RouterLink to="/mydata" style="text-decoration: none; color: lightgray;">MyData</RouterLink> |

          <RouterLink to="/personlist" style="text-decoration: none; color: lightgray;">List Persons</RouterLink> |

          <RouterLink to="/search" style="text-decoration: none; color: lightgray;">Search</RouterLink> |
          <a id="xxx" style="text-decoration: none; color: lightgray; cursor: pointer;" class="text-center"
            @click="loggout">Logout</a>



        </div>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<script>
import router from '../router';
import LoginModal from "../components/LoginModal.vue";
import { RouterLink, RouterView } from 'vue-router';
export default {
  name: "Navbar",
  components: { LoginModal, RouterLink, RouterView },
  data() {
    return {
      id: sessionStorage.getItem("session"),
      userID: sessionStorage.getItem("id"),
    }
  }, methods: {
    loggout(event) {
      event.preventDefault()
      router.push("/");
      sessionStorage.clear()
    }
  }
}

</script>
