<template>
  <div class="login">
      <h1>Login</h1>
      <div class="form-inputs">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" v-model="input.email" placeholder="exempo@exemplo.com" />
      </div>
      <div class="form-inputs">
          <label for="password">Senha</label>
          <input type="password" id="password" name="password" v-model="input.password" placeholder="Senha" />
      </div>
      <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
  export default {
      name: 'LoginView',
      data() {
          return {
              input: {
                  email: "",
                  password: ""
              }
          }
      },
      methods: {}
      }
</script>

<style>

#login .form-inputs {
  padding-bottom: 10px;
}

#login .form-inputs label {
  padding-right: 10px;
}

</style>
