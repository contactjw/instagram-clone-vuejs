<script setup>
import Container from './Container.vue';
import ImageGallery from './ImageGallery.vue';
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
      <ImageGallery
        :posts="[
          {
            id: 1,
            image:
              'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
          },
          {
            id: 2,
            image:
              'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
          },
        ]"
      />
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
