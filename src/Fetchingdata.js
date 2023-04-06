import React from 'react'
import { useEffect, useState } from "react";
import Axios from "axios";
import Text from "./Text";

export default function Fetchingdata() {

  const [name, setName] = useState("");
  const [predictAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedAge(res.data);
    });
  };
  
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)}/>
      <button onClick={fetchData}> Predict Age </button>

      <h1> Name:  {predictAge?.name}</h1>
      <h1> Predicted Age:  {predictAge?.age}</h1>
      <h1> Count:  {predictAge?.count}</h1>
    </div>
  )
}
