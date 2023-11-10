<script>
import axios from "axios";

export default {
  // components: {},

  data() {
    return {
      books: [],
    };
  },

  created() {
    axios.get("http://127.0.0.1:8000/api/books").then((response) => {
      this.books = response.data.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">lista di libri</h1>
    <h4>facciamo solo il titolo</h4>
    <div class="row row-cols-3">
      <div class="col" v-for="book in books">
        <div class="card">
          <router-link
            class="btn btn-primary"
            :to="{ name: 'detail', params: { id: book.id } }"
          >
            {{ book.title }}
          </router-link>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
