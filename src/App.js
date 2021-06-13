import './App.css';
// import React, { useState, useEffect } from 'react';
// import {db} from './firebase';
import PatientDescription from './components/PatientDescription/PatientDescription';
import GradientButton from './components/GradientButtons/GradientButton';
import SamplePanel from './components/SamplePanel/SamplePanel';
// import axios from 'axios';

function App() {
  const [description, setDescription] = useState('');
  // const [sycons, setSycons] = useState({});

  // useEffect(() => {
  //     db.collection('text')
  //     .doc('DJY30QkTDtgLHA2vo1J3')
  //     .onSnapshot((snapshot) => {
  //         setDescription(snapshot.data().current)
  //     });
  //     console.log("Description: ", description);
  // }, []);

  // const getSyncons = () => {
  //   const headers = {
  //     'Content-Type': 'application/json; charset=utf-8',
  //     'Authorization': 'eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IkFFIiwic3ViIjoiZTMxMjAyMmEtNzI4MC00ZGJmLWFlYmUtOGFiNDNjZWQ5NzQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlMzEyMDIyYS03MjgwLTRkYmYtYWViZS04YWI0M2NlZDk3NDciLCJjdXN0b206Y29tcGFueSI6IlN0dWRlbnQiLCJhdWQiOiIxZWdzNjNxOTlwM3NlYmVjaHNiNzI5dDgwbyIsImV2ZW50X2lkIjoiM2U4NDIyNmUtZDA2ZS00ZGIwLWJmMTgtOTg3ODAwZjBjNzY2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjM2MDA4MzksIm5hbWUiOiJBZGl0aHlhIiwiZXhwIjoxNjIzNjg3MjM5LCJpYXQiOjE2MjM2MDA4MzksImZhbWlseV9uYW1lIjoiUHJhdmVlbiIsImVtYWlsIjoiZjIwMTcwMTk5QGR1YmFpLmJpdHMtcGlsYW5pLmFjLmluIiwiY3VzdG9tOm1hcmtldGluZ0F1dGgiOiIwIn0.KHolcGb__8oIudy9oDOlMT7Eg-r1kHMkh41kTeUsEIoAg50eKzUyGZH-xWpq_1fRWx9lOlCzlB72Pu8oquaGXsXoDIyHn4PSHHOv_fpeurvX5-iwfzDZWOON2CJtvVz_Zwr1Wt6i6YnThkHLLCR36bM1XySHhVOzxiSmUd3UNTieqOouwCDGU5ACy9fXTToaXHRrwM3rXQTkmGW3VnCa7zGeEnPYUAbS3zyErltCefDXHsNrP1JKEv3K-L1y3twOX-9hLl2yWm-pRQNaGxi-BPtrK1Cdo0UgLYOI7qPLLn98Rmpg-iw2d5jhbW8uuTyov7eV9TBCs-cDzOZXPrIqWw'
  //   }
  //   const data = {
  //     "document": {
  //       "text" : description
  //     }
  //   }

  //   console.log("hello before response")

  //   axios.post('https://nlapi.expert.ai/v2/analyze/standard/en/relevants', {
  //     headers: headers,
  //     data: data
  //   }).then(function (response) {
  //     console.log("hello after response")
  //     console.log(response);
  //   });
  // }

  return (
    <div className="App">
      <div className="main__container">
        <div className="top__container">
          <div className="left__side">
            <PatientDescription />
            <h3 style={{ fontSize: "25px", textAlign: "left", marginLeft: "15vw", fontFamily: "Arvo"}}>Medical Code Options</h3>
            <div className="coding__btns">
              <GradientButton buttonClassName="icd__btn" color="#8865ff" textColor="#ffffff" text="Generate ICD-10"/>
              <GradientButton buttonClassName="hcpcs__btn" color="#8865ff" textColor="#ffffff" text="Generate HCPCS"/>
            </div>
          </div>
          
          <div className="right__side">
            <u><h1 style={{fontFamily: "Arvo"}} >Results</h1></u>
            {/* <div className="coding__btns">
              <GradientButton onClick={() => getSyncons()} buttonClassName="sycons__btn" color="#22B573" textColor="#ffffff" text="Get Codes"/>
            </div> */}
            {/* <PatientDescription />
            <PatientDescription /> */}
          </div>
        </div>

        <div className="bottom__container">
          <SamplePanel />
        </div>
      </div>
    </div>
  );
}

export default App;
