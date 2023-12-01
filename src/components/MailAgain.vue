<template>
  <div v-if=openClose class="modal fade show" style="display:block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" style="text-decoration: none; color: black;">Send Mail</h5>
          <button type="button" class="btn btn-link" @click="setOpenClose()" aria-label="Close">
            <bIconXLg />
          </button>
        </div>


        <!-- Login/REg Body -->
        <div class="modal-body">
          <form @submit="onSubmit">
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
          </form>

        </div>
        <div class="modal-footer">

          <form @submit="onSubmit">
            <button type="submit" class="btn btn-link" :disabled="acceptableSubmittions">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <a style="cursor: pointer" class="text-center" @click="setOpenClose()">Send Mail again</a>
</template>

<script>
import login from '../../fetches/login.js';
import axios from "axios"
import router from '../router/index.js';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'


export default {
  name: "MailAgain",

  setup() {
    return { v$: useVuelidate() }
  },

  props: {
    visible: Boolean
  },

  data() {
    return {
      openClose: this.visible,
      email: ""
    }
  },
  methods: {
    setOpenClose() {
      this.openClose = !this.openClose;
      this.email = ""
    },
    toggleLogReg() {
      this.email = ""
    },

    onSubmit(event) {
      event.preventDefault()

      let ax;
      if (import.meta.env.VITE_API_BASEURLPORT === "8000") {
        const params = new URLSearchParams();
        params.append('email', this.email);
        ax =
          axios(
            {
              method: 'post',
              url: import.meta.env.VITE_API_MAILAGAIN_API_KEY,
              data: params
            })
      } else {
        ax = axios.post(import.meta.env.VITE_API_MAILAGAIN_API_KEY,
        {
          email: this.email,
        })
      }



      ax.then(response => {
          if (response.status === 201) {
            toast.success("Thank You, we send an email to " + this.email, {
              autoClose: 3000
            })
            this.setOpenClose()
          } else {
            toast.success("Thank You, we send an email to " + this.email, {
              autoClose: 3000
            })
          }

        }).catch(e => {

          if (e.response.data.code === "23000") {
            toast.error(this.email + " is allready Varified", {
              autoClose: 3000
            })
          } else {
            toast.error("We can not send an email to: " + this.email, {
              autoClose: 3000
            })
          }
        });
    },

  },

  computed: {
    acceptableSubmittions() {
      return this.email.length > 0 ? false : true
    },
  },

  validations() {
    return {
      email: { required, email },

    }
  },

}
</script>
