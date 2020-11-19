<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-primary">
      <q-input 
      v-model="newTask"
      @keyup.enter="addTask"
      class="col"
      square
      filled 
      bg-color="white"
      placeholder="Tambah Barang"   
      dense>
        <template v-slot:append>
          <q-btn 
          @click="addTask"
          round 
          dense 
          flat 
          icon="add" />
        </template>
      </q-input>
    </div>
    <q-list 
    class="bg-white"
    separator
    bordered>
      <q-item 
      v-for="(task,index) in tasks"
      :key="task.title"
      @click="task.done = !task.done"
      :class="{'done bg-blue-1':task.done}"
      clickable
      v-ripple>
        <q-item-section avatar top>
          <q-checkbox 
          v-model="task.done"
          class="no-pointer-events"
          color="cyan"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section
        v-if="task.done"
        side>
          <q-btn 
          @click.stop="deleteTask(index)"
          flat 
          round
          dense
          color="primary" 
          icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
    <div 
    v-if="!tasks.length"
    class="no-task absolute-center">
      <q-icon
      name="check"
      size="50px"
      color="primary"
      >
      </q-icon>
      <div class="text-primary text-center">
        Kosong
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      newTask:'',
      tasks:[
        // {
        //   title:'Komputer',
        //   done: false
        // },
        // {
        //   title:'Laptop',
        //   done: false
        // },
        // {
        //   title:'Tablet PC',
        //   done: false
        // }
      ]
    }
  },
  methods: {
    deleteTask(index){
      this.$q.dialog({
        title: 'Hapus Barang',
        message: 'Beneran Dihapus?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index,1)
        this.$q.notify('Item Terhapus')
      })
    },
    addTask() {
      console.log('add task')
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask =''
    }
  }
}
</script>
<style lang="scss">
.done{
  .q-item__label {
    text-decoration: line-through;
    color: olivedrab;
  }
}
.no-task{
  opacity: 0.7;
  margin-top: 10px;
}
</style>