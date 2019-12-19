import { mount } from '@vue/test-utils';

import BackButton from '@/components/BackButton.vue';

describe('BackButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BackButton);
  });

  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should back to previous page when clicking on it.', () => {
    wrapper.find('svg').trigger('click');

    expect(wrapper.vm.$router.go).toHaveBeenCalledWith(-1);
  });
});
