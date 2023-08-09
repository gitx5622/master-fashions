let HOST;

export const environment = (env) => {
  if (env === "development") {
    HOST = "http://127.0.0.1:8500";
  } else {
    HOST = "https://master-backend.herokuapp.com";
  }
  return HOST;
};