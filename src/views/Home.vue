<template>
  <div id="#app">
    <div class="container">
      <header>
        <nav class="navbar navbar-light">
          <Search class="col-sm-6" />
          <CartButton />
        </nav>
      </header>
      <Book @open-modal="openModal" />
      <Modal @close-modal="closeModal" v-if="showModal" />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import CartButton from "../components/CartButton";
import Book from "../components/Book";
import Modal from "../components/Modal";

export default {
  data() {
    return {
      title: this.$route.name,
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  },
  components: {
    Search,
    CartButton,
    Book,
    Modal
  }
};
</script>


