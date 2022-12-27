import { instance } from "../Instance/instance";

const setToken = (accessToken) => {
  if (accessToken) {
    instance.defaults.headers.common["authorization"] = `Bearer ${accessToken}`;
  } else {
    delete instance.defaults.headers.common["authorization"];
  }
};

export default setToken;

// const accessToken = getCookie("token");
//       setToken(accessToken);
