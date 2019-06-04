<template>
  <div class="active-image col-6">
    <h1>Avoid MadMax future. Buy Now.</h1>
    <!-- not sure what goes here yet -->
    <image-details :image="activeImage" />
  </div>
</template>

<script>
  //import anything? based upon what goes above
  import ImageDetails from "./ImageDetails.vue";

  export default {
    name: "ActiveImage",
    data() {
      return {};
    },
    computed: {
      activeImage() {
        return this.$store.state.activeImage;
      }
    },
    components: {
      //if you have one like MoviePoster in example
      ImageDetails
    }
  };
</script>
<style>
  .active-image {
    background-color: darkgrey;
  }
</style>