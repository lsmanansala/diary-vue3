<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DiaryApiService from '../services/DiaryApiService';

import CardLink from '../components/base/CardLink.vue';
const items = ref([])

onMounted(() => {
  fetchDiaries()
})

const fetchDiaries = async () => {
  items.value = await new DiaryApiService().getDiaries()
}
</script>
<template>
  <div class="q-mt-lg" style="text-align: center">
    <div class="text-h5">My Diaries</div>
    <div class="row justify-center">
      <div v-for="item in items" :key="item" class="col-3 q-ma-sm">
        <div>
          <CardLink :item="item" :entity="'diary'" />
        </div>
      </div>
    </div>
  </div>
</template>
