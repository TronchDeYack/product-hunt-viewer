import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import DaysSelector from '@/components/DaysSelector.vue';
import initializeStore from '../utils';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('DaysSelector', () => {
  let wrapper;
  const setDayMock = jest.fn();

  const selectedDay = 15;

  beforeEach(() => {
    wrapper = mount(DaysSelector, {
      localVue,
      mocks: {
        $store: initializeStore(selectedDay, setDayMock),
      },
    });
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

  it('Should call "setDay" mutation with the new selected day when changing value.', () => {
    const anotherDay = '28';

    wrapper.findAll('option').at(anotherDay).element.selected = true;
    wrapper.find('select').trigger('change');

    expect(setDayMock.mock.calls[0][1]).toBe(28);
  });
});
