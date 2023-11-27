<script setup>
import { defineProps } from 'vue';
import UploadPhotoModal from './UploadPhotoModal.vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../stores/users';
import { storeToRefs } from 'pinia';

const route = useRoute();
const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const { username: profileUserName } = route.params;

const props = defineProps(['username', 'userInfo']);
</script>

<template>
  <div class="userbar-container">
    <div class="top-content">
      <ATypographyTitle :level="2">{{ props.username }}</ATypographyTitle>
      <UploadPhotoModal v-if="user && profileUserName === user.username" />
    </div>
    <div class="bottom-container">
      <ATypographyTitle :level="5"
        >{{ props.userInfo.posts }} Posts</ATypographyTitle
      >
      <ATypographyTitle :level="5"
        >{{ props.userInfo.followers }} followers</ATypographyTitle
      >
      <ATypographyTitle :level="5"
        >{{ props.userInfo.following }} following</ATypographyTitle
      >
    </div>
  </div>
</template>

<style scoped>
.userbar-container {
  padding-bottom: 75px;
}

.bottom-container {
  display: flex;
  align-items: center;
}

.bottom-container h5 {
  margin: 0;
  padding: 0;
  margin-right: 30px;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
