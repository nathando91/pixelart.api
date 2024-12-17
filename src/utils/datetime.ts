const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

export const getCurrentUTCTime = () => {
  const nowUtc = dayjs().utc();
  return nowUtc.toISOString();
};
