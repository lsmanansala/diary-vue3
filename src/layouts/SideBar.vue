<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(false);

interface Props {
  menu: any;
  diary: any;
}

const props = defineProps<Props>();
defineEmits(["listClicked"]);
</script>

<template>
  <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
    <q-scroll-area
      style="
        height: calc(100% - 150px);
        margin-top: 150px;
        border-right: 1px solid #ddd;
      "
    >
      <q-list padding>
        <q-item
          v-for="entry in props.menu"
          clickable
          @click="$emit('listClicked', entry)"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section> {{ entry.title }} </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
    ƒ
    <q-img
      class="absolute-top"
      src="https://cdn.quasar.dev/img/material.png"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <div class="text-weight-bold">{{ diary?.title }}</div>
      </div>
    </q-img>
  </q-drawer>
</template>
