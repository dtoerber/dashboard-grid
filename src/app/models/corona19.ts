export interface Corona19 {
  country: string;
  countryInfo: {
    iso2: string;
    iso3: string;
    _id: number;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
}
