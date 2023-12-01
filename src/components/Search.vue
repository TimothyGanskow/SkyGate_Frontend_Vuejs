<template>
  <div style="background: url(src/assets/search.jpg) no-repeat center center fixed;
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
  <div style=" background-color: rgba(var(--bs-dark-rgb)); padding:20px; width:500px; height:93vh">
    <h3 style="padding:10px; margin:20px; color:white" class="text-center">Search Users</h3>
    <div style="padding:10px">
      <form @submit="onSubmit">
        <div class="form-group row" style="padding:10px">
          <label for="staticEmail" class="col-sm-2 col-form-label" style="color:white">E-mail</label>
          <div class="col-sm-10">
            <input type="text" v-model="email" class='form-control' id="staticEmail" placeholder="Suche Email">
          </div>
        </div>
        <div class="form-group row" style="padding:10px">
          <label for="staticName" class="col-sm-2 col-form-label" style="color:white">Name</label>
          <div class="col-sm-10">
            <input type="text" v-model="name" class='form-control' id="staticName" placeholder="Suche Name">
          </div>
        </div>
        <div class="form-group row" style="padding:10px">
          <label for="staticPostCode" class="col-sm-2 col-form-label" style="color:white">PLZ</label>
          <div class="col-sm-10">
            <input type="text" v-model="postcode" class='form-control' id="staticPostCode"
              placeholder="Suche Postleitzahl">
          </div>
        </div>
        <div class="form-group row" style="padding:10px">
          <label for="staticPlace" class="col-sm-2 col-form-label" style="color:white">Ort</label>
          <div class="col-sm-10">
            <input type="text" v-model="place" class="form-control" id="staticPlace" placeholder="Suche Ort">
          </div>
        </div>
        <div class="form-group row" style="padding:10px">
          <label for="staticTelefon" class="col-sm-2 col-form-label" style="color:white">Telefon</label>
          <div class="col-sm-10">
            <input type="text" v-model="telefon" class='form-control' id="staticTelefon"
              placeholder="Suche Telefonnummer">
          </div>
        </div>
        <button type="submit" style="color: white; padding:10px;" class="btn btn-link">Submit</button>
      </form>
    </div>
    <BackButton style="color:white" />
  </div>
</template>


<script>
import router from '../router/index.js';
import Navbar from './Navbar.vue';
import BackButton from './BackButton.vue';
export default {
  name: "myData",
  components: { Navbar, BackButton },
  data() {
    return {
      email: "",
      name: "",
      telefon: "",
      postcode: "",
      place: "",
      offset: "",
      orderBy: "",
      sc: "",

    }
  },



  beforeMount() {
    if (!sessionStorage.getItem("session")) {
      router.push("/")
    }
  },

  methods: {
    onSubmit(event) {
      event.preventDefault()
      router.push({
        path: `/searchResult/`,
        query: {
          offset: 0,
          orderBy: "name",
          sc: "asc",
          email: this.email,
          name: this.name,
          telefon: this.telefon,
          postcode: this.postcode,
          place: this.place
        }
      })

    }
  },


}
</script>
