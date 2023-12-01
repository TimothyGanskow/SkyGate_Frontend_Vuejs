<template>
  <!-- Backgroundpicture -> Fullscreen and Black and white -->
  <div
    style="background: url(../src/assets/listPerson.jpg) no-repeat center center fixed;
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

  <!-- import Navbar -->
  <Navbar />

  <div style="background-color: rgba(var(--bs-dark-rgb)); padding:20px; width:500px; height:93vh">
    <h3 style="color: white; padding: 10px;" class="text-center">Change User Details</h3>

    <!-- Map userData -->
    <div v-for="item in userData">
      <form @submit="onSubmit">
        <div class="form-group row" style="padding:10px;">
          <label for="staticEmail" class="col-sm-2 col-form-label" style="color: white;">E-mail</label>
          <div class="col-sm-10">

            <!-- readOnly if userPermission == 1 else formfield -->
            <input :readonly="this.myPermission == 1" type="text" v-model="v$.email.$model" v-bind:class="[this.myPermission == 1 ? 'form-control-plaintext' : v$.email.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="staticEmail" :placeholder="item.email">

            <!-- ERROR Message -->
            <div v-bind:class="[v$.email.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.email.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>

            </div>
          </div>
        </div>
        <div class="form-group row" style="padding:10px;">
          <label for="staticName" class="col-sm-2 col-form-label" style="color: white;">Name</label>
          <div class="col-sm-10">
            <input :readonly="this.myPermission == 1" type="text" v-model="v$.name.$model" v-bind:class="[this.myPermission == 1 ? 'form-control-plaintext' : v$.name.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="staticName" :placeholder="item.name">
            <div v-bind:class="[v$.name.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.name.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>

          </div>

        </div>
        <div class="form-group row" style="padding:10px;">
          <label for="staticPostCode" class="col-sm-2 col-form-label" style="color: white;">PLZ</label>
          <div class="col-sm-10">
            <input :readonly="this.myPermission == 1" type="text" v-model="v$.postcode.$model" v-bind:class="[this.myPermission == 1 ? 'form-control-plaintext' : v$.postcode.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="staticPostCode" :placeholder="item.postcode">
            <div v-bind:class="[v$.postcode.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.postcode.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>


          </div>
        </div>
        <div class="form-group row" style="padding:10px;">
          <label for="staticPlace" class="col-sm-2 col-form-label" style="color: white;">Ort</label>
          <div class="col-sm-10">
            <input :readonly="this.myPermission == 1" type="text" v-model="v$.place.$model" v-bind:class="[this.myPermission == 1 ? 'form-control-plaintext' : v$.place.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="staticPlace" :placeholder="item.place">
            <div v-bind:class="[v$.place.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.place.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>

        <!-- Telefonfield -->
        <div class="form-group row" style="padding:10px;">
          <label for="staticTelefon" class="col-sm-2 col-form-label" style="color: white;">Telefon</label>
          <div class="col-sm-10">
            <input :readonly="this.myPermission == 1" type="text" v-model="v$.telefon.$model" v-bind:class="[this.myPermission == 1 ? 'form-control-plaintext' : v$.telefon.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="staticTelefon" :placeholder="item.telefon">
            <div v-bind:class="[v$.telefon.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.telefon.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>


        <!-- PasswortField -->
        <div v-if="this.myPermission > 1" class="form-group row" style="padding:10px;">
          <label for="inputpasswort" class="col-sm-2 col-form-label" style="color: white;">passwort</label>
          <div class="col-sm-10">
            <input :readonly="this.myPermission == 1" type="password" v-model="v$.passwort.$model" v-bind:class="[v$.passwort.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="inputpasswort" :placeholder="'••••••••••••••••'" autocomplete="on">
            <div v-bind:class="[v$.passwort.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.passwort.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>

        <!-- PasswortAgainField -->
        <div v-if="this.myPermission > 1" class="form-group row" style="padding:10px;">
          <label for="inputpasswortWiederholen" class="col-sm-2 col-form-label" style="color: white;">passwort
            Wiederholen</label>
          <div class="col-sm-10">
            <input :readonly="this.myPermission == 1" type="password" v-model="v$.passwortAgain.$model" v-bind:class="[v$.passwortAgain.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="inputpasswortWiederholen" :placeholder="'••••••••••••••••'"
              autocomplete="on">
            <div v-bind:class="[v$.passwortAgain.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.passwortAgain.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>

        <!-- Permission Dropbox -> Only Changeable when userPermission > 2 -->
        <div v-if="this.myPermission > 2" :readonly="this.myPermission == 1" class="form-group col-md-4"
          style="padding:10px;">
          <label for="inputState" style="color: white;">Permission</label>
          <select id="inputState" class="form-control" v-model="permission">
            <option value="" selected>{{ this.getPermissionAsString(item.permission) }}</option>
            <option value="1">Standartuser</option>
            <option value="2">Superuser</option>
            <option value="3">Administrator</option>
          </select>
        </div>


        <!-- Submit the form wirh changes -->
        <button v-if="this.myPermission > 1" type="submit" class="btn btn-link" style="color: white;">Submit</button>
      </form>

      <div class="col col-lg-2">
        <!-- DeleteUserModal only when permission > 2 -> Admin -->
        <div v-if="this.myPermission > 2">
          <DeleteUserModal :visible="false" :userEmail="item.email" :id="item.id" />
        </div>

      </div>

      <!-- importet Backbutton -->
      <BackButton style="color: white;" />
    </div>
  </div>
</template>


<script>

import axios from "axios"
import router from '../router/index.js';
import Navbar from "./Navbar.vue";
import DeleteUserModal from "./DeleteUserModal.vue";
import BackButton from "./BackButton.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'


/* Verstoß gegen never repeat yourself */
/* validate a Name -> No Number and no special character exept spaace and dash */
export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-ZäöüÄÖÜ ._-]+(?:[-'\s][a-zA-ZäöüÄÖÜ ._-]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

/* validate a Phonenumber -> No Chars, no special character exept +, min 10 length */
export function validPhone(number) {
  let validNamePattern = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$");
  if (validNamePattern.test(number)) {
    return true;
  }
  return false;
}

/* validiere den Postcode -> Just Numbers, no special chars */
export function validPostCode(number) {
  let validNamePattern = new RegExp("^[a-zA-Z0-9]+(?:[-'\\s][a-zA-Z0-9]+)*$");
  if (validNamePattern.test(number)) {
    return true;
  }
  return false;
}


/* validate a Place -> No Number and no special character exept spaace and dash */
export function validPlace(place) {
  let validNamePattern = new RegExp("^[a-zA-ZäöüÄÖÜ ._-]+(?:[-'\s][a-zA-ZäöüÄÖÜ ._-]+)*$");
  if (validNamePattern.test(place)) {
    return true;
  }
  return false;
}

/* validate a PasswortAgain is equal to passwort*/
export function validPW(name) {
  if (name === this.passwort) {
    return true;
  }
  return false;
}

export default {
  name: "changeUserData",
  /* components: gets imports running */
  components: { Navbar, BackButton, DeleteUserModal },

  /* setup -> oldverison from <script setup> -> run validator */
  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      /* state */
      userData: [],
      email: "",
      passwort: "",
      passwortAgain: "",
      name: "",
      telefon: "",
      postcode: "",
      permission: "",
      myPermission: "",
      place: "",
      userID: this.$route ? this.$route.params.id : "",
      id: sessionStorage.getItem("id")
    };
  },
  /* function beforeMount execute bevor Page is Loaded -> Check if SessionStorage has a session -> !session -> loggout
  get UserData -> userID param in the route*/
  async beforeMount() {
    if (!sessionStorage.getItem("session")) {
      router.push("/")
    }
    await axios.get(import.meta.env.VITE_API_USER_API_KEY + "/" + this.userID).then(response => {
      this.userData.push(response.data);
    }).catch(e => { console.log(e); });


    /* getOwn Permission */
    await axios.get(import.meta.env.VITE_API_USER_API_KEY + "/" + this.id).then(response => {
      this.myPermission = response.data.permission;
    }).catch(e => { console.log(e); });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      /* Sympfony -> $request->request->get("") -> needs an other axios construction
      with URLSearchParams with the params append
      Plain PHP has the standart axios construction */
      let ax;
      if (import.meta.env.VITE_API_BASEURLPORT === "8000") {
        const params = new URLSearchParams();
        params.append('email', this.email);
        params.append('passwort', this.passwort);
        params.append('name', this.name);
        params.append('telefon', this.telefon);
        params.append('postcode', this.postcode);
        params.append('place', this.place);
        params.append('permission', this.permission);
        params.append('terms', this.terms);

        ax =
          axios(
            {
              method: 'patch',
              url: import.meta.env.VITE_API_USER_API_KEY + "/" + this.userID,
              data: params
            })
      } else {
        ax = axios.patch(import.meta.env.VITE_API_USER_API_KEY + "/" + this.userID, {
          email: this.email,
          passwort: this.passwort,
          name: this.name,
          telefon: this.telefon,
          postcode: this.postcode,
          place: this.place,
          permission: this.permission
        })
      }

      /* Make the request */
      ax.then(response => {
        /* Check the response */
        if (response.status === 200) {
          /* response.status === 200 open a toast succes and push the User back to the personlist */
          toast.success(this.email + " erfolgreich geupdatet", {
            autoClose: 3000
          },
            setTimeout(() => router.push("/personlist"), 3000)
          )
        }
        else {
          /* else open a toast error and push the User back to the personlist*/
          toast.error(this.email + "Sorry something went wrong", {
            autoClose: 3000
          },
            router.push("/personlist"))
        }
      }).catch(e => {
        console.log(e)
        if (e.response.data.code === "23000") {
          toast.error(this.email + " is allready in Use", {
            autoClose: 3000
          })
        }
        if (e.response.data.errors[0]) {
          toast.error(e.response.data.errors[0], {
            autoClose: 3000
          })
        }
      });
    },

    /* Permission in DB as Int -> display for User as String */
    getPermissionAsString(perm) {
      let permCode;
      if (perm === 1) {
        permCode = "Standartuser"
      }
      else if (perm === 2) {
        permCode = "Superuser"
      }
      else if (perm === 3) {
        permCode = "Administrator"
      }
      return permCode
    },

  },
  computed: {
    /* Check which permission and reutn form-controll to edit or plaintext for permission ===1 */
    classPerPermission: function () {
      return this.content[this.permission] ? "form-control" : "form-control-plaintext";
    }
  },

  /* Validate Values befor allow Submit to DB */
  validations() {
    return {
      email: { email },
      name: {
        name_validation: {
          $validator: validName,
          $message: 'name cannot contain any special characters or numbers, except - and space'
        }
      },
      telefon: {
        phone_validation: {
          $validator: validPhone,
          $message: 'The phone number cannot contain any special characters, except -,+ or space'
        }
      },
      postcode: {
        postcode_validation: {
          $validator: validPostCode,
          $message: 'postcode cannot contain any special characters, except -'
        }
      },
      place: {
        place_validation: {
          $validator: validPlace,
          $message: 'place cannot contain any special characters, except - and space'
        }
      },
      passwort: {
      },
      passwortAgain: {
        passwort_validation: {
          $validator: validPW,
          $message: 'passwort doesnt match'
        }
      }
    }
  },
}
</script>
