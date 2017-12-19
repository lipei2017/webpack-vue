<template>
  <div>
    <div class="section">
    <slider :slides="top"></slider>
      <div class="announcement">
        <label>快讯</label>
        <span>{{announcement.text}}</span>
      </div>
    </div>
    <div class="section">
      <book-list :books="promotions" heading="最新更新" @onBookSelect="preview($event)"></book-list>
    </div>
    <div class="section">
      <book-list :books="recommended" heading="编辑推荐"></book-list>
    </div>

  </div>

</template>

<script>
  import BookList from './components/BookList.vue'
  import Slider from './components/Slider.vue'
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
      Slider,
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
    }
  }
</script>

<style>
  .announcement {
    font-size: 12px;
    padding:5px;
    background:#fff;
  }
  .announcement > label {
    padding: 3px 10px;
    margin: 3px 10px;
    background: #FACCB7;
    border-radius: 3px;
    color: #FF5102;
  }
  .announcement > span {
    padding: 3px 10px;
    color: #333;
    display:inline-block;
  }
</style>
