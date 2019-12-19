import { shallowMount } from '@vue/test-utils';

import PostDetails from '@/views/PostDetails.vue';

describe('PostDetails', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PostDetails);
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
