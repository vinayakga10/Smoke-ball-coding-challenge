const { httpGet } = require('./mock-http-interface');

const fetchArnieQuote = async (url) => {
  try {
    const response = await httpGet(url);
    const parsedBody = JSON.parse(response.body);

    return response.status === 200
      ? { 'Arnie Quote': parsedBody.message }
      : { 'FAILURE': parsedBody.message };
  } catch (error) {
    return { 'FAILURE': error.message };
  }
};

const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map(fetchArnieQuote));
};

module.exports = {
  getArnieQuotes,
};
