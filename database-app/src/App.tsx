import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(
      "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
    )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //@ts-ignore
  return (
    <div>
      {/*@ts-ignore */}
      <Table data={data} />
    </div>
  );
}

export default App;
