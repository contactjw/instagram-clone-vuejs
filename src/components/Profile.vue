<script setup>
import Container from './Container.vue';
import UserBar from './UserBar.vue';
</script>

<template>
  <Container>
    <div class="profile-container">
      <UserBar
        username="johnw"
        :userInfo="{
          posts: 4,
          followers: 101,
          following: 333,
        }"
      />
      <h1>IMAGE GALLERY</h1>
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
}
</style>
