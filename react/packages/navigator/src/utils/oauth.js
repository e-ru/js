export const parseHrefForCode = href => {
  let code = "no-code";
  if (href !== null && href !== undefined) {
    code = href.substring(href.indexOf("=") + 1);
    code = code.substring(0, code.indexOf("&"));
  }
  return code;
};

export const parseHrefForState = href =>
  href !== null && href !== undefined ? href.substring(href.lastIndexOf("=") + 1) : "no-state";

export const generateRandomOAuthState = () =>
  Math.random()
    .toString(36)
    .substring(2, 15);

export const compareGeneratedWithReceivedState = (generatedState, receivedState) =>
  generatedState.localeCompare(receivedState) === 0;

export const decodeAuthErrorResponse = (error, errorDescription) =>
  decodeURI(`${error} - ${errorDescription.replace(/&amp;/g, "&")}`);
