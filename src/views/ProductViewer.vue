<template>
  <div class="product-viewer">
    <DaysSelector />
    <Stats :posts="postsNbr" :votes="votesNbr" :comments="commentsNbr" :makers="makersNbr" />
    <Posts :posts="posts"/>
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
import { mapState } from 'vuex';
import gql from 'graphql-tag';

import Posts from '@/components/Posts.vue';
import Stats from '@/components/Stats.vue';
import DaysSelector from '@/components/DaysSelector.vue';
import { getLowBoundary, getHighBoundary } from '@/utils/date';

export default {
  name: 'product-viewer',
  components: {
    DaysSelector,
    Stats,
    Posts,
  },
  apollo: {
    posts: {
      query: gql`query Posts($postedAfter: DateTime, $postedBefore: DateTime) {
        posts(postedAfter: $postedAfter, postedBefore: $postedBefore, ) {
          edges {
            node {
              id
              name
              description
              createdAt
              votesCount
              makers {
                id
              }
              commentsCount
              thumbnail {
                url
              }
            }
          }
        }
      }`,
      variables() {
        return {
          postedAfter: getLowBoundary(this.day),
          postedBefore: getHighBoundary(this.day),
        };
      },
    },
  },
  computed: {
    ...mapState({
      day: state => state.day,
    }),
    postsNbr() {
      return this.posts ? this.posts.edges.length : 0;
    },
    votesNbr() {
      return this.posts ? this.posts.edges.reduce(
        (accumulator, currentEdge) => accumulator + currentEdge.node.votesCount, 0,
      ) : 0;
    },
    commentsNbr() {
      return this.posts ? this.posts.edges.reduce(
        (accumulator, currentEdge) => accumulator + currentEdge.node.commentsCount, 0,
      ) : 0;
    },
    makersNbr() {
      if (!this.posts) {
        return 0;
      }
      const idMakers = this.posts.edges.reduce(
        (accumulator, currentEdge) => accumulator.concat(
          currentEdge.node.makers.map(maker => maker.id),
        ), [],
      );
      return new Set(idMakers).size;
    },
  },
  data() {
    return {
      posts: null,
    };
  },
  watch: {
    day() {
      this.$apollo.queries.posts.refresh(this.day);
    },
  },
};
</script>
