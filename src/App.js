import '@progress/kendo-theme-default/dist/all.css';

import './App.css';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import React, { useState, useEffect } from 'react';
import {db} from './firebase';
import PatientDescription from './components/PatientDescription/PatientDescription';
import GradientButton from './components/GradientButtons/GradientButton';
import SamplePanel from './components/SamplePanel/SamplePanel';
import IcdCard from './components/IcdCard/IcdCard';
import axios from 'axios';

function App() {
  const [description, setDescription] = useState('');
  const [syncons, setSyncons] = useState({});
  const [knldge, setKnldge] = useState({});
  const [positions, setPositions] = useState([]);

  useEffect(() => {
      db.collection('text')
      .doc('DJY30QkTDtgLHA2vo1J3')
      .onSnapshot((snapshot) => {
          setDescription(snapshot.data().current)
      });
      console.log("Description: ", description);
  }, [positions, description]);

  var tpToken = 'eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IkFFIiwic3ViIjoiZTMxMjAyMmEtNzI4MC00ZGJmLWFlYmUtOGFiNDNjZWQ5NzQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlMzEyMDIyYS03MjgwLTRkYmYtYWViZS04YWI0M2NlZDk3NDciLCJjdXN0b206Y29tcGFueSI6IlN0dWRlbnQiLCJhdWQiOiIxZWdzNjNxOTlwM3NlYmVjaHNiNzI5dDgwbyIsImV2ZW50X2lkIjoiZjA3NGRlNzgtOWUxNi00NzcyLWIwMDctM2UxZDdhNjA4NjFiIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjM5NTA0ODEsIm5hbWUiOiJBZGl0aHlhIiwiZXhwIjoxNjI0MDM2ODgxLCJpYXQiOjE2MjM5NTA0ODEsImZhbWlseV9uYW1lIjoiUHJhdmVlbiIsImVtYWlsIjoiZjIwMTcwMTk5QGR1YmFpLmJpdHMtcGlsYW5pLmFjLmluIiwiY3VzdG9tOm1hcmtldGluZ0F1dGgiOiIwIn0.BBTOFyADjeLpCNeQkPxcweu-VcVvkSACKdXet3Wrk25pLCuSmWrYoMH-OKXlZMW-B3LhHz5JrPNCyd603XpKd6ItA02iqL-WZR_hxm5bc_DWhX9CzJwehZpqyIPxGptExx0T8hyTSX6sInO39QrAHgQvi2N-UtAIQSyD0QRNgVVHEf_9vXO_vU91C7K8F70bx7lS-JlH55clyO9_fCJcxZ1P7BDX1gYvMp938b0PlQHZmWrPOkW406W4gSZOTiwLwS4dhzDnK0ttacgAZefLsrZcoaBoH9gyVcnP5q7zpJFhon5LRAAksMxDeFm5T9D5i031CB9VDH1Oq669b7Y5TQ';

  const getSyncons = () => {
    axios({
      method: 'post',
      url: 'https://nlapi.expert.ai/v2/analyze/standard/en/relevants',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${tpToken}`
      },
      data: {
        document: {
          "text" : description
        }
      }
    })
    .then(function (response) {
      setSyncons(response.data.data.mainSyncons);
      setKnldge(response.data.data.knowledge);
      getIDs(response.data.data.knowledge, response.data.data.mainSyncons);
    });
  }

  function getIDs(respK, respS) {
    const diseaseLabels = new Set(['illness.disease', 'disease.pathological_process', 'process.biological_process']);
    var synconLabelDict = new Object();

    console.log("NAWWWLEJJJJJ", knldge);
    respK.forEach(item => {
      synconLabelDict[item["syncon"]] = item["label"];
    });

    var pos = [];
    respS.forEach(item => {
      if(diseaseLabels.has(synconLabelDict[item["syncon"]])) {
        item["positions"].forEach(posarr => {
          pos.push([posarr["start"], posarr["end"]]);
        })
      }
    });
    setPositions(pos);
    console.log("Posishhh: ", pos);
  }

  return (
    <div className="App">
      <div className="main__container">
        <div className="top__container">
          <div className="left__side">
            <PatientDescription positions={positions} />
            <h3 style={{ fontSize: "25px", textAlign: "left", marginLeft: "15vw", fontFamily: "Arvo"}}>Medical Code Options</h3>
            <div className="coding__btns">
              <GradientButton buttonClassName="icd__btn" color="#8865ff" textColor="#ffffff" text="ICD-10"/>
              <GradientButton buttonClassName="hcpcs__btn" color="#8865ff" textColor="#ffffff" text="HCPCS"/>
              <div onClick={() => getSyncons()}>
                <GradientButton buttonClassName="sycons__btn" color="#22B573" textColor="#ffffff" text="Get Codes"/>
              </div>
              <div>
                <GradientButton buttonClassName="clear__btn" color="#B8061A" textColor="#ffffff" text="Clear"/>
              </div>
            </div>
          </div>
          
          <div className="right__side">
            
            <div className="icd__codes">
              <Button style={{width: '10vw', backgroundColor: '#F83C5B'}} className="desc__button">
                  <Label>
                      {'Results'}
                  </Label>
              </Button>
              <br></br>
              <div>
                {
                  JSON.stringify(knldge)
                }
              </div>
              <IcdCard code="A07" />
              <IcdCard code="G05" />
              <IcdCard code="H84" />
              <IcdCard code="D85" />
              <IcdCard code="Z15" />
              <IcdCard code="V21" />
              <IcdCard code="C32" />
              <IcdCard code="E06" />
            </div>
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
