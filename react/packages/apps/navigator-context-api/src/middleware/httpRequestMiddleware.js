const httpRequestMiddleware = store => {
  return next => async action => {
    console.log("http request Triggered");
    console.log(action);

    next(action);
  };
};

export default httpRequestMiddleware;
