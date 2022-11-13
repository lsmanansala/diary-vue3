<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" style="height: 300px">
      <Header />
      <SideBar :menu="entries" @listClicked="catchClicked" :diary="diary" />
      <q-page-container>
        <q-page v-if="entry">
          <div class="text-h5 q-my-lg">
            {{ entry?.title }}
            <q-btn @click="saveContent"> save </q-btn>
          </div>
          <!-- <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p> -->
          <QuillEditor v-model:content="content" theme="snow" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import SideBar from "../layouts/SideBar.vue";
import Header from "../layouts/Header.vue";
import { QuillEditor } from "@vueup/vue-quill";

import DiaryApiService from "../services/DiaryApiService";
import DiaryEntriesApiService from "../services/DiaryEntriesApiService";

import { Diary, Entry } from "../interfaces/diary.interface";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const route = useRoute();
const diary = ref<Diary>();
const entries = ref<Entry[]>([]);
const entry = ref<Entry>();
const content = ref();

onMounted(() => {
  fetchDiary();
  fetchEntries();
});

const fetchDiary = async () => {
  diary.value = await new DiaryApiService().getItem(
    parseInt(route.params.diary_id)
  );
};

const fetchEntries = async () => {
  entries.value = await new DiaryEntriesApiService().getList({
    diaryId: parseInt(route.params.diary_id),
  });
};

const catchClicked = (value: Entry) => {
  entry.value = value;
  content.value = JSON.parse(value.text)
};

const saveContent = () => {
  const payload = {
    text: JSON.stringify(content.value),
    title: "test title",
    diaryId: parseInt(route.params.diary_id)
  };
  const resp = new DiaryEntriesApiService().saveItem(
    payload
  );
};
</script>
