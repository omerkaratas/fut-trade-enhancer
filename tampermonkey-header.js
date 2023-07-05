module.exports = {
  headers: {
    name: "FUT Trade Enhancer",
    namespace: "http://tampermonkey.net/",
    version: "1.6.8",
    description: "FUT Trade Enhancer",
    author: "CK Algos",
    match: [
      "https://www.ea.com/*/fifa/ultimate-team/web-app/*",
      "https://www.ea.com/fifa/ultimate-team/web-app/*",
    ],
    require: [
      "https://code.jquery.com/jquery-3.6.1.min.js",
      "https://greasyfork.org/scripts/47911-font-awesome-all-js/code/Font-awesome%20AllJs.js?version=275337",
    ],
    grant: ["GM_xmlhttpRequest", "GM_download"],
    connect: [
      "ea.com",
      "ea2.com",
      "futwiz.com",
      "futbin.com",
      "futbin.org"
    ],
    updateURL:
      "https://github.com/omerkaratas/fut-trade-enhancer/releases/latest/download/fut-trade-enhancer.user.js",
    downloadURL:
      "https://github.com/omerkaratas/fut-trade-enhancer/releases/latest/download/fut-trade-enhancer.user.js",
  },
};
