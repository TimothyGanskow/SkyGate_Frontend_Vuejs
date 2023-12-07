<template>
  <div style="background: url(../src/assets/listPerson.jpg) no-repeat center center fixed;
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

  <div style="margin: 50px">
    <table class="table table-dark table-hover rounded-3">
      <thead>
        <tr>
          <!-- terniary email -->
          <th style="cursor: pointer" v-if="this.orderBy == 'email' && this.sc == true" scope="col"
            v-on:click="clickHeader('email')">E-Mail
            <BIconCaretUpFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy == 'email' && this.sc == false" scope="col"
            v-on:click="clickHeader('email')">E-Mail
            <BIconCaretDownFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy !== 'email'" scope="col" v-on:click="clickHeader('email')">E-Mail
            <BIconCaretDown />
          </th>

          <!-- terniary name -->

          <th style="cursor: pointer" v-if="this.orderBy == 'name' && this.sc == true" scope="col"
            v-on:click="clickHeader('name')">Name
            <BIconCaretUpFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy == 'name' && this.sc == false" scope="col"
            v-on:click="clickHeader('name')">Name
            <BIconCaretDownFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy !== 'name'" scope="col" v-on:click="clickHeader('name')">Name
            <BIconCaretDown />
          </th>

          <!-- terniary postcode -->
          <th style="cursor: pointer" v-if="this.orderBy == 'postcode' && this.sc == true" scope="col"
            v-on:click="clickHeader('postcode')">PLZ
            <BIconCaretUpFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy == 'postcode' && this.sc == false" scope="col"
            v-on:click="clickHeader('postcode')">PLZ
            <BIconCaretDownFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy !== 'postcode'" scope="col" v-on:click="clickHeader('postcode')">
            PLZ
            <BIconCaretDown />
          </th>

          <!-- terniary place -->
          <th style="cursor: pointer" v-if="this.orderBy == 'place' && this.sc == true" scope="col"
            v-on:click="clickHeader('place')">Ort
            <BIconCaretUpFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy == 'place' && this.sc == false" scope="col"
            v-on:click="clickHeader('place')">Ort
            <BIconCaretDownFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy !== 'place'" scope="col" v-on:click="clickHeader('place')">Ort
            <BIconCaretDown />
          </th>

          <!-- terniary place -->
          <th style="cursor: pointer" v-if="this.orderBy == 'telefon' && this.sc == true" scope="col"
            v-on:click="clickHeader('telefon')">Telefon
            <BIconCaretUpFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy == 'telefon' && this.sc == false" scope="col"
            v-on:click="clickHeader('telefon')">Telefon
            <BIconCaretDownFill />
          </th>
          <th style="cursor: pointer" v-if="this.orderBy !== 'telefon'" scope="col" v-on:click="clickHeader('telefon')">
            Telefon
            <BIconCaretDown />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userData" v-on:click="clickList(item.id)" style="cursor: pointer">
          <td>{{ item.email }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.postcode }}</td>
          <td>{{ item.place }}</td>
          <td>{{ item.telefon }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-bind:class="[prevDisable == false ? 'page-item' : 'page-item disabled']">
          <a class="page-link" href="#" aria-label="Previous" v-on:click="clickPrev()">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li v-for="item in this.tabCount" class="page-item"><a class="page-link" href="#" v-on:click="clickTab(item)">{{
          item }}</a>
        </li>
        <li v-bind:class="[nextDisable == false ? 'page-item' : 'page-item disabled']">
          <a class="page-link" href="#" aria-label="Next" v-on:click="clickNext()">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
    <BackButton style="color: white;" />
  </div>
</template>


<script>
import router from "../router";
import Navbar from "./Navbar.vue";
import BackButton from "./BackButton.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"
import { searchUser, searchUserCounter } from "../fetch/fetchSearch";

export default {
  name: "listSearchPersons",
  components: { Navbar, BackButton },
  data() {
    return {
      userData: "",
      userCount: "",
      tabCount: "",
      offset: 0,
      orderBy: "",
      sc: true,
      email: this.$route ? this.$route.query.email : "",
      name: this.$route ? this.$route.query.name : "",
      place: this.$route ? this.$route.query.place : "",
      postcode: this.$route ? this.$route.query.postcode : "",
      telefon: this.$route ? this.$route.query.telefon : "",
    };
  },
  beforeMount() {
    if (!sessionStorage.getItem("session")) {
      router.push("/")
    }
    this.getDatas();
  },
  methods: {
    getDatas: async function () {
      /* Search */
      const response = await searchUser(this.offset, this.orderBy, this.sc, this.email, this.name, this.place, this.postcode, this.telefon)
      this.userData = response;

      /* SearchCounter */
      const responseCounter = await searchUserCounter(this.orderBy, this.sc, this.email, this.name, this.place, this.postcode, this.telefon)
      this.userCount = responseCounter.result;
      this.getTabCount(responseCounter.result)
      if (responseCounter.result == 0) {
        toast.error("The search returned no results", {
          autoClose: 3000
        })
      }
    },
    /* clickList: function (id) {
      router.push("changeuserdata/" + id);
    }, */
    clickHeader: function (name) {
      this.sc = !this.sc;
      this.orderBy = name;
      this.getDatas();
    },
    clickNext: function () {
      this.offset = this.offset + 10;
      this.getDatas();
    },
    clickPrev: function () {
      this.offset = this.offset - 10;
      this.getDatas();
    },
    clickTab: function (item) {
      this.offset = item * 10 - 10;
      this.getDatas();
    },
    getTabCount: function (total) {
      let v1 = Math.floor(total / 10);
      let v2 = total % 10;
      { v2 == 0 ? this.tabCount = v1 : this.tabCount = v1 + 1 }

    },
    clickList: function (id) {
      router.push("../changeuserdata/" + id);
    }
  },
  computed: {
    nextDisable() {
      return this.userCount - this.offset <= 10 ? true : false
    },
    prevDisable() {
      return this.offset === 0 ? true : false
    },
  }

}
</script>
