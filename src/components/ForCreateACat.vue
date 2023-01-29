<style>
#TitleForAddCategory {

    font-size: 2vh;
    height: auto;
    width: auto;
    position: relative;
    font-family: 'TypoMinText';
    text-decoration: underline;

}



#ForACatDiv {
    position: relative;
    margin-top: 15%;
    font-size: 2vh;
}


#InputACat {
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
</style>




<template>
    <div id="ForACatDiv">
        <p id="TitleForAddCategory">Add a category ?</p>
        <input id="InputACat" minlength="5" maxlength="14" v-model="TextCat" placeholder="Name of category..."
            @keyup.enter="store.AddDoCategory(TextCat)">
    </div>
</template>




<script>


import { store } from '@/stores/store.js'


export default {
    data() {
        return {
            store,
            TextCat: "",
        }
    }
}


</script>