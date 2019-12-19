<template>
  <div class="posts">
    <PostCard v-for="(post, index) in posts" :key="index"
      :img="post.img" :votes="post.votes" :description="post.description"
      :title="post.title" :id="post.id"
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
  data() {
    return {
      posts: [{
        id: '178447',
        img: 'https://ph-files.imgix.net/85b28898-f9b2-40ec-8856-20be8bf3d2e0?auto=format&fit=crop',
        title: 'Kite compositor',
        description: 'This is a post about interesting things... I guess !',
        votes: 731,
      }, {
        id: '178447',
        img: 'https://ph-files.imgix.net/85b28898-f9b2-40ec-8856-20be8bf3d2e0?auto=format&fit=crop',
        title: 'Kite compositor',
        description: 'This is a post about interesting things... I guess !',
        votes: 731,
      }, {
        id: '178447',
        img: 'https://ph-files.imgix.net/85b28898-f9b2-40ec-8856-20be8bf3d2e0?auto=format&fit=crop',
        title: 'Kite compositor',
        description: 'This is a post about interesting things... I guess !',
        votes: 731,
      }, {
        id: '178447',
        img: 'https://ph-files.imgix.net/85b28898-f9b2-40ec-8856-20be8bf3d2e0?auto=format&fit=crop',
        title: 'Kite compositor',
        description: 'This is a post about interesting things... I guess !',
        votes: 731,
      }, {
        id: '178447',
        img: 'https://ph-files.imgix.net/85b28898-f9b2-40ec-8856-20be8bf3d2e0?auto=format&fit=crop',
        title: 'Kite compositor',
        description: 'This is a post about interesting things... I guess !',
        votes: 731,
      }, {
        id: '178447',
        img: 'https://ph-files.imgix.net/85b28898-f9b2-40ec-8856-20be8bf3d2e0?auto=format&fit=crop',
        title: 'Kite compositor',
        description: 'This is a post about interesting things... I guess !',
        votes: 731,
      }],
    };
  },
};
</script>
