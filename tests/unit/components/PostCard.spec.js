import { mount } from '@vue/test-utils';

import PostCard from '@/components/PostCard.vue';

describe('PostCard', () => {
  it('Should render.', () => {
    const wrapper = mount(PostCard, {
      propsData: {
        img: 'https://hello.com/img/random.png',
        title: 'Kite compositor',
        votes: 731,
        description: 'This is a post about interesting things... I guess !',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
