import { shallowMount } from '@vue/test-utils';

import PostDetails from '@/views/PostDetails.vue';

describe('PostDetails', () => {
  let wrapper;

  const post = {
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
  };

  it('Should initialize "post" data to null.', () => {
    wrapper = shallowMount(PostDetails);
    expect(wrapper.vm.$data.post).toBeNull();
  });

  describe('Post loaded', () => {
    beforeEach(() => {
      wrapper = shallowMount(PostDetails);
      wrapper.setData({
        post,
      });
    });

    it('Should render.', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should display the first picture as main picture of the post returned by the API.', () => {
      expect(wrapper.find('.main-picture').attributes('src'))
        .toEqual('https://ph-files.imgix.net/06a4b0e0-c0d6-4795-9252-9d4947edc2bc?auto=format&fit=crop');
    });

    it('Should display the creation date with DD/MM/YYYY pattern.', () => {
      expect(wrapper.find('.created-at').text())
        .toEqual('Created at : 18/12/2019');
    });
  });
});
