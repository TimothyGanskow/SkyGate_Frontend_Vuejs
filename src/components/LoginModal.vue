<template>
  <div v-if=openClose class="modal fade show" style="display:block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if=this.logRegBool class="modal-title" style="text-decoration: none; color: black;">Login</h5>
          <h5 v-if=!this.logRegBool class="modal-title" style="text-decoration: none; color: black;">Sign UP</h5>
          <button type="button" class="btn btn-link" @click="setOpenClose()" aria-label="Close">
            <!-- <span aria-hidden="true">&times;</span> -->
            <bIconXLg />
          </button>
        </div>


        <!-- Login/REg Body -->
        <div class="modal-body">
          <form v-if=this.logRegBool @submit="onSubmit">
            <div class="form-group">
              <label for="exampleInputEmail1" style="color:black">Email address</label>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="Enter an email" autocomplete="on">
            </div>
            <div class="form-group">
              <label for="exampleInputpasswort1" style="color:black">passwort</label>
              <input v-model="passwort" type="password" class="form-control" id="exampleInputpasswort1"
                placeholder="Enter your passwort" autocomplete="on">
            </div>
          </form>


          <!-- REGISTRATION -->
          <form v-if=!this.logRegBool @submit="onSubmitRegistration">
            <div class="form-group">
              <label for="exampleInputEmail1" style="color:black">Email address</label>
              <input v-model="v$.email.$model" type="email" v-bind:class="[v$.email.$errors.length !== 0 ? 'form-control is-invalid'
                : 'form-control isvalid']" id="InputEmail" aria-describedby="emailHelp" placeholder="Email adress"
                required>
              <!-- Error Message -->
              <div v-bind:class="[v$.email.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>

            </div>
            <div class="form-group">
              <label for="exampleInputpasswort1" style="color:black">Name</label>
              <input v-model="v$.name.$model" type="text" v-bind:class="[v$.name.$errors.length !== 0 ? 'form-control is-invalid'
                : 'form-control isvalid']" id="InputName" placeholder="Name">
              <!-- Error Message -->
              <div v-bind:class="[v$.name.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.name.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="form-group">
              <label for="exampleInputpasswort1" style="color:black">Telefonnumber</label>
              <input v-model="v$.telefon.$model" type="text" v-bind:class="[v$.telefon.$errors.length !== 0 ? 'form-control is-invalid'
                : 'form-control isvalid']" id="InputTelefon" placeholder="telefonnumber">
              <!-- Error Message -->
              <div v-bind:class="[v$.telefon.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.telefon.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="form-group">
              <label for="exampleInputpasswort1" style="color:black">Postcode</label>
              <input v-model="v$.postcode.$model" type="text" v-bind:class="[v$.postcode.$errors.length !== 0 ? 'form-control is-invalid'
                : 'form-control isvalid']" id="InputPostCode" placeholder="postcode">
              <!-- Error Message -->
              <div v-bind:class="[v$.postcode.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.postcode.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputpasswort1" style="color:black">Place</label>
              <input v-model="v$.place.$model" type="text" v-bind:class="[v$.place.$errors.length !== 0 ? 'form-control is-invalid'
                : 'form-control isvalid']" id="InputPlace" placeholder="place">
              <!-- Error Message -->
              <div v-bind:class="[v$.place.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.place.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputpasswort1" style="color:black">passwort</label>
              <input v-model="v$.passwort.$model" type="password" v-bind:class="[v$.passwort.$errors.length !== 0 ? 'form-control is-invalid'
                : 'form-control isvalid']" id="Inputpasswort" placeholder="passwort" autocomplete="on">
              <!-- Error Message -->
              <div v-bind:class="[v$.passwort.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.passwort.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputpasswort1" style="color:black">passwortAgain</label>
              <input v-model="v$.passwortAgain.$model" type="password" v-bind:class="[v$.passwortAgain.$errors.length !== 0 ? 'form-control is-invalid'
                : 'form-control isvalid']" id="InputpasswortAgain" placeholder="passwortAgain" autocomplete="on">
              <!-- Error Message -->
              <div v-bind:class="[v$.passwortAgain.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.passwortAgain.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="form-check" style="color:black">
              <input v-model="v$.terms.$model" type="checkbox" v-bind:class="[v$.terms.$errors.length !== 0 ? 'form-check-input is-invalid'
                : 'form-check-input']" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Agree to terms and conditions</label>
              <!-- Error Message -->
              <div v-bind:class="[v$.terms.$errors.length !== 0 ? 'invalid-feedback'
                : 'valid-feedback']" v-for="(error, index) of v$.terms.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <!-- Switch Reg/Login -->
          <a v-if=this.logRegBool href="#" @click="toggleLogReg()" style="margin-left: 20px;"
            class="position-absolute start-0">Sign Up first</a>
          <a v-if=!this.logRegBool href="#" @click="toggleLogReg()" style="margin-left: 20px;"
            class="position-absolute start-0">Konto bereits
            vorhanden</a>
          <!-- Openmodal to send Mail again -->
          <MailAgain v-bind:visible="false" />
          <form @submit="onSubmit" v-if=this.logRegBool>
            <button type="submit" class="btn btn-link" :disabled="acceptableSubmittions">Submit</button>
          </form>
          <form @submit="onSubmitRegistration" v-if=!this.logRegBool>
            <button type="submit" class="btn btn-link" :disabled="acceptableRegistration">Submit</button>
          </form>
        </div>
      </div>

    </div>
  </div>
  <a style="text-decoration: none; color: lightgray; cursor: pointer" class="text-center"
    @click="setOpenClose()">Login</a>
</template>

<script>
import MailAgain from './MailAgain.vue';
import { createUser } from '../fetch/fetchUser';
import { loginUser } from "../fetch/fetchLogin";
import { loginToken } from "../fetch/fetchToken";
import router from '../router';
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
  name: "LoginModal",

  setup() {
    return { v$: useVuelidate() }
  },

  props: {
    visible: Boolean
  },

  components: {
    MailAgain
  },

  data() {
    return {
      openClose: this.visible,
      logRegBool: true,
      email: "",
      passwort: "",
      passwortAgain: "",
      name: "",
      telefon: "",
      postcode: "",
      place: "",
      terms: "",
    }
  },
  methods: {
    setOpenClose() {
      this.openClose = !this.openClose;
      this.email = "",
        this.passwort = "",
        this.passwortAgain = "",
        this.name = "",
        this.telefon = "",
        this.postcode = "",
        this.place = "",
        this.terms = ""
      this.logRegBool = true;
    },
    toggleLogReg() {
      /* Set ALl Values to empty when toggled */
      this.logRegBool = !this.logRegBool;
      this.email = "",
        this.passwort = "",
        this.passwortAgain = "",
        this.name = "",
        this.telefon = "",
        this.postcode = "",
        this.place = "",
        this.terms = ""
    },
    async onSubmit(event) {
      event.preventDefault()
      let response = await loginUser(this.email, this.passwort);
      if (response.isConfirmed === true) {
        if (response.statuscode === 200) {
          sessionStorage.setItem('id', response.userID)
          await loginToken(this.email, this.passwort);
          this.setOpenClose()
          toast.success("Welcome " + response.email, {
            autoClose: 3000
          }),
            setTimeout(() => router.push("/about"))
        } else {
          toast.error("Sorry, something went wrong", {
            autoClose: 3000
          })
        }
      } else {
        toast.error("Please verify your email first", {
          autoClose: 3000
        })
      }



    },
    async onSubmitRegistration(event) {
      event.preventDefault()

      const response = await createUser(this.email, this.passwort, this.name, this.telefon, this.postcode, this.place, this.terms)
      if (response.statuscode === 201) {
        toast.success("Thank You, we send an email to " + this.email, {
          autoClose: 3000
        })
        this.setOpenClose()
      } else {
        toast.error("Sorry we can not send an email to " + this.email, {
          autoClose: 3000
        })
      }
    },

  },

  computed: {
    /* Disbale the submit button as long as email or pw are empty */
    acceptableSubmittions() {
      return this.email.length > 0 && this.passwort.length > 0 ? false : true
    },
    acceptableRegistration() {
      return this.email.length > 0 && this.passwort.length > 0 && this.passwortAgain.length > 0 &&
        this.name.length > 0 && this.telefon.length > 0 &&
        this.place.length > 0 &&
        this.postcode.length > 0 && this.terms === true ? false : true
    },
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
      terms: {
        required
      },
      passwort: {
        required
      },
      passwortAgain: {
        required, passwort_validation: {
          $validator: validPW,
          $message: 'passwort doesnt match'
        }
      }
    }
  },

}
</script>
