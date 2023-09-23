const checkHttp = (inputText) => {
  const Regex = /^(http:\/\/|https:\/\/)/gi;
  if (!Regex.test(inputText)) {
    inputText = inputText.replace(/^(http|https|:)/gi, "");
    return "https://" + inputText;
  }
  return inputText;
};

export default checkHttp;
