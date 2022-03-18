const GET_COUNTRIES_SUCCESS = 'applicationStore/countriesReducer/GET_COUNTRIES_SUCCESS';
const GET_COUNTRY_SUCCESS = 'applicationStore/countriesReducer/GET_COUNTRY_SUCCESS';
const initialState = [];

export const getCountriesSuccess = (payload) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload,
});

export const getCountrySuccess = (payload) => ({
  type: GET_COUNTRY_SUCCESS,
  payload,
});

const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return [...state, ...action.payload];

    case GET_COUNTRY_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default countries;

const url = 'https://api.covid19tracking.narrativa.com/api/2022-03-17';

export const getCountries = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const totalCases = await data.total.today_confirmed;
  const countryData = await data.dates['2022-03-17'].countries;
  const countryArray = Object.values(countryData);

  const formatCountries = Object.entries(countryArray).map(([key, value]) => ({
    id: key,
    name: value.name,
    totalConfirmedCases: value.today_confirmed,
    todayDeaths: value.today_deaths,
    todayNewConfirmed: value.today_new_confirmed,
    todayNewDeaths: value.today_new_deaths,
    todayNewOpenCases: value.today_new_open_cases,
    todayNewRecovered: value.today_new_recovered,
    todayOpenCases: value.today_open_cases,
    todayRecovered: value.today_recovered,
    todayYesterdayConfirmed: value.today_vs_yesterday_confirmed,
    todayYesterdayDeaths: value.today_vs_yesterday_deaths,
    todayYesterdayOpenCases: value.today_vs_yesterday_open_cases,
    todayYesterdayRecovered: value.today_vs_yesterday_recovered,
    yesterdayConfirmed: value.yesterday_confirmed,
    yesterdayDeaths: value.yesterday_deaths,
    yesterdayOpenCases: value.yesterday_open_cases,
    yesterdayRecovered: value.yesterday_recovered,
    totalGlobalCases: totalCases,
  }));

  dispatch(getCountriesSuccess(formatCountries));
};
