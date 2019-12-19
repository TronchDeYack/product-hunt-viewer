<template>
  <div class="people">
    <h2>Hunter</h2>
    <User :name="user.name" :img="user.profileImage" :headline="user.headline" />
    <h2>Makers</h2>
    <User v-for="maker in makers" :key="maker.username"
      :name="maker.name" :img="maker.profileImage" :headline="maker.headline" />
  </div>
</template>

<style lang="scss" scoped>
.people {
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 15px;
    text-align: left;
    margin-left: 15px;
  }
}
</style>

<script>
import User from '@/components/User.vue';

export default {
  name: 'authors',
  components: {
    User,
  },
  props: ['user', 'makers'],
};
</script>
