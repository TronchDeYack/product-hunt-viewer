import { shallowMount } from '@vue/test-utils';

import User from '@/components/User.vue';

describe('User', () => {
  it('Should render.', () => {
    const wrapper = shallowMount(User, {
      propsData: {
        name: 'Quos T.',
        img: 'https://ph-avatars.imgix.net/2250227/original?auto=format&fit=crop&crop=faces&w=original&h=original',
        headline: 'DevOps Engineer',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
