<script>

import ItemsForToDo from '../components/ItemsForToDo.vue';
import CategoryToDo from '../components/ItemForCategory.vue';

import { store } from '@/stores/store.js';

export default {
  data() {
    return {
      store,
      TextTask: "",
      TextCat: "",
      isEditing: false,
      itemToEdit: {},
    }
  },
  components: {
    ItemsForToDo,
    CategoryToDo,
  },
  methods: {
    GoToCat(category) {
      this.$router.push(`/category/${category.categoryid}`)
      return
    },
    deleteTask() {
      this.store.NbTask--
    },
    deleteCat() {
      this.store.NbCat--
    },
    editTask(item) {
      this.isEditing = true
      this.itemToEdit = item
    },
    saveEdit() {
      this.itemToEdit.TextTask = this.TextTask
      this.isEditing = false
    }
  }
}
</script>


<template>
  <div class="title">LISTS</div>
  <hr class="ForAligne">
  <div class="TitleCate">
    <p>Categories</p>
  </div>
  <div class="LotCategorie">
    <CategoryToDo v-for="item in store.toBeCompleteCat" :CategoryToDo="item" :key="item.NbC"
      @event-cat="item.done = true, deleteCat()" @click.prevent="GoToCat(item)" />
  </div>


  <div class="TitleTask">
    <p>Tasks</p>
  </div>
  <div class="LotTask">
    <ItemsForToDo v-for="item in store.toBeComplete" :ToDo="item" :key="item.Nb"
      @event-added="item.done = true, deleteTask()" @event-edit="editTask(item)" />
    <template v-if="isEditing">
      <div class="edit-form">
        <input type="text" v-model="TextTask" placeholder="Edit this task..." />
        <button id="ButSave" @click="saveEdit(itemToEdit)">Save</button>
      </div>
    </template>
  </div>

</template>


<style>
.TitleCate {
  height: auto;
  width: auto;
  display: flex;

}

.TitleCate p {
  position: relative;
  display: flex;
  font-size: 3vh;
  top: 10%;
  font-family: 'TypoMinText';
}


.TitleTask {
  height: auto;
  width: auto;
  display: flex;

}

.TitleTask p {
  position: relative;
  display: flex;
  font-size: 3vh;
  top: 10%;
  font-family: 'TypoMinText';
}

.ForALigne {
  align-items: center;
  width: 50%;
}

.LotCategorie {
  display: flex;
  width: 100%;
  height: 32vh;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-x: hidden;
  overflow-y: scroll;
}


#ButSave {
  padding: 9px 14px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  left: 40%;
}

.LotTask {
  display: flex;
  width: 100%;
  height: 24vh;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>