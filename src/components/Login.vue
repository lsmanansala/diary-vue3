<script setup lang="ts">
import { ref } from "vue";
import Logo from "../assets/thoughts.png";
import { useRouter } from "vue-router";
import AuthApiService from "../services/AuthApiService";

const router = useRouter()
const email = ref("");
const password = ref("");

const onReset = () => {
  email.value = "";
  password.value = "";
};

const onSubmit = async () => {
  const resp = await new AuthApiService().logIn({
    "email": email.value,
    "password": password.value
  })
  if (!resp)
    console.log('wrong creds')
  router.push('/me')
};
</script>
<template>
  <div class="row justify-center">
    <div class="col-24 self-center">
      <q-card class="my-card">
        <div class="q-pa-lg">
          <q-img :src="Logo" style="max-width: 200px"></q-img>
        </div>
        <q-card-section class="q-pt-none">
          <q-form @submit="onSubmit" @reset="onReset">
            <q-input class="q-pa-sm" v-model="email" label="Email"></q-input>
            <q-input
              class="q-pa-sm"
              v-model="password"
              type="password"
              label="Password"
            ></q-input>

            <div class="q-ma-md">
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style scoped>
.my-card {
  width: 400px;
  max-height: 500px;
}
</style>
