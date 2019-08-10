<template>
  <div id="#app">
    <div class="container">
      <header>
        <nav class="navbar navbar-light">
          <form class="form-inline col-sm-6">
            <input
              class="form-control mr-sm-2 col-sm-10"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="keyWord"
            >
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="button"
              @click="fetchBooks(keyWord)"
            >Send</button>
          </form>
          <a class="btn btn-success" id="cart-button">
            <svg
              id="i-cart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="1.7em"
              height="1.7em"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2"></path>
              <circle cx="25" cy="27" r="2"></circle>
              <circle cx="12" cy="27" r="2"></circle>
            </svg>
          </a>
        </nav>
      </header>
      <Book/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Book from "../components/Book";

export default {
  data() {
    return {
      title: this.$route.name,
      keyWord: ""
    };
  },
  components: {
    Book
  },
  methods: {
    ...mapMutations(["fetchBooks"])
  }
};
</script>

<style lang="scss" scoped>
#i-cart {
  vertical-align: middle;
  color: #fff;
}
</style>


