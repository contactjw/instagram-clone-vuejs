<script setup>
import Card from './Card.vue';
import Container from './Container.vue';

const data = [
  {
    id: 1,
    username: 'Selena',
    url: 'https://pbs.twimg.com/media/F7eJSKpW0AAF89Y.jpg',
    caption: 'come to my show!',
  },
  {
    id: 2,
    username: 'Drake',
    url: 'https://cdn.britannica.com/37/231937-050-9228ECA1/Drake-rapper-2019.jpg?w=400&h=300&c=crop',
    caption: 'hello everyone',
  },
];
</script>

<template>
  <Container>
    <div class="timeline-container">
      <Card v-for="post in data" :key="post.id" :post="post" />
    </div>
  </Container>
</template>

<style scoped>
.timeline-container {
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
