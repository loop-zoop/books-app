<template>
  <div id="#app">
    <div class="container">
      <header>
        <nav class="navbar navbar-light">
          <Search class="col-sm-6" />
          <CartButton />
        </nav>
      </header>
      <hr />
      <Book v-if='this.$store.state.books.length' @open-modal="openModal" />
      <Loader v-else-if='this.$store.state.isLoading' />
      <p class='mt-5' v-else>No results</p>
      <Modal @close-modal="closeModal" v-if="showModal" />
      <Alert v-if="showAlert" />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import CartButton from "../components/CartButton";
import Book from "../components/Book";
import Modal from "../components/Modal";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    showAlert() {
      return this.$store.state.isAlertActive
    }
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
    Modal,
    Alert,
    Loader
  }
};
</script>


