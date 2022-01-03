<template>
  <div class="about col-6 mx-auto d-flex align-items-center justify-content-center flex-column" style="margin-top: 10vh; text-align: left; height: 90vh;">
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
    <div class="form w-50 mx-auto bg-light shadow p-4">
      <h1 class="text-center mb-2 fs-2">Édition d'un message</h1>
      <div class="mb-4">
        <label for="title" class="form-label">Titre :</label>
        <input type="text" class="form-control"  name="title" v-model="title" id="title"/>
      </div>
      <div class="mb-4">
        <label for="message" class="form-label">Message :</label>
        <textarea type="text" class="form-control"  name="message" v-model="message" id="message"></textarea>
      </div>
      <div>
        <button class="mt-4 btn btn-success mx-auto d-block" @click="editMessage">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script>
import {putMessage} from '../api/message'

export default {
  name: 'EditMessage',
  data () {
    return {
      title: this.$route.params.message.title,
      message: this.$route.params.message.message,
      date: this.$route.params.message.date,
      category: this.$route.params.message.category,
      confirm : false,
    }
  },
  methods: {
    async editMessage() {
      await putMessage({
        title: this.title,
        message: this.message,
        date: new Date(),
        category: this.category,
      }, this.$route.params.message.id).then(() => {
        this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}
</script>