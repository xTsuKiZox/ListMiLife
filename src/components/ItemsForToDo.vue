<template>
    <div class="ForTask">
        <div class="LigneForTask">
            <p id="ForTaskText">{{ ToDo.TextTask }}</p>
            <img src="../../images/edit.png" id="ForEdit" @click="$emit('eventEdit')">
            <img id="ForDelete" src="../../images/delete.png" @click="$emit('eventAdded')">
        </div>
    </div>
</template>

<script>
export default {
    props: ['ToDo'],
}
</script>


<style>
.LigneForTask {
    width: 290px;
    height: 50px;
    position: relative;
    background-color: white;
    border-radius: 5px;
}


#ForTaskText {
    flex-direction: row;
    font-family: 'TypoMinText';
    display: flex;
    position: relative;
    left: 5%;
}


.ForTask {
    display: flex;
    margin-left: 5%;
    margin-top: 5%;
}


#ForDelete {
    position: relative;
    width: auto;
    height: auto;
    left: 82%;
    bottom: 85%;
}


#ForEdit {
    position: relative;
    width: 3vh;
    height: 3vh;
    left: 77%;
    bottom: 94%;
}
</style>