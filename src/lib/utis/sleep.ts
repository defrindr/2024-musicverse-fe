export const sleep = async (second: number) => {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
};
