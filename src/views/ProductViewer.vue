<template>
  <div class="product-viewer">
    <h1 class="title">ProductHunt</h1>
    <h2 class="subtitle">The best new products, every day</h2>
    <DaysSelector />
    <Stats :posts=37 :votes=3904 :comments=371 :makers=54 />
    <Posts />
  </div>
</template>

<style lang="scss">
.product-viewer {
  .title {
    color: red;
    margin-bottom: 0;
  }
  .subtitle {
    font-size: 12px;
    font-weight: lighter;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
  }
}
</style>

<script>
import Posts from '@/components/Posts.vue';
import Stats from '@/components/Stats.vue';
import DaysSelector from '@/components/DaysSelector.vue';

export default {
  name: 'product-viewer',
  components: {
    DaysSelector,
    Stats,
    Posts,
  },
};
</script>
