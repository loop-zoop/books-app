<template>
  <div id="app">
      <div class="row">
    <div 
        class="col-sm-4"
        v-for="(book, index) in this.$store.state.books"
        :key="index"
    >
      <div class="card mb-3" >
        <div class="card-body">
            <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="small thumbnail">
          <p class="card-text"><b>Title:</b> {{book.volumeInfo.title}}</p>
          <p class="card-text"><b>Author(s):</b> {{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'unknown'}}</p>
          <p class="card-text"><b>Published Date:</b> {{stylizeDate(book.volumeInfo.publishedDate)}}</p>
          <a href="#" class="btn btn-primary">Order</a>
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
    }
  }
};
</script>

