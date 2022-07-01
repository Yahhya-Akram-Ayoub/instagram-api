import React, { useEffect, useState } from "react";
import axios from "axios";

const Test1 = () => {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const userId = "500891128478070";
  const token =
    "EABPHtt9ixZB8BAL5h3GggZBWoxEFw2nfLd7x2fN4dJRibBeZAASkRcVTUPBI0xq73NyJ5I0xNWudgJuRgCbmUVPOUbXr4FT5tm8Ow2HwvOKuApGMuTKV2iT3kFOrSs60dzz5ApnET5cV6gUyB0wrBDtz1CLL5HEqidplplj5UKTtmChB91utinyP9ZC1LQCB2AZA79kVXsZCMlZCPAewU2o";
  const token2 = "74f15ffb4b8f63eef4901b99193b5043";
  useEffect(() => {
    const url = `https://graph.instagram.com/me?fields=id,username&access_token=${token}`;
    axios
      .get(
        `https://graph.facebook.com/v14.0/me?access_token=${token2}&debug=all&fields=id%2Cname&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors`
      )
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [0]);

  useEffect(() => {
    const url = `https://graph.instagram.com/${userId}?fields=id,username&access_token=${token}`;
    const url2 = `https://graph.instagram.com/me?access_token=${token}&debug=all&fields=id%2Cname&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors`;
    const url3 = `https://api.instagram.com/${userId}/media?fields=id,caption,media_type,media_url`;
    axios
      .get(url3)
      .then((res) => {
        console.log(res);
        setData2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [0]);

  return (
    <div className="InstagramApp">
      <h1>this is data from api</h1>
      {!!data &&
        Object.values(data).length > 0 &&
        typeof data === "object" &&
        Object.values(data).map((x, i) => <p key={i}>{x}</p>)}
      <h1>this is data from api2</h1>
      {!!data2 &&
        Object.values(data2).length > 0 &&
        typeof data2 === "object" &&
        Object.values(data2)?.map((x, i) => <p key={i}>{x}</p>)}
    </div>
  );
};

export { Test1 };
