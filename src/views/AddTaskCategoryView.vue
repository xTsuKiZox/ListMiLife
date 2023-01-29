<script>

import { store } from '@/stores/store.js'

import ForCreateACat from '../components/ForCreateACat.vue';

import ForCreateATask from '../components/ForCreateATask.vue';


export default {
    data() {
        return {
            store
        };
    },
    created() {
      

    },
  components: { ForCreateACat, ForCreateATask },
}
</script>



<template>
  <div class="ajoute">
    <div class="title">ADD</div>
    <hr class="ForAligne">

    <ForCreateACat></ForCreateACat>

    <ForCreateATask></ForCreateATask>
  </div>
</template>

<style>


.ForALigne {
  align-items: center;
  width: 50%;
}

@media (min-width: 1024px) {
  .ajoute {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
