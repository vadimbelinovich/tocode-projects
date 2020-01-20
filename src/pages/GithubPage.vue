<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- erorrs -->
        <div class="error" v-if="error" style="margin-bottom: 20px;">
          <p> {{ error }} </p>
        </div>

        <!-- search -->
        <search
          :value="search"
          placeholder="Type username..."
          @search="search = $event"/>

        <!-- buttons -->
        <button v-if="!repos" class="btn btnPrimary" @click="getData">Search!</button>
        <button v-else class="btn btnPrimary" @click="getData">Search Again!</button>

        <!-- wrapper -->
        <div class="repos__wrapper" v-if="user">
          <!-- item -->
          <div class="user">
            <div class="pic">
              <img :src="user.avatar_url" :alt="user.name">
            </div>
            <p class="name">user: <b>{{ user.name }}</b> </p>
            <span class="repos__count">repos: <b>{{ user.public_repos }}</b> </span>
          </div>

          <table>
            <!-- head -->
            <thead>
              <tr>
                <th @click="sort('name')">repo &#8595;</th>
                <th @click="sort('stargazers_count')">Stars &#8595;</th>
              </tr>
            </thead>

            <!-- body -->
            <tbody>
              <tr class="repos-item" v-for="repo in repoSort" :key="repo.id">
                <td>
                  <a class="link" target="_blank" :href="repo.html_url">{{ repo.name }}</a>
                </td>
                <td> {{ repo.stargazers_count }} ⭐</td>
              </tr>
            </tbody>
          </table>

          <!-- buttons -->
          <section>
            <div class="container">
              <div class="button-list">
                <div class="btn btnPrimary" @click="prevPage">&#8592;</div>
                <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import search from '@/components/Search.vue'
import axios from 'axios'
export default {
  components: { search },
  data () {
    return {
      search: '',
      error: null,
      repos: [],
      user: null,
      currentSort: 'name',
      currentSortDir: "asc",
      link: 'https://api.github.com/users',
      page: {
        current: 1,
        length: 4
      }
    }
  },
  computed: {
    repoSort() {
      return this.repos
        .sort((a, b) => {
          let mod = 1;
          if (this.currentSortDir === "desc") mod = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * mod;
          return 0;
        })
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length;
          let end = this.page.current * this.page.length;
          if (index >= start && index < end) return true;
        });
    }
  },
  methods: {
    async getData () {
      try{
        await Promise.all([this.getUser(), this.getRepo()])
      } catch(err) {
        console.log(err)
        this.user = null
        this.error = 'Can`t find this user'
      }
    },
    getUser() {
      axios
        .get(`${this.link}/${this.search}`)
        .then(res => {
          this.error = null
          this.user = res.data
          console.log(this.user);
        })
    },
    getRepo() {
      axios
        .get(`${this.link}/${this.search}/repos`)
        .then(res => {
          this.error = null
          this.repos = res.data
          console.log(this.repos);
        })
    },
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      } else this.currentSort = e;
      this.page.current = 1
    },
    // Pagination
    prevPage() {
      if (this.page.current > 1) this.page.current -= 1;
    },
    nextPage() {
      if (this.page.current * this.page.length < this.repos.length)
        this.page.current += 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 40px;
}
.repos__wrapper {
  width: 400px;
  margin: 30px 0;
  & .user{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    & .pic{
      max-width: 50px;
      & img{
        max-width: 100%;
      }
    }
  }
}
.repos-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}

table {
  & thead{
    & tr{
      & th{
        padding: 0;
        &:last-child{
          text-align: center;
        }
      }
    }
  }
  & tbody{
    & tr {
      box-shadow: none;
      background-color: transparent;
      & td{
        padding: 0;
        &:last-child{
          text-align: center;
        }
      }
      &:hover{
        box-shadow: none;
        transform: none;
      }
    }
  }
} 
.button-list {
  width: 100%;
  text-align: center;

  .btn {
    border-radius: 60px;
    margin: 0 20px;
  }
}
</style>
