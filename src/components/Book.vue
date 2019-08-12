<template>
  <div id="app">
      <div class="row">
    <div 
        class="col-md-4 col-sm-6"
        v-for="(book, index) in this.$store.state.books"
        :key="index"
    >
      <div class="card mb-3" >
        <div class="card-body">
            <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="small thumbnail">
          <p class="card-text"><b>Title:</b> {{book.volumeInfo.title}}</p>
          <p class="card-text"><b>Author(s):</b> {{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'unknown'}}</p>
          <p class="card-text"><b>Published Date:</b> {{stylizeDate(book.volumeInfo.publishedDate)}}</p>
          <button 
            type="button" 
            class="btn btn-primary"
            @click="setCurrentOrderIndex(index)"
          >Order</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Book"
    };
  },
  methods: {
    stylizeDate(date) {
      if(!date) {
        return 'unknown'
      } else {
        if(date.length > 4) {
          return date.split('-').reverse().join('.')
        }
        else {
          return date;
        }
      }
    },
    setCurrentOrderIndex(index) {
      this.$store.state.orderIndex = index
      this.$emit('open-modal')
    }
  }
};
</script>

