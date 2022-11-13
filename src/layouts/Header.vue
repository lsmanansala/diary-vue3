<script setup lang="ts">
import logo from "../assets/thoughts.png";
</script>

<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat :ripple="false" href="/">
          <q-avatar square>
            <img :src="logo" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
  </div>
</template>
