const getErrorStylePadding = (
  width: number,
  isError: boolean,
  errorLength: number
): number => {
  if (width <= 767 || !isError) return 16;

  if (errorLength <= 16) return 115;
  if (errorLength === 21) return 146;

  return errorLength > 21 ? 200 : 162;
};

export default getErrorStylePadding;
