<template>
  <div id="login" class="loginview">
    
    <form class="form-signin" @submit.prevent="login">
      <span id="registerbtn">Login</span>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="invalidCredentials"
      >Invalid username and password!</div>
      <div
        class="alert alert-success"
        role="alert"
        v-if="this.$route.query.registration"
      >Thank you for registering, please sign in.</div>
      <label for="username" class="sr-only">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        required
        autofocus
      />
      <label for="password" class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <router-link :to="{ name: 'splash' }" id="needaccount">Need an account?</router-link>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then(response => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/profile");
          }
        })
        .catch(error => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    }
  }
};
</script>
<style scoped>

.form-signin {

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background: #009cdd;
    border-radius: 1rem;
    padding: 2rem;
        
    }

    .btn {
  margin: 3px;
  background: black;
	border-radius: 1rem;
  border-width: thin;
	font-family: 'Open Sans', sans-serif;
	cursor: pointer;
  font-size: 1.25em;
  color: white;
  width: 140px;
  height: 35px;
  font-weight: 800;
  padding-left: 5px;
  }

  .sr-only {

    font-weight: 600;
    margin-right: 5.5rem;
    align-items: left;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  #registerbtn {

  font-size: 1.5em;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .alert {

      color: white;
  }

  #needaccount {

  font-size: 1em;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  }

</style>