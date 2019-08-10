<template>
  <div id="#app">
    <div class="container">
      <header>
        <nav class="navbar navbar-light">
          <Search class="col-sm-6" />
          <CartButton />
        </nav>
      </header>
      <Book/>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import CartButton from "../components/CartButton";
import Book from "../components/Book";

export default {
  data() {
    return {
      title: this.$route.name,
    };
  },
  components: {
    Search,
    CartButton,
    Book
  }
};
</script>


