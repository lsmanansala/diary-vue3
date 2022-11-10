<script setup lang="ts">
import logo from "./assets/thoughts.png";
</script>

<template>
  <div>
    <q-layout view="lHh lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat :ripple="false" href="/">
            <q-avatar square>
              <img :src="logo" />
            </q-avatar>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
