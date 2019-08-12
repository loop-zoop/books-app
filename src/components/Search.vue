<template>
  <form class="form-inline">
    <input
      class="form-control mr-sm-2 col-sm-10"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="keyWord"
    >
    <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click='fetchBooks(keyWord)'>Send</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      keyWord: ""
    };
  },
  methods: {
    ...mapMutations(['fetchBooks'])
  }
};
</script>

