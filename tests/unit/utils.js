import Vuex from 'vuex';

export default function (day, setDayMock) {
  return new Vuex.Store({
    state: {
      day,
    },
    mutations: {
      setDay: setDayMock,
    },
  });
}
