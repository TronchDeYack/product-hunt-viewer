<template>
  <select class="days">
    <option v-for="index in 31" :key="index" :value="index-1">
      {{ getLabel(index - 1) }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'days-selector',
  methods: {
    getLabel(index) {
      if (index === 0) {
        return 'Today';
      }
      if (index === 1) {
        return 'Yesterday';
      }
      return `${index} days ago`;
    },
  },
};
</script>
