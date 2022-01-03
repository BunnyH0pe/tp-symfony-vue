<template>
  <div class="about col-6 mx-auto d-flex align-items-center justify-content-center flex-column" style="margin-top: 10vh; text-align: left; height: 90vh;">
    <div class="form w-50 mx-auto bg-light shadow p-4">
      <h1 class="text-center mb-2 fs-2">Connexion</h1>
      <div class="mb-4">
        <label for="username" class="form-label">Username :</label>
        <input type="text" class="form-control" name="username" v-model="username" id="username"/>
      </div>
      <div>
        <label for="password" class="form-label">Password :</label>
        <input type="password" class="form-control"  name="password" v-model="password" id="password"/>
      </div>
      <div>
        <button class="mt-4 btn btn-success mx-auto d-block" @click="connexionUser">Connexion</button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import router from "../router";

export default {
  name: 'LoginUser',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    async connexionUser() {
      axios({url: 'http://localhost/tp-symfony-vue/back/public/index.php/login_check', data: {username: this.username, password: this.password}, method: 'POST' }) //username et password proviennent du formulaire
          .then(resp => {
            const token = resp.data.token
            const userData = atob(resp.data.token.split('.')[1]) //on récupère les données de l'utilisateur, par défaut, login, rôles
            localStorage.setItem('user', userData) // store the user in localstorage
            localStorage.setItem('usertoken', token) // store the token in localstorage
            router.push('/')
          })
          .catch(err => {
            localStorage.removeItem('usertoken') // if the request fails, remove any possible user token if possible
            console.log(err)
          })
    }
  }
}
</script>