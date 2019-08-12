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

export default {
  data() {
    return {
      title: this.$route.name,
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
    Alert
  }
};
</script>


