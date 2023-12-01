<template>
  <!-- BackgroundImage -> Fullscreen and black and white -->
  <div style="background: url(src/assets/pexels.jpg) no-repeat center center fixed;
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
  <div class="jumbotron text-center" style="margin: 50px;">
    <h1 class="display-4" style="color: white;">AdminPage</h1>
    <p class="lead" style="color: white;">Login, Sign Up and Datamanagement.</p>
  </div>
</template>

<script>
export default {
  name: "Jumbotron"
}
</script>