export const logToConsole = (...params) => {
  if (__DEV__) {
    require('../config/ReactotronConfig').default.warn(params);
  }
};
export const printLogs = params => {
  if (__DEV__) {
    require('../config/ReactotronConfig').default.warn(params);
  }
};
