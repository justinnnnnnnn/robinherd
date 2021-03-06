// const APIhash = 'c1raom2ad3iatqdnkia0'
// const apihash = window.finnhubAPIKey;
const apihash = 'c1skd2iad3i9o8uantdg'
// const apihash = window.finnhubAPIKey

export const fetchStonk = (symbol) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/search?q=${symbol}&token=${apihash}`,
    // url: `'https://finnhub.io/api/v1/stock/${symbol}?exchange=US&token='${APIhash}`
  });


export const fetchStonkBio = (symbol) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apihash}`,
  });

export const fetchStonkNews = (symbol, fromDate, toDate) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${apihash}`,
  });

export const fetchMarketNews = () =>
  $.ajax({
    url: `https://finnhub.io/api/v1/news?category=general&token=${apihash}`,
  });

export const fetchStonkCurrentPrice = (symbol) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apihash}`,
  });

export const fetchStonkIntraday = (symbol, from, to) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=5&from=${from}&to=${to}&token=${apihash}`,
  });

// export const fetchMarketNews = () => {
//   return $.ajax({
//     method: 'GET',
//     url: `https://finnhub.io/api/v1/news?category=general&token=${window.finnhubAPIKey}`
//   })
// }