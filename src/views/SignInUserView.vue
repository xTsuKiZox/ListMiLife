<script>


export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        saveToLocalStorage() {
            localStorage.setItem('username', this.username);
            localStorage.setItem('password', this.password);
        },
       
    }
}

import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="ForSignIn">
        <img id="Logo" src="../../images/logo.png">
        <p class="ForTextSN">Sign In !</p>
        <input v-model="username" required type="text" ref="usernameInput" placeholder="Your username.."
            id="Username">
        <input v-model="password" required type="password" ref="passwordInput" placeholder="Your password.."
            id="Password">
        <button class="ButtonSubmit" @click="saveToLocalStorage">Submit</button>
    </div>
    <div id="ToLogin">
        <RouterLink to="/" class="ForTextLOGNav">Login ?</RouterLink>
    </div>
    <RouterView />
</template>


<style>
.ForSignIn {
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

#ToLogin {
    position: relative;
    top: 20%;
    font-family: "";
    margin-left: 77%;
    height: auto;
    margin-top: 28%;
    width: auto;
}


.ForTextLOGNav {
    font-size: 2vh;
    font-family: 'TypoMinText';
}

.ForTextSN {
    position: relative;
    font-size: 3vh;
    font-family: 'TypoMinText';
    left: 36%;
    height: auto;
    width: 30%;
    margin-top: 30%;
}

.ButtonSubmit {
    background: white;
    border: none;
    height: auto;
    width: auto;
    position: relative;
    left: 35%;
    color: #FFBB00;
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