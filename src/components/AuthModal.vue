<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['isLogin']);

const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  open.value = false;
};

const title = props.isLogin ? 'Login' : 'Signup';
</script>

<template>
  <div>
    <AButton type="primary" @click="showModal" class="btn">{{ title }}</AButton>
    <AModal v-model:open="open" :title="title" @ok="handleOk">
      <AInput
        class="input"
        v-if="!isLogin"
        v-model:value="value"
        placeholder="Username"
      />
      <AInput class="input" v-model:value="value" placeholder="Email" />
      <AInput class="input" v-model:value="value" placeholder="Password" />
    </AModal>
  </div>
</template>

<style scoped>
.btn {
  margin-left: 10px;
}

.input {
  margin-top: 5px;
}
</style>
