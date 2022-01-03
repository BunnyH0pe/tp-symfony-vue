<template>
  <div class="container-fluid d-flex flex-row p-0" style="height: 90vh;">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100 col-3 position-fixed">
      <ul class="nav nav-pills flex-column mb-auto" style="margin-top: 10vh">
        <li class="nav-item" v-for="categorie in categories" :key="categorie.id">
          <router-link class="nav-link text-white fs-5" :to="{name:'categorie_messages', params: {id: categorie.id}}">
            {{categorie.label}}
          </router-link>
        </li>
      </ul>
      <div class="dropdown">
        <router-link class="text-decoration-none p-2 bg-success rounded text-black-50" to="/nouvelle-categorie">Nouvelle catégorie</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {getCategories} from '../api/category'

export default {
  name: 'Category',
  data () {
    return{
      categories: null
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
  }
}
</script>
