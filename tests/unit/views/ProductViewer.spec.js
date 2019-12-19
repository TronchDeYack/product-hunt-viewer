import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';

import ProductViewer from '@/views/ProductViewer.vue';
import initializeStore from '../utils';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ProductViewer', () => {
  let wrapper;

  const day = 15;

  const posts = {
    edges: [{
      node: {
        id: '178112',
        name: 'Mailmeteor',
        description: 'Mailmeteor is the easiest and privacy-first mail merge add-on for Gmail. 🌠Email a lot of people quickly 🌠Real-time tracking, attachments, alias... 🌠Increase your answer rate dramatically 💫 Send 100 emails a day for free',
        createdAt: '2019-12-19T08:00:00Z',
        votesCount: 212,
        makers: [{
          id: '1',
        }, {
          id: '2',
        }],
        commentsCount: 150,
        thumbnail: {
          url: 'https://ph-files.imgix.net/4d44f9de-3d83-4a29-9285-a0651bc948e0?auto=format&fit=crop',
        },
      },
    }, {
      node: {
        id: '178447',
        name: 'Slapdash 1.0 ',
        description: 'A rethink of how we work, with a focus on speed, ergonomics and fun. It\'s the missing operating system for your cloud apps.',
        createdAt: '2019-12-19T08:03:00Z',
        votesCount: 207,
        makers: [{
          id: '2',
        }, {
          id: '3',
        }, {
          id: '4',
        }],
        commentsCount: 250,
        thumbnail: {
          url: 'https://ph-files.imgix.net/42122d73-bde8-49af-99bd-67d9351f978f?auto=format&fit=crop',
        },
      },
    }],
  };

  beforeEach(() => {
    wrapper = shallowMount(ProductViewer, {
      localVue,
      mocks: {
        $store: initializeStore(day, jest.fn()),
      },
    });
  });

  it('Should render.', () => {
    wrapper.setData({
      posts,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('Should initialize "posts" data to null.', () => {
    expect(wrapper.vm.$data.posts).toBeNull();
  });

  it('Should recall "posts" query when the selected day is updated.', (done) => {
    const refreshMock = jest.fn();
    const localStore = initializeStore(day, jest.fn());

    wrapper = shallowMount(ProductViewer, {
      localVue,
      mocks: {
        $store: localStore,
        $apollo: {
          queries: {
            posts: {
              refresh: refreshMock,
            },
          },
        },
      },
    });

    localStore.state.day = 25;

    Vue.nextTick(() => {
      expect(refreshMock).toHaveBeenCalledWith(25);
      done();
    });
  });

  describe('Computed', () => {
    describe('Posts loaded', () => {
      beforeEach(() => {
        wrapper.setData({
          posts,
        });
      });

      it('Should compute the numbers of posts based on the results.', () => {
        expect(wrapper.vm.postsNbr).toBe(2);
      });

      it('Should compute the numbers of comments based on the results.', () => {
        expect(wrapper.vm.commentsNbr).toBe(400);
      });

      it('Should compute the numbers of votes based on the results.', () => {
        expect(wrapper.vm.votesNbr).toBe(419);
      });

      it('Should compute the numbers of makers by deleting clone based on the results.', () => {
        expect(wrapper.vm.makersNbr).toBe(4);
      });
    });

    describe('Posts loading', () => {
      it('Should compute the numbers of posts with 0 when there is no post yet.', () => {
        expect(wrapper.vm.postsNbr).toBe(0);
      });

      it('Should compute the numbers of comments with 0 when there is no post yet.', () => {
        expect(wrapper.vm.commentsNbr).toBe(0);
      });

      it('Should compute the numbers of votes with 0 when there is no post yet.', () => {
        expect(wrapper.vm.votesNbr).toBe(0);
      });

      it('Should compute the numbers of makers by deleting clone with 0 when there is no post yet.', () => {
        expect(wrapper.vm.makersNbr).toBe(0);
      });
    });

    it('Should compute day from the store.', () => {
      expect(wrapper.vm.day).toBe(day);
    });
  });
});
