<template>
  <div class="post">
    <BackButton class="back-btn" />
    <div class="post-content" v-if="post">
      <div class="main">
        <div class="header">
          <img :src="post.thumbnail.url" />
          <div class="header-content">
            <h1>{{ post.name }}</h1>
            <h2>{{ post.tagline }}</h2>
          </div>
        </div>
        <div class="details">
          <img class="main-picture" :src="getMainPicture()" />
          <p>
            {{ post.description }}
          </p>
          <div class="created-at">Created at : {{ getCreationDate() }}</div>
        </div>
      </div>
      <aside class="aside">
        <People :user="post.user" :makers="post.makers" />
      </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  .back-btn {
    position: absolute;
    top: 0;
    left: 0;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
      width: 100px;
      height: 100px;
    }
    .header-content {
      text-align: left;
      margin-left: 15px;

      h1 {
        font-size: 25px;
        margin: 0;
      }

      h2 {
        font-size: 15px;
        margin-top: 0;
        font-weight: 100;
      }
    }
  }
  .post-content {
    display: flex;
    justify-content: center;

    .main {
      flex: 1;
      max-width: 720px;
      min-width: 300px;
      padding: 15px;
      background: white;
      border-radius: 5px;

      .details {
        img {
          width: 100%;
        }
      }
    }

    .aside {
      width: 320px;
      margin-left: 30px;
    }
  }
}
</style>

<script>
import gql from 'graphql-tag';

import BackButton from '@/components/BackButton.vue';
import People from '@/components/People.vue';

export default {
  components: {
    BackButton,
    People,
  },
  apollo: {
    post: {
      query: gql`query Post($id: ID!) {
        post(id: $id) {
          id
          createdAt
          name
          user {
            name
            profileImage
            headline
            username
          }
          description
          makers {
            name
            username
            headline
            profileImage
          }
          media {
            type
            url
            videoUrl
          }
          tagline
          thumbnail {
            videoUrl
            type
            url
          }
        }
      }`,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  data() {
    return {
      post: null,
    };
  },
  methods: {
    getMainPicture() {
      return this.post.media.find(media => media.type === 'image').url;
    },
    getCreationDate() {
      const splittedDate = this.post.createdAt.substring(0, 10).split('-');
      return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
    },
  },
};
</script>
