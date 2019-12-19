import { mount } from '@vue/test-utils';

import PostCard from '@/components/PostCard.vue';

describe('PostCard', () => {
  let wrapper;

  const postId = 'ID';

  beforeAll(() => {
    wrapper = mount(PostCard, {
      propsData: {
        id: postId,
        img: 'https://hello.com/img/random.png',
        title: 'Kite compositor',
        votes: 731,
        description: 'This is a post about interesting things... I guess !',
      },
    });
  });

  it('Should render.', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should redirect to the post details when clicking on it.', () => {
    wrapper.find('.post-card').trigger('click');

    expect(wrapper.vm.$router.push).toHaveBeenCalledWith(`/post/${postId}`);
  });
});
