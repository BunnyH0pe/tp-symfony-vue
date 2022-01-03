<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed fixed-top" style="height: 10vh; z-index: 1050; width: 100vw">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Site</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/categories">Catégories</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/messages">Messages</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recherche">Recherche</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/a-propos">About</router-link>
            </li>
            <li class="nav-item" v-if="localStorage.getItem('usertoken')">
              <button class="btn btn-danger" v-on:click="logout">
                Déconnexion
              </button>
            </li>
            <li v-else>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import router from "./router";

export default {
  name: 'App',
  data: () => {
    return {
      localStorage : localStorage
    }
  },
  computed: {

  },
  methods :{
    logout : async function () {
      localStorage.removeItem('usertoken') // if the request fails, remove any possible user token if possible
      await router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
