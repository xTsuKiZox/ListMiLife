
import { reactive, computed } from 'vue'


export const store = reactive({
  TaskToDo: [
  ],
  AddDoTask(TextTask) {
    this.NbTask++
    if (TextTask.length) {
      const lastToDoId = this.TaskToDo[this.TaskToDo.length - 1]?.Nb
      const Nb = (lastToDoId !== undefined) ? lastToDoId + 1 : 0
      const categoryid = (lastToDoId !== undefined) ? lastToDoId + 1 : 0
      this.TaskToDo.push({ Nb: Nb, TextTask, done: false, categoryid: categoryid });
    }

  },
  CategoryToDo: [],
  AddDoCategory(TextCat){
    this.NbCat++
    if (TextCat.length) {
      const lastToDoId = this.CategoryToDo[this.CategoryToDo.length - 1]?.NbC
      const NbC = (lastToDoId !== undefined) ? lastToDoId + 1 : 0
      const categoryid = (lastToDoId !== undefined) ? lastToDoId + 2 : 1
      this.CategoryToDo.push({ NbC: NbC, TextCat, done: false, categoryid: categoryid });
    }

  },
  ToDoForCategory(categoryid) {
    return this.TaskToDo.filter(t => t.categoryid === parseInt(categoryid))

  },
  ForTitleCat(categoryid) {
    return this.CategoryToDo.find(t => t.categoryid === parseInt(categoryid))

  },
  IsDone: computed(() => store.TaskToDo.filter(t => t.done)),
  toBeComplete: computed(() => store.TaskToDo.filter(t => t.done === false)),

  IsDoneCat: computed(() => store.CategoryToDo.filter(t => t.done)),
  toBeCompleteCat: computed(() => store.CategoryToDo.filter(t => t.done === false)),

  IsAuth: false,
  currentUser: '',
  currentImage: "",
  NbTask: 0,
  NbCat: 0,
  NbAll: 0,


})


