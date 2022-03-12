const sendEvent = (eventKey, data, done) => {
    const trackingCode = "l3vb0m7r";
    const visitorCode = Math.floor(Math.random() * 100000000 + 1);
    const sessionCode = Math.floor(Math.random() * 100000000 + 1);
    const hitCode = Math.floor(Math.random() * 100000000 + 1);
    const domain = "www.hellosmpl.com";
    const getServiceUrl = (path, params) => {
      return (
        "https://hit.8digits.com/" +
        path +
        "?trackingCode=" +
        trackingCode +
        "&visitorCode=" +
        visitorCode +
        "&sessionCode=" +
        sessionCode +
        "&domain=" +
        domain +
        "&hitCode=" +
        hitCode +
        "&path=&rnd=&" +
        Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&")
      );
    };
    const createImage = (source, onload) => {
      const image = new Image();
      image.src = source;
      image.onload = onload;
    };
    const hitUrl = getServiceUrl("hit", {
      obj: ""
    });
    const attrUrl = getServiceUrl("setattrs", {
      obj: encodeURIComponent(JSON.stringify(data)),
    });
    const eventUrl = getServiceUrl("event", {
      key: eventKey,
      value: ""
    });
    createImage(hitUrl, () =>
      createImage(attrUrl, () => createImage(eventUrl, done))
    );
  };