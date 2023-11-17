<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Container from './Container.vue';
import AuthModal from './AuthModal.vue';
import { ref } from 'vue';

const router = useRouter();
const searchUsername = ref('');

const isAuthenticated = ref(false);

const onSearch = () => {
  if (searchUsername.value) {
    router.push(`profile/${searchUsername.value}`);
    searchUsername.value = '';
  }
};
</script>

<template>
  <ALayout class="layout">
    <ALayoutHeader>
      <Container>
        <div class="nav-container">
          <div class="left-content">
            <RouterLink to="/">Instagram</RouterLink>
            <AInputSearch
              v-model:value="searchUsername"
              placeholder="username..."
              style="width: 200px"
              @search="onSearch"
            />
          </div>
          <div class="right-content" v-if="!isAuthenticated">
            <AuthModal :isLogin="false" />
            <AuthModal :isLogin="true" />
          </div>
          <div class="right-content" v-else>
            <AButton type="primary">Profile</AButton>
            <AButton type="primary">Logout</AButton>
          </div>
        </div>
      </Container>
    </ALayoutHeader>
  </ALayout>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
}

.left-content {
  display: flex;
  align-items: center;
}

.right-content {
  display: flex;
  align-items: center;
}

.left-content a {
  margin-right: 10px;
}

.right-content button {
  margin-left: 10px;
}
</style>
