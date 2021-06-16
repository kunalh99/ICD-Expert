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

  useEffect(() => {
      db.collection('text')
      .doc('DJY30QkTDtgLHA2vo1J3')
      .onSnapshot((snapshot) => {
          setDescription(snapshot.data().current)
      });
      console.log("Description: ", description);
  });

  const getSyncons = () => {
    axios({
      method: 'post',
      url: 'https://nlapi.expert.ai/v2/analyze/standard/en/relevants',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IkFFIiwic3ViIjoiZTMxMjAyMmEtNzI4MC00ZGJmLWFlYmUtOGFiNDNjZWQ5NzQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlMzEyMDIyYS03MjgwLTRkYmYtYWViZS04YWI0M2NlZDk3NDciLCJjdXN0b206Y29tcGFueSI6IlN0dWRlbnQiLCJhdWQiOiIxZWdzNjNxOTlwM3NlYmVjaHNiNzI5dDgwbyIsImV2ZW50X2lkIjoiZmQzOWIwZWYtN2FkMC00MjQ5LWIzZDgtYjFmM2UxYzUwYTAzIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjM3ODAzMDIsIm5hbWUiOiJBZGl0aHlhIiwiZXhwIjoxNjIzODY2NzAyLCJpYXQiOjE2MjM3ODAzMDIsImZhbWlseV9uYW1lIjoiUHJhdmVlbiIsImVtYWlsIjoiZjIwMTcwMTk5QGR1YmFpLmJpdHMtcGlsYW5pLmFjLmluIiwiY3VzdG9tOm1hcmtldGluZ0F1dGgiOiIwIn0.ccni516VsHXDmpEhQTlP63i6YgcSyvaVH8IrzivVCOGEud6tiWg4hcLNqD1__QcI_VE1vzGzdZW_ja6RhoTwKuavEuR-fBB1SdHpnalI7bO_cYj7FWesyupLPZdlXp8zYcAiPxEniBmcC2gX384vJ7JdpASKOJYQgOEA-vuDbf0uyU7Mjkx88BBDuJjnyN7VpIAJI2vAaL5g1VhSoRn7QqEfq3KubRaeLiwIfJtoWk4Zr3j2shhMd9FpwHgCvzjcS7fRyfRnvlDl2IhkqK8rkM3xxDnhfZ3wKk-vHe2PMRqyPNrrJyAXCllxEAozx4rq0RdHD3DNALdlNIh8gGrNxw'
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
      console.log(response);
    });
  }

  return (
    <div className="App">
      <div className="main__container">
        <div className="top__container">
          <div className="left__side">
            <PatientDescription />
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
