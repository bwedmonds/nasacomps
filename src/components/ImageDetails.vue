<template>
  <div class="row image">
    <div class="card col" v-if="image.title">
      <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="Image Details">
      <div class="card-body">
        <h5 class="card-title">{{image.title}}</h5>
        <p class="card-text">{{image.explanation}}</p>
        <!-- <a href="#" class="btn btn-primary">Add to Favorites</a> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageDetails",
    props: ["image"],
    data() {
      return {};
    },
  };
</script>