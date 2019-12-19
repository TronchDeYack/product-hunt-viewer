import { shallowMount } from '@vue/test-utils';

import Posts from '@/components/Posts.vue';

describe('Posts', () => {
  it('Should render.', () => {
    const wrapper = shallowMount(Posts, {
      propsData: {
        posts: {
          edges: [{
            node: {
              id: '178112',
              name: 'Mailmeteor',
              description: 'Mailmeteor is the easiest and privacy-first mail merge add-on for Gmail. 🌠Email a lot of people quickly 🌠Real-time tracking, attachments, alias... 🌠Increase your answer rate dramatically 💫 Send 100 emails a day for free',
              createdAt: '2019-12-19T08:00:00Z',
              votesCount: 212,
              thumbnail: {
                url: 'https://ph-files.imgix.net/4d44f9de-3d83-4a29-9285-a0651bc948e0?auto=format&fit=crop',
              },
            },
          }, {
            node: {
              id: '178447',
              name: 'Slapdash 1.0 ',
              description: 'A rethink of how we work, with a focus on speed, ergonomics and fun. It\'s the missing operating system for your cloud apps.',
              createdAt: '2019-12-19T08:03:00Z',
              votesCount: 207,
              thumbnail: {
                url: 'https://ph-files.imgix.net/42122d73-bde8-49af-99bd-67d9351f978f?auto=format&fit=crop',
              },
            },
          }],
        },
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
