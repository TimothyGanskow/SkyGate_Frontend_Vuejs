<!-- Succespage when Link for Emailconfirmation is valid and isMailconfirmed is updated -->
<template>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You, your email adress is confirmed!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>


  <body>
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">You will get redirect to our homepage</h1>
        <p class="lead">
          If you didnt get redirected, please click here
        </p>
        <a href="/" class="btn btn-primary">Go Home</a>
      </div>
    </div>
  </body>
</template>


<script>

export default {
  name: "succesConfirm",
  data() {
    return {
    }
  }, methods: {
    goBack() {
      /* send User back to Home after 5 sek */
      setTimeout(() => this.$router.push({ path: '/' }), 5000);
    }
  },

  beforeMount() {
    this.goBack();
  },
}
</script>
