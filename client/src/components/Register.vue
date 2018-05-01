<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/>
    <br>
    <input type="password" name="password" placeholder="" v-model="password" />
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      const res = await AuthentificationService.register({
        email: this.email,
        password: this.password
      })
      console.log(res.data)
    }
  }
}
</script>

<style scoped>
</style>
