<template>
  <section>
    <div class="book-list">
      <div class="header">
        <div class="heading">{{heading}}</div>
        <div class="more">more...</div>
      </div>
      <div class="book-items">
        <div class="book" v-for="book in books"
             @click="$emit('onBookSelect', book)">
          <div class="cover">
            <img :src="book.img_url"/>
          </div>
          <div class="title">{{book.title}}</div>
          <div class="authors">{{book.authors | join}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: [
      'heading',
      'books'
    ],
    filters: {
      join (args) {
        return args.join(',')
      }
    }
  }
</script>

<style>

</style>
