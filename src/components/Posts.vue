<template>
  <div class="posts" v-if="posts">
    <PostCard v-for="(edge, index) in posts.edges" :key="index"
      :img="edge.node.thumbnail.url"
      :votes="edge.node.votesCount"
      :description="edge.node.description"
      :title="edge.node.name" :id="edge.node.id"
    />
  </div>
</template>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
}
</style>

<script>
import PostCard from '@/components/PostCard.vue';

export default {
  name: 'posts',
  components: {
    PostCard,
  },
  props: {
    posts: Object,
  },
};
</script>
