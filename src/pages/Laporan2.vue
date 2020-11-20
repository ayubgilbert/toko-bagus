<template>
  <q-page>
    <div class="row"></div>
    <div class="absolute-center">
      <q-card v-for="krs in krs" :key="krs.index" class="kt my-card">
        <q-img src="../statics/old-books.jpg" basic>
          <div class="absolute-bottom text-h6">Jaringan Komputer</div>
        </q-img>

        <q-card-section>
          <q-chip icon="event">{{ krs.hari }} </q-chip>
          <q-chip icon="alarm">{{ krs.jam }} </q-chip>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      krs: [
        {
          hari: "Senin",
          jam: "08;00",
        },
        {
          hari: "Selasa",
          jam: "09:00",
        },
        {
          hari: "Rabu",
          jam: "10:00",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.my-card {
  margin-top:15px;
  width: 100%;
  max-width: 300px;
}
// .kt {
//   margin-left: 10%;
// }
</style>