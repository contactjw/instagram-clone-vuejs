<script setup>
import { RouterLink } from 'vue-router';
import Container from './Container.vue';
import { ref } from 'vue';

const searchUsername = ref('');

const onSearch = () => {};
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
          <div class="right-content">
            <AButton type="primary">Signup</AButton>
            <AButton type="primary">Login</AButton>
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

.left-content a {
  margin-right: 10px;
}

.right-content button {
  margin-left: 10px;
}
</style>
