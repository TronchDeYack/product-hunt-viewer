<template>
  <div class="user">
    <img :src="img" />
    <div class="content">
      <div class="name">
        {{ name }}
      </div>
      <span class="headline">
        {{ headline }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 1rem;

  img {
    height: 100%;
    border-radius: 100%;
  }

  .content {
    text-align: left;
    margin-left: 15px;

    .name {
      font-weight: bold;
    }

    .headline {
      font-size: 12px;
    }
  }
}
</style>

<script>
export default {
  name: 'user',
  props: {
    name: String,
    headline: String,
    img: String,
  },
};
</script>
