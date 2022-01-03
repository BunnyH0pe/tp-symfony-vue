<template>
  <div class="about col-6 mx-auto d-flex align-items-center justify-content-center flex-column" style="margin-top: 10vh; text-align: left; height: 90vh;">
    <div class="form w-50 mx-auto bg-light shadow p-4">
      <h1 class="text-center mb-2 fs-2">{{ message.title }}</h1>
      <div class="mb-4">
        {{ message.date }}
      </div>
      <div>
        {{ message.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowMessage',
  data () {
    return {
      message: this.$route.params.message,
    }
  }
}
</script>