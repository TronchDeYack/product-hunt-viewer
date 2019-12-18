<template>
  <div class="stats">
    <div class="stat">
      <div class="number">{{ posts }}</div>
      <div class="label">POSTS</div>
    </div>
    <div class="stat">
      <div class="number">{{ votes }}</div>
      <div class="label">VOTES</div>
    </div>
    <div class="stat">
      <div class="number">{{ comments }}</div>
      <div class="label">COMMENTS</div>
    </div>
    <div class="stat">
      <div class="number">{{ makers }}</div>
      <div class="label">MAKERS</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stats {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;

  .stat {
    margin: 10px;
    .number {
      color: red;
      font-size: 18px;
    }
    .label {
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>

<script>
export default {
  name: 'stats',
  props: {
    posts: Number,
    votes: Number,
    comments: Number,
    makers: Number,
  },
};
</script>
