<script setup>
import Profile from '../components/Profile.vue';
</script>

<template>
  <main>
    <Profile
      username="johnw"
      :userInfo="{
        posts: 4,
        followers: 101,
        following: 333,
      }"
    />
  </main>
</template>
