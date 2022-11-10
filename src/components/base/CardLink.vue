<script setup lang="ts">
import { ref } from "vue";
import { Diary } from "../../interfaces/diary.interface";
import { date } from "quasar";
import { useRouter } from "vue-router";

interface Props {
  item: Diary;
  entity: string;
}
const rand = ref(0);
const props = defineProps<Props>();
const router = useRouter();
rand.value = Math.floor(Math.random() * 10);

const clicked = () => {
  if (props.entity === 'diary')
    router.push(`/me/diaries/${props.item?.id}`)
}
</script>
<template>
  <div>
    <q-card bordered class="my-card" @click="clicked">
      <img :src="`https://picsum.photos/500/300?image=${rand * 5 + 10}`" />
      <q-separator dark inset />

      <q-card-section>
        <div class="text-h6">{{ item?.title }}</div>
        <div class="text-subtitle2">{{ item?.description }}</div>
        <div class="text-subtitle2">Last Updated: {{ date.formatDate(item?.updatedAt, 'YYYY/MM/DD hh:mm A') }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
