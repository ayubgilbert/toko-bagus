<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h5">Toko Bagus</div>
        <div class="text-subtittle1">{{ hariSekarang }}</div>
      </div>
      <q-img
        src="../statics/mountains2.jpg"
        class="header-image absolute-top"
      />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="220"
      :breakpoint="800"
    >
      <q-scroll-area
        style="
          height: calc(100% - 167px);
          margin-top: 167px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="fact_check" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>
          <q-item to="/favorite" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Favorit </q-item-section>
          </q-item>

          <q-item to="/laporan" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section> Laporan </q-item-section>
          </q-item>

          <q-item to="/inventory" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Inventori </q-item-section>
          </q-item>

          <q-item to="/bantuan" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help_center" />
            </q-item-section>

            <q-item-section> Bantuan </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="../statics/color1.jpg"
        style="height: 167px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../statics/ayub2.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Ayub Gilbert Dananjaya</div>
          <div>@ayubgilbert</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from "quasar";
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    hariSekarang() {
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, "D MMMM YYYY");
    },
  }
};
</script>
<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  filter: grayscale(100%);
}
</style>