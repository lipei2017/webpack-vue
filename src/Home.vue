<template>
  <div>
    <section>
      <book-list :books="latestUpdated" heading="最新更新" @onBookSelect="preview($event)"></book-list>
    </section>
    <section>
      <book-list :books="latestUpdated" heading="编辑推荐"></book-list>
    </section>
    <modal-dialog ref="dialog" @dialogClose="selected=undefined">
      <div slot="header">
        <div class="dismiss" @click.prevent="$refs.dialog.close()"></div>
      </div>
      <div><img :src="selected.img_url"></div>
      <div>{{selected.title}}</div>
    </modal-dialog>
  </div>
</template>

<script>
  import BookList from './components/BookList.vue'
  import ModalDialog from './components/dialog.vue'
  import faker from './fixtures/faker'

  const debug = process.env.NODE_ENV !== 'production'

  export default {
    data () {
      return {
        announcement: '',
        sliders: [],
        latestUpdated: [],
        recommended: []
      }
    },
    methods: {
      preview (book) {
        this.selected = book
        this.$refs.dialog.open()
      }
    },
    components: {
      BookList,
      ModalDialog
    },
    created () {
      if (debug) {
        const fakeData = faker.getHomeData()
        for (let prop in fakeData) {
          this[prop] = fakeData[prop]
        }
      } else {
        this.$http.get('/home')
          .then((res) => {
            for (let prop in res.body) {
              this[prop] = res.body[prop]
            }
          }, (error) => {
            console.log(`${error}`)
          })
      }
      this.$http.get('/home').then(res => {
        this.announcement = res.body.announcement
        this.sliders = res.body.sliders
        this.latestUpdated = res.body.latestUpdated
        this.recommended = res.body.recommended
      })
    }
  }
</script>

<style>
</style>
