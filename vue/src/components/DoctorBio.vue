<template>
  <div class="container-doctor-bio">
      <span id="doctorbio">Biography <br> <br>{{doctor.summary}}</span>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js'
import apiservice from '../services/ApiService.js'

export default {
  name: 'doctorbio',
  

  
  created(){
    ApiService.getDoctorPrincipal().then(response => {this.doctor = response.data})
    // ApiService.getAccountPrincipal().then(response => {this.account = response.data})
    apiservice.getDoctorByID(this.doctor.doctorId).then((response) => {this.doctor = response.data})
  },

  data(){
        return{
            doctor:{
              doctorId: '',
              accountId: '',
              userType: '',
              summary: '',
            },

        }
    },


}
</script>

<style>

.container-doctor-bio {

  background-color: #F5F1F1;
  border-radius: 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
}

</style>