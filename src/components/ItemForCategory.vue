<script>
export default {
    props: ['CategoryToDo'],
}
</script>



<template>
    <div class="ForCategory">
        <div class="RectForCategory" >
            <p id="ForCategoryText" @click="$emit('UpdCat')">{{ CategoryToDo.TextCat}} </p>
            <img id="ForDeleteCat" src="../../images/delete.png" @click="$emit('eventCat')">
        </div>
    </div>
</template>



<style>
.RectForCategory {
    width: 110px;
    height: 115px;
    position: relative;
    background-color: #FFBB00;
}


#ForCategoryText {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'TypoMinText';
}


.ForCategory {
    display: flex;
    margin-left: 5%;
    margin-top: 5%;
}


#ForDeleteCat {
    position: relative;
    left: 41%;
    top: 30%;
    width: 5vw;
    height: 6vw;
}
</style>
