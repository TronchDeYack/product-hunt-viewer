import { mount } from '@vue/test-utils';

import DaysSelector from '@/components/DaysSelector.vue';

describe('DaysSelector', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(DaysSelector);
  });

  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should display "Today" for the first value of the list.', () => {
    expect(wrapper.findAll('option').at(0).text()).toEqual('Today');
  });

  it('Should display "Yesterday" for the second value of the list.', () => {
    expect(wrapper.findAll('option').at(1).text()).toEqual('Yesterday');
  });

  it('Should display "2 days ago" for the third value of the list.', () => {
    expect(wrapper.findAll('option').at(2).text()).toEqual('2 days ago');
  });

  it('Should display "3 days ago" for the fourth value of the list.', () => {
    expect(wrapper.findAll('option').at(3).text()).toEqual('3 days ago');
  });
});
