<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" @click="goBack">
    <g clip-path="url(#b)">
      <path d="M48.031 30.031v3.938H23.656l11.156 11.25L32
      48.031 15.969 32 32 15.969l2.812 2.812-11.156 11.25z"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  width: 30px;

  &:hover {
    cursor: pointer;
  }
}
</style>

<script>
export default {
  name: 'back-button',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
