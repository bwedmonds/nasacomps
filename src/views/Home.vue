<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6">
        <img alt="Nasa logo"
          src="https://i1.wp.com/www.newspacechicago.com/wp-content/uploads/2017/12/NASA-logo.png?fit=319%2C201">
      </div>
      <div class="col-6">
        <h1>Final Frontier Land for Sale</h1>
        <p>Get your plot now--before Earth turns into a flaming hellscape.
          <form @submit.prevent="searchImages">
            <input type="text" placeholder="Find your spacey haven..." v-model="query">
            <button type="submit">Search</button>
          </form>
        </p>
      </div>
    </div>
    <div class="row">
      <results />
      <active-image />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  //import any new components from components files
  // import HelloWorld from '@/components/HelloWorld.vue'
  import Results from "../components/Results.vue";
  import ActiveImage from "../components/ActiveImage.vue";

  export default {
    name: "home",
    data() {
      return {
        //data goes here, such as query
        query: ""
      };
    },
    methods: {
      //any methods go here, pointing to "dispatch"
      searchImages() {
        this.$store.dispatch("searchApi", this.query);
      }
    },
    components: {
      // HelloWorld
      //take out HelloWorld. replace with others such as results, active, etc.
      Results,
      ActiveImage
    }
  };
</script>

<style scoped>
  /* any global styles go here */
  .home {
    background-color: whitesmoke;
  }
</style>