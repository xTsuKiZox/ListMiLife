<style>
#ForATaskDiv {
    position: relative;
    margin-top: 15%;

}


#TitleForAddTask {

    font-size: 2vh;
    height: auto;
    width: auto;
    position: relative;
    font-family: 'TypoMinText';
    text-decoration: underline;

}



#InputATask {
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
    <div id="ForATaskDiv">
        <p id="TitleForAddTask">Add a task ?</p>
        <input id="InputATask" minlength="1" maxlength="14" v-model="TextTask" placeholder="Name of task..."
            @keyup.enter="store.AddDoTask(TextTask)">
    </div>
</template>


<script>

import { store } from '@/stores/store.js'


export default {
    data() {
        return {
            store,
            TextTask: "",
        }
    }
}



</script>