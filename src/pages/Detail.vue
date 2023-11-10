<script>
import axios from "axios";

export default {
  // components: {},

  data() {
    return {
      book: [],
    };
  },

  created() {
    console.log(this.$route.params.id);
    axios
      .get("http://127.0.0.1:8000/api/books/" + this.$route.params.id)
      .then((response) => {
        this.book = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <h1 class="container my-5">
      BECCATI STO TRAPEZIO PER PIACEREEEEEEEEEEEEEEEEE
    </h1>

    <div class="row row-cols-3">
      {{ book.title }}
      <br />
      {{ book.id }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
