import { shallowMount } from '@vue/test-utils';

import Posts from '@/components/Posts.vue';

describe('Posts', () => {
  it('Should render.', () => {
    const wrapper = shallowMount(Posts);

    expect(wrapper).toMatchSnapshot();
  });
});
