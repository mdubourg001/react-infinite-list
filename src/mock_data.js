const MOCK_DATA = (offset, limit) => [
  { name: "Offset " + offset + ", limit " + limit },
  { name: "Offset " + offset + ", limit " + limit },
  { name: "Offset " + offset + ", limit " + limit },
  { name: "Offset " + offset + ", limit " + limit },
  { name: "Offset " + offset + ", limit " + limit },
  { name: "Offset " + offset + ", limit " + limit },
];

export const mock_fetch = (offset, limit) => {
  return Promise.resolve(MOCK_DATA(offset, limit));
};

export default mock_fetch;
