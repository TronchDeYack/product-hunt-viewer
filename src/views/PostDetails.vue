<template>
  <div class="post">
    <BackButton class="back-btn" />
    <div class="post-content">
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
import BackButton from '@/components/BackButton.vue';
import People from '@/components/People.vue';

export default {
  components: {
    BackButton,
    People,
  },
  data() {
    return {
      post: {
        createdAt: '2019-12-18T08:30:00Z',
        name: 'Firefox Lockwise',
        tagline: 'Take your passwords everywhere.',
        user: {
          name: 'Quos T.',
          profileImage: 'https://ph-avatars.imgix.net/2250227/original?auto=format&fit=crop&crop=faces&w=original&h=original',
          headline: 'DevOps Engineer',
        },
        thumbnail: {
          videoUrl: null,
          type: 'image',
          url: 'https://ph-files.imgix.net/9f7a1434-3031-47b4-95e3-636f4e4c29e0?auto=format&fit=crop',
        },
        description: 'Securely access the passwords you’ve saved in Firefox from anywhere — even outside of the browser with the redesigned, open-source password manager from Firefox.',
        makers: [
          {
            name: 'Barbara Bermes',
            username: 'bbinto',
            headline: 'Sr. Product Manager, Firefox Android',
            profileImage: 'https://ph-avatars.imgix.net/2272615/original?auto=format&fit=crop&crop=faces&w=original&h=original',
          },
          {
            name: 'Anthony Lam',
            username: 'antlam',
            headline: 'Product Design Manager, Firefox UX',
            profileImage: 'https://ph-avatars.imgix.net/2272615/original?auto=format&fit=crop&crop=faces&w=original&h=original',
          },
          {
            name: 'Nick Nguyen',
            username: 'osunick',
            headline: 'Vice President, Firefox Product',
            profileImage: 'https://ph-avatars.imgix.net/2272615/original?auto=format&fit=crop&crop=faces&w=original&h=original',
          },
        ],
        media: [
          {
            type: 'video',
            url: 'https://ph-files.imgix.net/9b0a8e4d-ce0f-4258-9c89-be302fe45095?auto=format&fit=crop',
            videoUrl: 'https://www.youtube.com/watch?v=8VoheBpsLoY',
          },
          {
            type: 'image',
            url: 'https://ph-files.imgix.net/06a4b0e0-c0d6-4795-9252-9d4947edc2bc?auto=format&fit=crop',
            videoUrl: null,
          },
          {
            type: 'image',
            url: 'Another one',
            videoUrl: null,
          },
          {
            type: 'image',
            url: 'Still another one',
            videoUrl: null,
          },
        ],
      },
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
