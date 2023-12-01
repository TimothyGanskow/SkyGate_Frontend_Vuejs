<template>
  <!-- Go Back button -> function goBack and Icon BIconArrowLeft as the button-->
  <div @click="goBack" style="padding:20px; cursor: pointer; font-size: 30px;">
    <BIconArrowLeft />
  </div>
</template>


<script>

export default {
  name: "BackButton",
  data() {
    return {
    };
  },

  methods: {
    /* push the User back to /about page when last location is /personlist else go 1 back */
    goBack() {
      if (this.$router.currentRoute._value.fullPath === "/personlist") {
        this.$router.push("/about")
      } else {
        this.$router.go(-1);
      }

    }
  },
}
</script>
