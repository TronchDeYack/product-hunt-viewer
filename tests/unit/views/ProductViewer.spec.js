import { shallowMount } from '@vue/test-utils';

import ProductViewer from '@/views/ProductViewer.vue';

describe('ProductViewer', () => {
  it('Should render.', () => {
    const wrapper = shallowMount(ProductViewer);

    expect(wrapper).toMatchSnapshot();
  });
});
