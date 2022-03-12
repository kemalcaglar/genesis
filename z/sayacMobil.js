var dataUser = dataLayer.filter((el) => el.userInfo);
dataUser = dataUser[0].userInfo;

let dataUser;
if (dataLayer[1].event === "userInfo" ? true : false) {
  dataUser = dataLayer[1].userInfo
} else if (dataLayer[2].event === "userInfo" ? true : false) {
  dataUser = dataLayer[2].userInfo
} else if (dataLayer[3].event === "userInfo" ? true : false) {
  dataUser = dataLayer[3].userInfo
}