import React, { useEffect, useState } from "react";
import MyProfile from "./myProfile";
import ParseData from "./parseData";

function OrgChartApp() {

  var apiUrl = 'https://d20e-49-37-174-31.in.ngrok.io/hierarchy'
  var [data,setdata] = useState(null);
  useEffect(() => {
      fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
          setdata(json)
      })
    },[]);
  var parsedData = ParseData(data)

  return (
    <div>
      <div id="tree" >
        {data &&
        (<MyProfile
          nodes = {parsedData}
        />)}
      </div>
    </div>
    
  );
}

export default OrgChartApp;
