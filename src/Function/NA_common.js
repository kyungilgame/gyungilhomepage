import { useEffect } from "react";

const NA_common = ({}) => {
  useEffect(() => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//wcs.naver.net/wcslog.js";
    document.body.appendChild(script);

    let script2 = document.createElement("script");
    script.type = "text/javascript";
    script2.src = "NaverAanalytics_common.js";
    document.body.appendChild(script2);
  }, []);
  return <></>;
};

export default NA_common;
