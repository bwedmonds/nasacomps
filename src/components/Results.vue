<template>
  <div class="results col-6">
    <div class="row">
      <div class="col-12">
        <h1>Available Land</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ol class="images">
          <li v-for="image in images" :key="image.id" @click="setActiveImage(image)">{{image.title}}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  //import from anything such as movie poster in class example
  import ImageDetails from "./ImageDetails.vue";

  export default {
    name: "Results",
    data() {
      return {};
    },
    computed: {
      images() {
        return this.$store.state.results;
      }
    },
    methods: {
      setActiveImage(image) {
        this.$store.dispatch("setActiveImage", image);
      }
    },
    components: {
      //add any here, such as movie poster from class example
      ImageDetails
    }
  };
</script>

<style>
  .results {
    background-color: lightslategrey;
  }
</style>