<template>
  <div class="p-3 col-12 row justify-content-end" style="margin-top: 10vh;">
    <div class="col-9">
      <h1>Liste des messages de la catégorie : {{ categorie.label }}</h1>
      <h2>Les messages</h2>
      <router-link class="btn btn-success" :to="{name:'categorie_edit', params: {categorie: categorie}}" style="margin-right: 10px">
        Éditer la catégorie
      </router-link>
      <button v-on:click="deleteCategoryOnClick" class="btn btn-danger delete">
        Supprimer la catégorie
      </button>
      <div class="d-flex flex-row flex-wrap justify-content-around mt-4">
        <div class="card shadow bg-light" style="width: 400px;" :style="'border: 2px solid '+ categorie.color" v-for="message in categorie.messages" :key="message.id">
          <div class="card-body">
            <h5 class="card-title">{{ message.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ message.date }}</h6>
            <p class="card-text" style="max-height: 150px; overflow-y: scroll">{{ message.message }}</p>
            <router-link class="btn btn-success m-2" :to="{name:'message_show', params: {message: message}}">
              Voir le message
            </router-link>
            <router-link class="btn btn-success m-2" :to="{name:'message_edit', params: {message: message}}">
              Editer
            </router-link>
            <button v-on:click="deleteMessageOnClick(message.id)" class="btn btn-danger delete m-2">
              Supprimer le message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCategory} from '../api/category'
import {deleteCategory} from '../api/category'
import {deleteMessage} from "../api/message";

export default {
  name: 'CategoriesMessages',
  data() {
    return {
      categorie: {}
    }
  },
  watch: {
    $route() {
      this.actualiseCategory()
    }
  },
  async mounted() {
    await this.actualiseCategory()
  },
  methods: {
    async actualiseCategory() {
      console.log(this.$route.params.id)
      this.categorie = await getCategory(this.$route.params.id).then((response) => {
        return response.data
      })
    },
    async deleteCategoryOnClick(){
      await deleteCategory(this.$route.params.id).then((response) => {
        console.log(response)
        this.$router.push('/categories')
        this.actualiseCategory()
      })
    },
    async deleteMessageOnClick(id){
      await deleteMessage(id).then((response) => {
        console.log(response)
        this.$router.push('/categories')
        this.actualiseCategory()
      })
    }
  }
}
</script>