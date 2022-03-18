import { getCountriesSuccess } from '../redux/countries';

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = getCountriesSuccess([]);
    expect(newState.payload).toEqual([]);
  });

  it('Should return new state if receiving type', () => {
    const country = [
      {
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
      },
    ];
    const newState = getCountriesSuccess(country);
    expect(newState.payload).toEqual(country);
  });
});
