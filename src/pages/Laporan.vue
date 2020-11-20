<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="krs in krs" :key="krs.index" class="my-card">
      <q-img src="../statics/old-books2.jpg" basic>
        <div class="absolute-bottom text-subtitle1 text-center">
          {{krs.nMatkul}}
        </div>
      </q-img>
      <q-card-section>
        <p>{{krs.nmDosen}} </p>
        <q-chip color="lime-6" dense icon="event">{{ krs.hari }} </q-chip>
        <q-chip color="pink-12" dense icon="alarm">{{ krs.jam }} </q-chip>
        <q-chip dense>
          <q-avatar color="blue" text-color="white">{{krs.sks}} </q-avatar>
          SKS
        </q-chip>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      krs: [
        {
          nMatkul:'Pengantar Ilmu Pendidikan',
          nmDosen:'Ahmad Al-Gazali',
          hari: "Senin",
          jam: "08:00",
          sks:2
        },
        {
          nMatkul:'Basis Data',
          nmDosen:'Eko Wicaksono',
          hari: "Selasa",
          jam: "09:00",
          sks:3
        },
        {
          nMatkul:'Matematika Diskrit',
          nmDosen:'Firman Pandjaitan',
          hari: "Rabu",
          jam: "10:00",
          sks:4
        },
        {
          nMatkul:'Aljabar Linear',
          nmDosen:'Agus Martoyo',
          hari: "Kamis",
          jam: "11:00",
          sks:5
        },
        {
          nMatkul:'Bahasa Indonesia',
          nmDosen:'Teuku Firmansyah',
          hari: "Jumat",
          jam: "13:00",
          sks:6
        },
        {
          nMatkul:'Filsafat Ilmu',
          nmDosen:'Iqbal Ramadhan',
          hari: "Jumat",
          jam: "15:00",
          sks:1
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 270px;
}
</style>