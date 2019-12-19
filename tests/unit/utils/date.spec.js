import { getHighBoundary, getLowBoundary } from '@/utils/date';

describe('date', () => {
  const dateOfTheDay = new Date('2019-12-15T13:07:04.023Z');

  beforeEach(() => {
    const RealDate = Date;
    global.Date = class extends RealDate {
      constructor(arg) {
        super();
        if (arg) {
          return new RealDate(arg);
        }
        return new RealDate(dateOfTheDay);
      }
    };
  });

  describe('getLowBoundary', () => {
    it('Should return "2019-12-13" when calling with "2".', () => {
      expect(getLowBoundary(2)).toEqual('2019-12-13T00:00:00Z');
    });
  });

  describe('getHighBoundary', () => {
    it('Should return "2019-12-14" when calling with "2".', () => {
      expect(getHighBoundary(2)).toEqual('2019-12-14T00:00:00Z');
    });
  });
});
