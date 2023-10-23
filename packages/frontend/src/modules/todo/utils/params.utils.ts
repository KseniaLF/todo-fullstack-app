export const getSearchParams = (params: URLSearchParams) => Object.fromEntries(params.entries());

export const getClearParams = (params: URLSearchParams) => {
  const { page, ...clearParams } = getSearchParams(params);
  return clearParams;
};
