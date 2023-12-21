import { useState, useEffect } from "react";
import axios from "axios";
import "./axios.css";

const Axios = () => {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    axios
      .get("https://stageapi.powerlook.in/rest/V1/verifyifsc/ifsc/GSCB0RJT142")
      .then((res) => {
        // console.log(res.data);
        setMyData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <h2>{error}</h2>
      <div className="container">
        <h1>Axios Tutorial</h1>

        {myData.map((post) => {
          return (
            <ul key={post} className="bank_details">
              <li>
                <span> Address:-</span> {post.Address}
              </li>
              <li>
                <span> Bank:-</span> {post.Bank}
              </li>
              <li>
                <span> Branch:-</span> {post.Branch}
              </li>
              <li>
                <span> District:-</span> {post.District}
              </li>
              <li>
                <span> State:-</span> {post.State}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Axios;
