<template>

    <div id="register">
<form class="form-register" @submit.prevent="register">
      <span class="registerbtn">Register</span>
      <div class="alert alert-danger" role="alert" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </div>
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
      <input
        type="password"
        id="confirmPassword"
        class="form-control"
        placeholder="Confirm Password"
        v-model="user.confirmPassword"
        required
      />
      
      <div class="doctor-box"><input type="checkbox" id="doctor-box" class="form-control" v-model="user.is_doctor"> <label for="doctor-box">Are you a doctor?</label></div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Submit
      </button>

      <router-link :to="{ name: 'login' }" id="alreadyuser">I have an account</router-link>

      <!-- <router-link :to="{ name: 'login' }">Already registered?</router-link> -->
</form>
     </div>
  
</template>

<style scoped>

    .form-register {
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
  font-weight: 600;
  padding-left: 5px;
  
  }

  .registerbtn {

  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  /*text-decoration: underline;*/
  margin-bottom: 1rem;
  font-weight: 800;
  font-size: 1.5em;
  color:white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  }

  .sr-only {

    font-weight: 600;
    margin-right: 5.5rem;
    align-items: left;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .doctor-box {

    margin-right: 1rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 600;
    color: white;
    font-family: 'Open Sans', sans-serif;
  }

  #alreadyuser {

  font-size: 1em;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .alert {

      color: white;
  }
    

</style>

<script>
import authService from '../services/AuthService';

export default {
  name: "registration",
data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        is_doctor: false,
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
    };
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } 
      
      else {
                   console.log(this.user)
        authService
          .register(this.user)
          .then((response) => {
 
            if (response.status == 201) {
              this.$router.push({
                path: '/login',
                query: { registration: 'success' },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = 'Bad Request: Validation Errors';
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = 'There were problems registering this user.';
    },
  },
};
</script>