import { mount } from '@vue/test-utils';

import Stats from '@/components/Stats.vue';

describe('Stats', () => {
  it('Should render.', () => {
    const wrapper = mount(Stats, {
      propsData: {
        posts: 37,
        votes: 3904,
        comments: 371,
        makers: 54,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
