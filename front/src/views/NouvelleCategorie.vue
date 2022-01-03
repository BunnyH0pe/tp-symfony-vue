<template>
  <div class="about col-6 mx-auto d-flex align-items-center justify-content-center flex-column" style="margin-top: 10vh; text-align: left; height: 90vh;">
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
    <div class="form w-50 mx-auto bg-light shadow p-4">
      <h1 class="text-center mb-2 fs-2">Création d'une catégorie</h1>
      <div class="mb-4">
        <label for="label" class="form-label">Label :</label>
        <input type="text" class="form-control"  name="label" v-model="label"  id="label"/>
      </div>
      <div>
        <label for="color" class="form-label">Couleur :</label>
        <input type="text" class="form-control"  name="color" v-model="color"  id="color"/>
      </div>
      <div>
        <button class="mt-4 btn btn-success mx-auto d-block" @click="ajoutCategorie">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script>
import {postCategory} from '../api/category'
export default {
  name: 'NouvelleCategorie',
  data () {
    return {
      color: '',
      label: '',
      confirm: false
    }
  },
  methods: {
    async ajoutCategorie() {
      await postCategory({
        color: this.color,
        label: this.label
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}
</script>