<script>

import { store } from '@/stores/store.js'

export default {
    data() {
        return {
            store,
        }
    },
    created() {
        store.NbAll = this.store.NbTask + this.store.NbCat
    },
}
</script>



<template>

    <div class="title">DASHBOARD</div>

    <hr class="ForAligne">

    <!-- <div class="ForStatsWeeks">
        <div class="ThisStatsWeeks"></div>
    </div> -->

    <div class="ForTasksStatus">
        <div class="ForTasksCompleted">
            <p id="NumbersCat">{{ store.NbCat }}</p>
            <p id="Cat">Categories</p>
        </div>

        <div class="ForTasksToDo">
            <p id="NumbersToDo">{{ store.NbTask }}</p>
            <p id="ToDo">Tasks</p>
        </div>

    </div>

    <div class="ForCircleStatus">
        <div id="CircleStatus">
            <p id="TextCircle">{{ store.NbAll }}</p>
            <p id="TextTotalCir">Totals</p>
        </div>
    </div>

</template>



<style>
.DisTitle {
    height: auto;
    width: auto;
    display: flex;
}

.ForStatsWeeks {
    width: 100%;
    height: 15%;
    display: flex;
}

.ThisStatsWeeks {
    width: 100%;
    height: 150px;
    background: #FFEEE6;
}



.ForTasksStatus {
    position: relative;
    justify-content: space-between;
    margin-top: 10%;
    width: 100%;
    height: 10%;
    display: flex;
}



.ForTasksCompleted {
    width: 45%;
    height: 150px;
    background: #D9C3AD;
    border-radius: 10%;
}

.ForTasksToDo {
    width: 45%;
    height: 150px;
    background: #FFAD29;
    border-radius: 10%;
}



#Cat {
    font-size: 2.5vh;
    font-family: 'TypoMinText';
    color: black;
    position: relative;
    left: 17%;
    top: 15%;
    height: auto;
    width: 69%;
}

#NumbersCat {
    font-size: 2.5vh;
    font-family: 'TypoMinText';
    color: black;
    position: relative;
    left: 45%;
    top: 25%;
    height: auto;
    width: 20%;
}





#ToDo {
    font-size: 2.5vh;
    font-family: 'TypoMinText';
    color: black;
    position: relative;
    left: 30%;
    top: 15%;
    height: auto;
    width: 38%;
}

#NumbersToDo {
    font-size: 2.5vh;
    font-family: 'TypoMinText';
    color: black;
    position: relative;
    left: 45%;
    top: 25%;
    height: auto;
    width: 20%;
}




.ForCircleStatus {
    position: relative;
    margin-top: 15%;
}


#CircleStatus {
    width: 225px;
    height: 225px;
    background: #FFC229;
    position: relative;
    left: 10%;
    border-radius: 188px;
    top: 6.92%;
}

#TextCircle {
    position: relative;
    height: auto;
    width: 20%;
    top: 37%;
    left: 47%;
    font-family: 'TypoMinText';
    color: black;
    font-size: 3vh;
}

#TextTotalCir {
    position: relative;
    height: auto;
    width: 30%;
    top: 29%;
    left: 38%;
    font-family: 'TypoMinText';
    color: black;
    font-size: 2.5vh;
}


@media (min-width: 1024px) {
    .DivTitle {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
