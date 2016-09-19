<style lang="scss">
.users{
  padding: 24px;
  max-width: 420px;
  .header{
    margin: -24px;
    padding: 24px;
    color: white;
  }
  ul.collection{
    max-height: 500px;
    overflow-y: auto;
  }
}
</style>
<template>
	<div class="users z-depth-1">
    <div class="header blue-grey"><h4>Users</h4></div>
    <ul class="collection">
      <li class="collection-item avatar" v-for="user in state.users">
        <img :src="user.avatar" :alt="user.fullname" class="circle">
        <span class="title">{{user.fullname}}</span>
        <p>{{user.email}}<br>
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
      </li>
    </ul>
    <button class="btn indigo darken-1" @click="newUser">Create new</button>
	</div>
  <div class="white md-padding">
    <input type="text" placeholder="First name" v-model="user.first_name">
    <small class="red-text" v-if="user.errors.first_name" v-for="error in user.errors.first_name">
      - {{error}} <br>
    </small>
    <br>
    <input type="text" v-model="user.last_name" placeholder="last name">
    <small class="red-text" v-if="user.errors.last_name" v-for="error in user.errors.last_name">
      - {{error}} <br>
    </small>
    <br>
    <input type="email" v-model="user.email" placeholder="email">
    <small class="red-text" v-if="user.errors.email" v-for="error in user.errors.email">
      - {{error}} <br>
    </small>


    <button @click="user.validForCreation()" class="btn green">Validar</button>
  </div>
</template>
<script>
  import state from 'src/stores';
  import UserModel from 'models/User.model';

  export default {
  	props : {},
    data() {
      return{
        now : new Date(),
        state,
        user : new UserModel()
      }
    },
    ready(){

      var user = new UserModel({
        first_name : 'Cesar A',
        last_name : 'Santana',
        email : 'casc.santana@gmail.com',
        avatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/csantana22/128.jpg'
      });

      this.state.users.push(user);
    },
    filters : {

    },
    methods :{
      newUser(){
        var random_users = [
          {
            first_name : 'Cesar',
            last_name : 'Santana',
            email : 'casc.santana@gmail.com',
            avatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/csantana22/128.jpg'
          },
          {
            first_name : 'Pilar ',
            last_name : 'Matos',
            email : 'pilar.matos@gmail.com',
            avatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          },
          {
            first_name : 'Pedro',
            last_name : 'José',
            email : 'pedro.jose@hotmail.com',
            avatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg'
          },
        ]

        var index = Math.floor(Math.random() * 3) + 0;
        var random_user = random_users[index];
        var new_user = new UserModel(random_user);
        this.state.users.push(new_user);
      }
    },
    watch: {
      
    }
  }
</script>