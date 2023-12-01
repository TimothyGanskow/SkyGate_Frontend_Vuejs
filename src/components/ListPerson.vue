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

import axios from "axios"
import router from "../router";
import Navbar from "./Navbar.vue";
import BackButton from "./BackButton.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"

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
    getDatas: function () {

      let ax;
      if (import.meta.env.VITE_API_BASEURLPORT === "8000") {
        const params = new URLSearchParams();
        params.append('offset', 0);
        params.append('orderBy', this.orderBy !== "" ? this.orderBy : "email");
        params.append('sc', this.sc == true ? "asc" : "desc");
        params.append('email', this.email !== undefined ? this.email : "");
        params.append('name', this.name !== undefined ? this.name : "");
        params.append('place', this.place !== undefined ? this.place : "");
        params.append('postcode', this.postcode !== undefined ? this.postcode : "");
        params.append('telefon', this.telefon !== undefined ? this.telefon : "");
        ax =
          axios(
            {
              method: 'post',
              url: import.meta.env.VITE_API_SEARCHCOUNTER_API_KEY,
              data: params
            })
      } else {
        ax = axios.post(import.meta.env.VITE_API_SEARCHCOUNTER_API_KEY, {
          offset: 0,
          orderBy: this.orderBy !== "" ? this.orderBy : "email",
          sc: this.sc == true ? "asc" : "desc",
          email: this.email,
          name: this.name,
          place: this.place,
          postcode: this.postcode,
          telefon: this.telefon
        })
      }


      let axSearch;
      if (import.meta.env.VITE_API_BASEURLPORT === "8000") {
        const params = new URLSearchParams();
        params.append('offset', this.offset);
        params.append('orderBy', this.orderBy !== "" ? this.orderBy : "email");
        params.append('sc', this.sc == true ? "asc" : "desc");
        params.append('email', this.email !== undefined ? this.email : "");
        params.append('name', this.name !== undefined ? this.name : "");
        params.append('place', this.place !== undefined ? this.place : "");
        params.append('postcode', this.postcode !== undefined ? this.postcode : "");
        params.append('telefon', this.telefon !== undefined ? this.telefon : "");
        axSearch =
          axios(
            {
              method: 'post',
              url: import.meta.env.VITE_API_SEARCH_API_KEY,
              data: params
            })
      } else {
        axSearch = axios.post(import.meta.env.VITE_API_SEARCH_API_KEY, {
          offset: this.offset,
          orderBy: this.orderBy !== "" ? this.orderBy : "email",
          sc: this.sc == true ? "asc" : "desc",
          email: this.email,
          name: this.name,
          place: this.place,
          postcode: this.postcode,
          telefon: this.telefon
        })
      }

      ax.then(response => {
        this.userCount = response.data.result;
        this.getTabCount(response.data.result)
        if (response.data.result == 0) {
          toast.error("The search returned no results", {
            autoClose: 3000
          })
        }
      }).catch(e => { console.log(e); });

      /* Search */
      axSearch.then(response => {
        console.log(response)
        this.userData = response.data.result;

      }).catch(e => { console.log(e); });
    },
    clickList: function (id) {
      router.push("changeuserdata/" + id);
    },
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
