<template>
  <div class="modal-bg">
    <div class="modal-window">
      <div class="modal-header">
        <h5 class="modal-title">Fill in your information</h5>
        <button type="button" class="close" aria-label="Close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body row">
        <div class="col-sm-5 book-info">
          <img
            :src="this.$store.state.books[this.$store.state.orderIndex].volumeInfo.imageLinks.smallThumbnail"
            alt="small thumbnail"
          >
          <h5>Description:</h5>
          <p>
            {{this.$store.state.books[this.$store.state.orderIndex].volumeInfo.description
            || 'none' }}
          </p>
        </div>
        <form class="col-sm-7">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              :class="['form-control', { 'is-valid': isNameValid }]"
              placeholder="Enter name"
              v-model="form.name"
            >
            <small
              class="form-text text-muted"
              v-show="!nameValidationStatus"
            >Name should be at least 2 letters long</small>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              :class="['form-control', { 'is-valid': isEmailValid }]"
              placeholder="Enter email"
              v-model="form.email"
            >
            <small class="form-text text-muted" v-show="!emailValidationStatus">Your email is invalid</small>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              type="text"
              :class="['form-control', { 'is-valid': isPhoneValid }]"
              placeholder="+380..."
              v-model="form.phone"
            >
            <small class="form-text text-muted" v-show="!phoneValidationStatus">Your phone is invalid</small>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        <button type="button" class="btn btn-primary" @click="validateData">Order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: ""
      },
      nameValidationStatus: false,
      emailValidationStatus: false,
      phoneValidationStatus: false
    };
  },
  computed: {
    isNameValid() {
      if (this.form.name !== "" && this.form.name.length >= 2) {
        return true;
      } else {
        return false;
      }
    },
    isEmailValid() {
      if (
        /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(
          this.form.email
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    isPhoneValid() {
      if (/^\+380\d{9}$/.test(this.form.phone)) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    validateData() {
      if (this.isNameValid) {
        this.nameValidationStatus = true;
      } else {
        this.nameValidationStatus = false;
      }

      if (this.isEmailValid) {
        this.emailValidationStatus = true;
      } else {
        this.emailValidationStatus = false;
      }

      if (this.isPhoneValid) {
        this.phoneValidationStatus = true;
      } else {
        this.phoneValidationStatus = false;
      }

        if (this.nameValidationStatus &&
            this.emailValidationStatus &&
            this.phoneValidationStatus) {
        this.sendOrder()
        this.$emit("close-modal");
      }
    },
    sendOrder() {
      console.log('sent!')
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  .modal-window {
    background: #fff;
    width: 70%;
    margin: 5% auto;
    form {
      text-align: left;
      small {
        color: red;
      }
    }
  }
}
</style>
