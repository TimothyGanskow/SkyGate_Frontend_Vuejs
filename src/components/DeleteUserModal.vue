<template>
  <div v-if=openClose class="modal fade show" style="display:block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Delete</h5>
          <button type="button" class="btn btn-link" @click="setOpenClose()" aria-label="Close">
            <!-- <span aria-hidden="true">&times;</span> -->
            <bIconXLg />
          </button>
        </div>


        <!-- Login/REg Body -->
        <div class="modal-body">

          <p>Are Your sure that you want to delete {{ this.email }}</p>

        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-link" @click="deleteUser()">Submit</button>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-link" style="color:red" @click="setOpenClose()">Delete</button>
</template>

<script>
import axios from "axios"
import router from '../router/index.js';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"

export default {
  name: "DeleteUserModal",

  props: {
    visible: Boolean,
    userEmail: String,
    id: Number,
    permission: Number
  },

  data() {
    return {
      openClose: this.visible,
      logRegBool: true,
      email: this.userEmail,
      userID: this.id
    }
  },
  methods: {
    setOpenClose() {
      this.openClose = !this.openClose;
    },
    deleteUser() {
      console.log(this.userID)
      axios.delete(import.meta.env.VITE_API_USER_API_KEY + "/" + this.userID).then(response => {
        this.setOpenClose()
        console.log(response)
        if (response.data.code === 202) {
          toast.success(this.email + " erfolgreich gelöscht", {
            autoClose: 3000
          })

          if (sessionStorage.getItem("id").toString() === this.userID.toString()) {
            setTimeout(() => router.push("/"), 3000),
              this.setOpenClose()
            sessionStorage.clear()
          } else {
            setTimeout(() => router.push("/personlist"), 3000),
              this.setOpenClose()
          }
        } else {
          toast.error("Sorry something went wrong", {
            autoClose: 3000
          },
            /*  setTimeout(() => router.push("/personlist"), 3000), */
            this.setOpenClose()
          )
        }
      }).catch(e => { console.log(e); });
    },

  },


}
</script>
