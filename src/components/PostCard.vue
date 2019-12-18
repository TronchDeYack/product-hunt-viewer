<template>
  <div class="post-card">
    <img class="card-img" :src="img" />
    <div class="card-body">
      <h3 class="title">{{ title }}</h3>
      <p class="upvotes">{{ votes }} upvotes</p>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  width: 20rem;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: box-shadow 0.3s ease-in-out;
  margin: 2rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }

  .card-img {
    height: 180px;
    width: 100%;
    display: block;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 0 1.25rem 1.25rem 1.25rem;

    .title {
      margin-bottom: .75rem;
    }
    .upvotes {
      font-size: 12px;
    }
  }
}
</style>

<script>
export default {
  name: 'post-card',
  props: {
    img: String,
    title: String,
    votes: Number,
    description: String,
  },
};
</script>
