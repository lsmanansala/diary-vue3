<script setup lang="ts">
import logo from "./assets/thoughts.png";
</script>

<template>
  <div>
    <q-layout view="lHh lpr lFf">
      <q-page-container>
        <q-page class="q-pa-md">
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
