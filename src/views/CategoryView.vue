<script>

import { store } from '../stores/store.js';

import ForCreateATask from '../components/ForCreateATask.vue';


export default {
    data() {
        return {
            store,
            TextCat: " ",
            isEditing: false,
            itemToEdit: {},
            TextTask: " ",
        }

    },
    props: ['ForTaskOnCat'],
    components: { ForCreateATask },
    methods: {
        editCat(item) {
            this.isEditing = true
            this.itemToEdit = item
            console.log(this.itemToEdit)
        },
        saveEdit() {
            this.itemToEdit = this.TextCat
            console.log(this.TextCat)
            console.log(this.itemToEdit)
            this.isEditing = false
        },
    }
}


</script>



<template>


    <div id="DivTitle">
        <div id="title">{{ store.ForTitleCat(this.$route.params.id)["TextCat"] }}</div>
        <template v-if="isEditing">
            <div class="edit-form">
                <input type="text" v-model="TextCat" placeholder="Edit this category..." />
                <button id="ButSave" @click="saveEdit(itemToEdit)">Save</button>
            </div>
        </template>
    </div>

    <hr class="ForAligne">

    <div id="ForATaskDiv">
        <p id="TitleForAddTask">Add a task ?</p>
        <input id="InputATask" minlength="1" maxlength="14" v-model="TextTask" :key="ForTaskOnCat"
            placeholder="Name of task..." @keyup.enter="store.AddDoTask(TextTask, ForTaskOnCat)">
    </div>


    <div id="ForTask">

        <li v-for="task in store.ToDoForCategory(this.$route.params.id)" :key="task.TextTask" v-if="TextCat.categoryid === ForTaskOnCat"> {{ task.TextTask }}
        </li>

        <p v-if="!store.ToDoForCategory(this.$route.params.id).length">Aucune tâche disponible.</p>
    </div>
</template>



<style>
#ForATaskDiv {
    position: relative;
    margin-top: 15%;

}


#ForDeleteCat {
    position: relative;
    left: 41%;
    top: 30%;
    width: 5vw;
    height: 6vw;
}

#TitleForAddTask {

    font-size: 2vh;
    height: auto;
    width: auto;
    position: relative;
    font-family: 'TypoMinText';
    text-decoration: underline;

}


#DivTitle {
    display: flex;
    width: 100%;
    height: 153px;
    background-color: #FFBB00;
    border-radius: 10%;
}


#ForTask {
    position: relative;
    margin-top: 15%;
    font-family: 'TypoMinText';
    font-size: 2vh;

}

#title {
    font-size: 3vh;
    font-family: "TypoBigText";
    color: black;
    height: 25%;
    width: auto;
    position: relative;
    left: 20%;
    top: 39%;
}

#ForEditCat {
    position: absolute;
    width: 3vh;
    height: 3vh;
    left: 79%;
    top: 18%;
    /* <img id="ForEditCat" src="../../images/edit.png" @click="editCat(store.ForTitleCat(this.$route.params.id)['TextCat'])"> */
}

#ForALigne {
    position: relative;
    align-items: center;
    width: 50%;
}
</style>