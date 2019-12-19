import store, { mutations } from '@/store/index';

describe('Store', () => {
  it('Should initialize "day" state to 0.', () => {
    expect(store.state.day).toBe(0);
  });

  it('Should update "day" with new day when calling "setDay" mutation with day.', () => {
    const newDay = 15;

    const initialState = {
      day: 2,
    };

    mutations.setDay(initialState, newDay);

    expect(initialState.day).toBe(newDay);
  });
});
