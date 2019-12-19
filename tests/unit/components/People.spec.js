import { shallowMount } from '@vue/test-utils';

import People from '@/components/People.vue';

describe('People', () => {
  it('Should render.', () => {
    const wrapper = shallowMount(People, {
      propsData: {
        user: {
          name: 'Quos T.',
          username: 'quost',
          profileImage: 'https://ph-avatars.imgix.net/2250227/original?auto=format&fit=crop&crop=faces&w=original&h=original',
          headline: 'DevOps Engineer',
        },
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
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
