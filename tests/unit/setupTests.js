import VueTestUtils from '@vue/test-utils';

VueTestUtils.config.mocks = {
  $router: {
    push: jest.fn(),
    go: jest.fn(),
  },
  $toasted: {
    error: jest.fn(),
  },
};
