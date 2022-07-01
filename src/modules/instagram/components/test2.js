import React, { useEffect, useState } from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const Test2 = () => {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const userId = "500891128478070";
  const token =
    "EABPHtt9ixZB8BAL5h3GggZBWoxEFw2nfLd7x2fN4dJRibBeZAASkRcVTUPBI0xq73NyJ5I0xNWudgJuRgCbmUVPOUbXr4FT5tm8Ow2HwvOKuApGMuTKV2iT3kFOrSs60dzz5ApnET5cV6gUyB0wrBDtz1CLL5HEqidplplj5UKTtmChB91utinyP9ZC1LQCB2AZA79kVXsZCMlZCPAewU2o";
  const token2 = "74f15ffb4b8f63eef4901b99193b5043";
  const token3 = "111902068236160";

  return (
    <div className="InstagramApp">
      <InstagramFeed token={token3} counter="6" />
      <h1>--------------------</h1>
      <InstagramFeed token={token2} counter="6" />
    </div>
  );
};

export { Test2 };
