<script>

import { store } from '@/stores/store.js'


export default {
    data() {
        return {
            store,
        };
    },
    created() {
        this.currentUserImage = store.currentPhoto
    },
    methods: {
        deco() {
            this.store.IsAuth = false;
            this.$router.push('/');
        }
    },
}

</script>


<template>

    <div class="Account">
        <div class="ForUser">
            <img class="Profile" v-bind:src="currentUserImage">
            <p id="NameUser">{{ store.currentUser }}</p>
        </div>
    </div>

    <div class="Parameters">
        <p id="TitleAccount">Account</p>
        <div id="ForDisconnect">
            <img id="ImgPadlock" src="../../images/padlock.png">
            <p id="TextDisco">Disconnect</p>
            <img id="ImgArrowLeft" @click="deco" src="../../images/arrowpadlock.png">
        </div>
        <img src="../../images/logo.png" id="CreditLogo">
    </div>
</template>

<style>
.Account {

    position: relative;
    right: 5%;
    display: flex;
    height: 85vw;
    width: 89vw;
    border-radius: 11%;
    background: white;
}


.ForUser {
    position: relative;
    top: 10.8%;
    left: 30%;
    height: auto;
    width: auto;
    display: flex;
}



.Profile {
    position: relative;
    display: flex;
    height: 135px;
    width: 135px;
    left: 5%;
    border-radius: 50%;
}


#NameUser {
    width: auto;
    height: 10%;
    position: relative;
    top: 45%;
    right: 50%;
    font-family: 'TypoMinText';
    font-size: 3vh;
}


.Parameters {
    margin-top: 5%;
    position: relative;
    right: 5%;
    display: flex;
    height: 90vw;
    width: 89vw;
    border-radius: 11%;
    background: white;
}


#TitleAccount {
    height: 10%;
    width: auto;
    font-family: 'TypoMinText';
    font-size: 3vh;
    position: relative;
    left: 10%;

}

#ForDisconnect {
    display: flex;
    position: relative;
    width: 100%;
    top: 19%;
    height: 9%;
    justify-content: flex-start;
    font-family: 'TypoMinText';
    font-size: 2.5vh;
}

#ImgPadlock {
    position: relative;
    width: 6vw;
    height: 6vw;
    right: 41%;
}


#TextDisco {
    position: relative;
    width: 40%;
    height: 66%;
    top: -59.1%;
    right: 16%;
}


#ImgArrowLeft {
    position: relative;
    width: 4vw;
    height: 4vw;
    top: 30%;
    left: 99%;
}


#CreditLogo {
    background-color: #D9D9D9;
    position: relative;
    height: 7vh;
    width: 28vh;
    top: 75%;
    right: 50%;
    border-radius: 5%;
}

@media (min-width: 1024px) {
    .account {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
