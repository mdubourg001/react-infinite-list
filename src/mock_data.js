const MOCK_DATA = (offset, limit) => {
  const data = [];
  for (let i = 0; i < limit; i++) {
    data.push({ name: `Offset is ${offset + i}, limit is ${limit}` });
  }
  return data;
};

export const mock_fetch = (offset, limit) => {
  return Promise.resolve(MOCK_DATA(offset, limit));
};

export default mock_fetch;
