Vue.component('img-grid', {
  props: ['data'],
  template: `
    <div class="col-sm-1 col-md-4">
      <a v-bind:href="data.images.original.url">
        <img class="img-box" v-bind:src="data.images.original.url">
      </a>
    </div>
  `
})

const app = new Vue({
  el: "#gallery",
  data: {
    query: null,
    apiKey: 'api_key=yBfxtFwv4HNFs3f3kEo5RQ1vjTDsE4y8',
    endpoints: {
      trending: `https://api.giphy.com/v1/gifs/trending`,
      translate: `https://api.giphy.com/v1/gifs/translate`,
      random: `https://api.giphy.com/v1/gifs/random`,
      search: `https://api.giphy.com/v1/gifs/search`,
    },
    random: null,
    search: null,
    trendes: null,
    translates: null,
  },
  methods: {
    getTrending() {
      fetch(`${this.endpoints.trending}?${this.apiKey}`)
        .then(resp => resp.json())
        .then(data => this.trendes = data.data)
    },
    getSearch() {
      fetch(`${this.endpoints.search}?${this.apiKey}&q=${this.query}`)
        .then(resp => resp.json())
        .then(data => this.search = data.data)
    },
  },
  created: function() {
    this.getTrending()
  }
})