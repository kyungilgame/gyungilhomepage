import { useEffect } from "react";

const NA_transition = ({}) => {
  useEffect(() => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//wcs.naver.net/wcslog.js";
    document.body.appendChild(script);

    let script2 = document.createElement("script");
    script.type = "text/javascript";
    script2.src = "NaverAanalytics_transition.js";
    document.body.appendChild(script2);
  }, []);
  return <></>;
};

export default NA_transition;
