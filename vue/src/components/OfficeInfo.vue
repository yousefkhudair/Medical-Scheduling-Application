<template>
  <div class="container-office-info">
      <span id="header">Office Information</span>
      <p>Address: {{office.streetAddress}}, {{office.city}}, {{office.state}} {{office.zip}}</p>
      <p>Phone: {{office.phoneNumber}} </p>
      <p>Office Hours: Monday-Friday 9am-5pm</p>
      <p class="covid">COVID-19 Testing Center</p>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js'
export default {

     data(){
        return{
            
            office: {
              officeId: '',
              doctorId: '',
              streetAddress: '',
              city: '',
              state: '',
              zip: '',
              phoneNumber: '',
              consultationFee: '',
            },
            doctor: {
              doctorId: '',
              accountId: '',
              userType: '',
              summary: '',
            }
        }
    },

    created(){

      ApiService.getDoctorPrincipal().then(response => {this.doctor = response.data})
      ApiService.getOfficeDoctorPrincipal().then(response => {this.office = response.data})
    }
        
}
</script>

<style scoped>

.container-office-info {

  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.6rem;
  width: 100%;
  height: 50%;
  padding: 0.5rem;
}

.covid{
  color: red;
}

#header {

  font-size: 0.8rem;
  font-weight: 800;
}


</style>