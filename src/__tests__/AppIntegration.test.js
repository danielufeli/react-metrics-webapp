import moxios from 'moxios';
import { getCountries } from '../redux/countries';
import store from '../redux/configureStore';

describe('getCountries action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const newState = {
      id: '0',
      name: 'Afghanistan',
      totalConfirmedCases: 176918,
      todayDeaths: 7651,
      todayNewConfirmed: 175,
      todayNewDeaths: 0,
      todayNewOpenCases: 175,
      todayNewRecovered: 0,
      todayOpenCases: 86681,
      todayRecovered: 82586,
      todayYesterdayConfirmed: 0.0009901382232959666,
      todayYesterdayDeaths: 0,
      todayYesterdayOpenCases: 0.002022981064897289,
      todayYesterdayRecovered: 0,
      yesterdayConfirmed: 176743,
      yesterdayDeaths: 7651,
      yesterdayOpenCases: 86506,
      yesterdayRecovered: 82586,
      totalGlobalCases: 465334138,
    };

    return store.dispatch(getCountries())
      .then(() => {
        const state = store.getState();
        expect(state.countries[0]).toStrictEqual(newState);
      });
  });
});
