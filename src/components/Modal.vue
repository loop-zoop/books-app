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
            <input type="text" class="form-control" placeholder="Enter name">
            <small class="form-text text-muted">...</small>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Enter email">
            <small class="form-text text-muted">...</small>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="text" class="form-control" placeholder="+380...">
            <small class="form-text text-muted">...</small>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        <button type="button" class="btn btn-primary">Order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
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
    margin: 15% auto;
    form {
        text-align: left;
    }
  }
}
</style>
