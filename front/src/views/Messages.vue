<template>
  <div class="about col-6 mx-auto d-flex align-items-center justify-content-center flex-column" style="margin-top: 10vh; text-align: left; height: 90vh;">
    <div class="form w-50 mx-auto bg-light shadow p-4">
      <h1 class="text-center mb-2 fs-2">Création d'un message</h1>
      <div class="mb-4">
        <label for="title" class="form-label">Titre :</label>
        <input type="text" class="form-control" name="label" v-model="title" id="title"/>
      </div>
      <div>
        <label for="message" class="form-label">Message :</label>
        <input type="text" class="form-control" name="message" v-model="message"  id="message"/>
      </div>
      <div>
        <label for="category" class="form-label">Catégorie :</label>
        <select name="category" id="category">
          <option :value="categorie.id" v-for="categorie in categories" v-bind:key="categorie.id" :v-model="categorie">
            {{ categorie.label }}
          </option>
        </select>
      </div>
      <div>
        <button class="mt-4 btn btn-success mx-auto d-block" @click="ajoutMessage">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getCategories} from "../api/category";
import {postMessage} from "../api/message";

export default {
  name: 'NewMessage',
  data () {
    return {
      title: '',
      message: '',
      category: '',
      date: new Date(),
      categories : null,
    }
  },
  async mounted() {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
  },
  methods: {
    async ajoutMessage() {
      await postMessage({
        title: this.title,
        message: this.message,
        category: '/tp-symfony-vue/back/public/index.php/api/categories/'+ this.category,
        date: this.date,
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}
</script>