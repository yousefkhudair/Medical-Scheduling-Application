<template>
    <div id="agendabuttons">

    <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="goAgenda">Book Appointment</button>

    </div>
</template>
<style scoped>

#agendabuttons {

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #F5F1F1;
border-radius: 15px;
border-width: thin;
font-family: 'Open Sans', sans-serif;
font-weight: 600;
width: 100%;
height: 100%;
padding: 0.5rem;
gap: 0.5rem;

}

.btn {

margin: 0.1rem;
background: #6b89c6;
border-radius: 1rem;
border-width: thin;
font-family: 'Open Sans', sans-serif;
cursor: pointer;
font-size: 1em;
padding: 1rem;
color: white;
font-weight: 600;
  
  }

</style>
<script>

export default {

  methods: {

  goAgenda(){this.$router.push("/agenda");}
},

}
</script>