<script>


import { store } from '@/stores/store.js';
import usersData from '../json/users.json';

export default {
    data() {
        return {
            username: "",
            password: "",
            image: "",
            usersData,
            store,
        };
    },

    methods: {
        login() {

            let User = this.usersData.users.find(t => t.username === this.username)

            let StoredUsername = localStorage.getItem('username');

            let StoredPassword = localStorage.getItem('password');

            if (User && User.password === this.password || StoredUsername === this.username && StoredPassword === this.password) {
                this.store.IsAuth = true;
                store.currentUser = this.username
                store.currentPhoto = User.image
                this.$router.push('/lists')
            }
        }
    }
}


</script>

<template>
    <div class="ForLogin">
        <img id="Logo" src="../../images/logo.png">
        <p class="ForTextLOG">Login !</p>
        <input type="text" v-model="username" placeholder="Your username.." id="Username">
        <input type="password" v-model="password" placeholder="Your password.." id="Password">
        <button class="ButtonLogin" @click="login">Login</button>
    </div>

    <div id="ToSignIn">
        <RouterLink to="/signin" class="ForTextSNNav">Sign In ?</RouterLink>
    </div>

</template>


<style scoped>
.ForLogin {
    height: auto;
    width: auto;
    position: relative;
}

input {
    position: relative;
    height: 25%;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

#ToSignIn {
    position: relative;
    top: 20%;
    margin-left: 77%;
    height: auto;
    margin-top: 28%;
    width: auto;
}


.ForTextSNNav {
    font-size: 2vh;
    font-family: 'TypoMinText';
}

.ForTextLOG {
    position: relative;
    font-size: 3vh;
    font-family: 'TypoMinText';
    left: 36%;
    height: auto;
    width: 25%;
    margin-top: 30%;
}

.ButtonLogin {
    background: #FFBB00;
    border: none;
    height: auto;
    width: auto;
    position: relative;
    left: 35%;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
}
</style>