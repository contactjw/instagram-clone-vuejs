<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase';

const open = ref(false);
const caption = ref('');
const file = ref(null);

const showModal = () => {
  open.value = true;
};

const handleOk = async () => {
  const fileName = Math.floor(Math.random() * 1000000000000000);
  if (file.value) {
    await supabase.storage
      .from('images')
      .upload('public/' + fileName, file.value);
  }
};

const handleUploadChange = (e) => {
  if (e.target.files[0]) {
    file.value = e.target.files[0];
  }
};
</script>

<template>
  <div>
    <AButton @click="showModal">Upload Photo</AButton>
    <AModal v-model:open="open" title="Upload Photo" @ok="handleOk">
      <input type="file" accept=".jpeg,.png" @change="handleUploadChange" />
      <AInput
        v-model:value="caption"
        placeholder="Caption..."
        :maxLength="50"
      />
    </AModal>
  </div>
</template>

<style scoped>
input {
  margin-top: 10px;
}
</style>
