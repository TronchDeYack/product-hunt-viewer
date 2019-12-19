<template>
  <select class="days" :value="day" @change="onDayUpdate">
    <option v-for="index in 31" :key="index" :value="index-1">
      {{ getLabel(index - 1) }}
    </option>
  </select>
</template>

<script>
import { mapState } from 'vuex';

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
    onDayUpdate(evt) {
      this.$store.commit('setDay', Number(evt.target.value));
    },
  },
  computed: {
    ...mapState({
      day: state => state.day,
    }),
  },
};
</script>
