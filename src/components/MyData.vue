<template>
  <div style="background: url(src/assets/myData.jpg) no-repeat center center fixed;
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
  <div style="background-color: rgba(var(--bs-dark-rgb)); padding:20px; width:500px; height:93vh">
    <h3 style="color: white; padding: 10px;" class="text-center">My Data</h3>
    <div v-for="item in userData">
      <form @submit="onSubmit">
        <div class="form-group row" style="padding:10px;">
          <label for="staticEmail" class="col-sm-2 col-form-label" style="color: white; margin">E-mail</label>
          <div class="col-sm-10">
            <input type="text" v-model="v$.email.$model" v-bind:class="[v$.email.$errors.length !== 0 ? 'form-control is-invalid'
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
            <input type="text" v-model="v$.name.$model" v-bind:class="[v$.name.$errors.length !== 0 ? 'form-control is-invalid'
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
            <input type="text" v-model="v$.postcode.$model" v-bind:class="[v$.postcode.$errors.length !== 0 ? 'form-control is-invalid'
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
            <input type="text" v-model="v$.place.$model" v-bind:class="[v$.place.$errors.length !== 0 ? 'form-control is-invalid'
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
            <input type="text" v-model="v$.telefon.$model" v-bind:class="[v$.telefon.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="staticTelefon" :placeholder="item.telefon">
            <div v-bind:class="[v$.telefon.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.telefon.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>


        <!-- Passwortfield -->
        <div class="form-group row" style="padding:10px;">
          <label for="inputPasswort" class="col-sm-2 col-form-label" style="color: white;">Passwort</label>
          <div class="col-sm-10">
            <input type="password" v-model="v$.passwort.$model" v-bind:class="[v$.passwort.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="inputPasswort" :placeholder="'••••••••••••••••'" autocomplete="on">
            <div v-bind:class="[v$.passwort.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.passwort.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>

        <!-- PasswortAgain field -->
        <div class="form-group row" style="padding:10px;">
          <label for="inputPasswortWiederholen" class="col-sm-2 col-form-label" style="color: white;">Passwort
            Wiederholen</label>
          <div class="col-sm-10">
            <input type="password" v-model="v$.passwortAgain.$model" v-bind:class="[v$.passwortAgain.$errors.length !== 0 ? 'form-control is-invalid'
              : 'form-control isvalid']" id="inputPasswortWiederholen" :placeholder="'••••••••••••••••'"
              autocomplete="on">
            <div v-bind:class="[v$.passwortAgain.$errors.length !== 0 ? 'invalid-feedback'
              : 'valid-feedback']" v-for="(error, index) of v$.passwortAgain.$errors" :key="index">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>



        <!-- Set Permission -->
        <div v-if="this.myPermission[0] == 'ROLE_SUPER_ADMIN'" :readonly="this.myPermission[0] == 'ROLE_USER'"
          class="form-group col-md-4" style="padding:10px;">
          <label for="inputState" style="color: white;">Permission</label>
          <select id="inputState" class="form-control" v-model="permission">
            <option value="" selected>{{ item.permission[0] }}</option>
            <option value="1">ROLE_USER</option>
            <option value="2">ROLE_ADMIN</option>
            <option value="3">ROLE_SUPER_ADMIN</option>
          </select>
        </div>



        <!-- Submit the form wirh changes -->
        <button type="submit" style="color: white; margin-top:30px;" class="btn btn-link">Submit</button>
      </form>

      <!-- Open the Delete Modal to delete yourself -->
      <div v-if="this.myPermission[0] == 'ROLE_SUPER_ADMIN'">
        <DeleteUserModal :visible="false" :userEmail="item.email" :id="item.id" />

      </div>
      <BackButton style="color:white" />
    </div>
  </div>
</template>


<script>
import router from '../router/index.js';
import Navbar from "./Navbar.vue";
import BackButton from "./BackButton.vue";
import DeleteUserModal from "./DeleteUserModal.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { getUserByID } from "../fetch/fetchUser";
import { patchUser } from "../fetch/fetchUser";

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

  name: "myData",
  components: { Navbar, BackButton, DeleteUserModal },

  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      userData: [],
      email: "",
      passwort: "",
      passwortAgain: "",
      name: "",
      telefon: "",
      postcode: "",
      permission: "",
      place: "",
      myPermission: ""
    };
  },
  async beforeMount() {
    /* Check if user has a session -> if not push user out */
    if (!sessionStorage.getItem("session")) {
      router.push("/")
    }

    /* Fill a Array with userdata */
    const id = sessionStorage.getItem("id");
    const responsePermission = await getUserByID(id);
    this.myPermission = responsePermission.permission;
    this.userData.push(responsePermission);


  },
  methods: {
    async onSubmit(event) {
      const id = sessionStorage.getItem("id");
      event.preventDefault();

      let perm
      if (this.permission === "1") {
        perm = "ROLE_USER"
      }
      if (this.permission === "2") {
        perm = "ROLE_ADMIN"
      }
      if (this.permission === "3") {
        perm = "ROLE_SUPER_ADMIN"
      }
      /* Make the request */
      const response = await patchUser(id, this.email, this.passwort, this.name, this.telefon, this.postcode, this.place, perm);
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
    },

    /* Helpfunction to get a String to the permissionCode */
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
    /* Return plaintext when user hastn the permission to change Datas */
    classPerPermission: function () {
      return this.content[this.permission] ? "form-control" : "form-control-plaintext";
    }
  },

  /* Validators */
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
          $message: 'Passwort doesnt match'
        }
      }
    }
  },
}
</script>