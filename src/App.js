import '@progress/kendo-theme-default/dist/all.css';

import './App.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import React, { useState, useEffect } from 'react';
import {db} from './firebase';
import PatientDescription from './components/PatientDescription/PatientDescription';
import GradientButton from './components/GradientButtons/GradientButton';
import SamplePanel from './components/SamplePanel/SamplePanel';
import IcdCard from './components/IcdCard/IcdCard';
import axios from 'axios';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [description, setDescription] = useState('');
  const [syncons, setSyncons] = useState({});
  const [knldge, setKnldge] = useState({});
  const [positions, setPositions] = useState([]);
  const [isCodeFetched, setisCodeFetched] = useState(false);
  // const [codes, setCodes] = useState([]);
  // var cards = [];
  const [cards, setCards] = useState([]);
  const apiURL = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=';

  useEffect(() => {
      db.collection('text')
      .doc('DJY30QkTDtgLHA2vo1J3')
      .onSnapshot((snapshot) => {
          setDescription(snapshot.data().current)
      });
      // console.log("Description: ", description);
  }, [description]);

  var tpToken = 'eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IkFFIiwic3ViIjoiZTMxMjAyMmEtNzI4MC00ZGJmLWFlYmUtOGFiNDNjZWQ5NzQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlMzEyMDIyYS03MjgwLTRkYmYtYWViZS04YWI0M2NlZDk3NDciLCJjdXN0b206Y29tcGFueSI6IlN0dWRlbnQiLCJhdWQiOiIxZWdzNjNxOTlwM3NlYmVjaHNiNzI5dDgwbyIsImV2ZW50X2lkIjoiNmQzYjExNGQtMWQ5MS00NzJmLTg0ODctNDY0NTZlMGNiMTljIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjQxMDk0NTMsIm5hbWUiOiJBZGl0aHlhIiwiZXhwIjoxNjI0MTk1ODUzLCJpYXQiOjE2MjQxMDk0NTMsImZhbWlseV9uYW1lIjoiUHJhdmVlbiIsImVtYWlsIjoiZjIwMTcwMTk5QGR1YmFpLmJpdHMtcGlsYW5pLmFjLmluIiwiY3VzdG9tOm1hcmtldGluZ0F1dGgiOiIwIn0.iKsUvjqc7L--nKTGOot3mHo6KM7JTeMELXEHYtZx7GM8Yukq8fhxGNv5Usy89sY7OKxFsE1YZHW_OKGj4r_POEFBJNYXSA2MqPLhZke5-J8Kx0lF1dalLkoWyqpV7t47FFqrIBIPWcG_fVIQX8F2E5qGrHWSBzbw10hXqllz9ADo5_X5uE29O9YZizY1diMhONZCFMl_5OlwhjDlPk-8TJOVryZtcVSLGebNm_ggcfPiFGmhQRVsJ057BIExO68Wbao52SLMtOPPBBS6gdGzUqEH5PFFMy_vfrtfgEWYeMKizAREpGUEuGj4QmKpN5APi0YbiEKtnRXgpMoM7l4l9w';
  var ddToken = 'eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IklOIiwic3ViIjoiNWFjNjYwNTMtZDNmOC00ODZkLWJkNjYtYzY2NDdkNjc5NmZhIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiI1YWM2NjA1My1kM2Y4LTQ4NmQtYmQ2Ni1jNjY0N2Q2Nzk2ZmEiLCJjdXN0b206Y29tcGFueSI6Ik5BIiwiYXVkIjoiMWVnczYzcTk5cDNzZWJlY2hzYjcyOXQ4MG8iLCJldmVudF9pZCI6ImI1MTNhNGYyLWU0NTEtNDI4OC1iNjA4LTI4MDhlZjA2OGVmYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjI0MDE4ODAxLCJuYW1lIjoiRGhydXYiLCJleHAiOjE2MjQxMDUyMDEsImlhdCI6MTYyNDAxODgwMSwiZmFtaWx5X25hbWUiOiJEIiwiZW1haWwiOiJkaHJ1di5uYXZ5YTEyM0BnbWFpbC5jb20iLCJjdXN0b206bWFya2V0aW5nQXV0aCI6IjAifQ.Boq5qxYoG3IjyPSCE97Gl6iFXz9Tt_d2wo10-uj3lpbnhYKiJN24OnzMS96RqrWBqcNxtMyCSAsoutQTUouVTNWJ_P_yVZEHAVVPGInWolIfAYR-8x6Y7ur-ookoeLibKZ401vOqYR9sGccaq7zJmzCqjile2HTnb--3EJruwjJvw4ZXkhXl3cw4PZxl7H0jL8P4mPWxwosXWXBPpigtS6eL1iRnZFPmNQJkJ465rWIyCGTS9v1IS0lqe8nvq--omZIE7glnPDZBGnGFQZQCpv9k0_pSgG8R1wflWrvQ8VjQTbbZqcGejRKG6T8bClR6j1oxiMFsJpDrGr9ShNI2Jw';

  const getSyncons = () => {
    setisCodeFetched(true);
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
      console.log(response)
      setSyncons(response.data.data.mainSyncons);
      setKnldge(response.data.data.knowledge);
      getIDs(response.data.data.knowledge, response.data.data.mainSyncons);
      // getCodes();
    });
  }

  async function getIDs(respK, respS) {
    const diseaseLabels = new Set(['illness.disease', 'disease.pathological_process', 'process.biological_process']);
    var synconLabelDict = new Object();

    // console.log("NAWWWLEJJJJJ", knldge);
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
    let codes = [];
    let tempCards = [];
    // state: isCodeFetched = false
    for(let i = 0; i < pos.length; i++) {
      let ailment = description.substring(pos[i][0], pos[i][1]);
      let result = await axios.get(apiURL + ailment)
        .then(response => { return response.data[1][0] } )
      codes.push([result, ailment])
    }
    setisCodeFetched(false);

    for(let i = 0; i < codes.length; i++) {
      tempCards.push(<IcdCard id={i} code={codes[i][0]} ailment={codes[i][1]} />)
    }

    setCards(tempCards);

    console.log("Codes: ")
    console.log(codes)
    console.log("Cards: ")
    console.log(cards)
    
    // setPositions(pos);
    // console.log("Posishhh: ", pos);
  }
  
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithMethod = () => {
      let element = container.current || document.body;
      savePDF(element, {
          paperSize: "auto",
          margin: 40,
          fileName: `ICD Codes, Date: ${new Date().getFullYear()}`,
      });
  };

  function LoadOrNah() {
    if(!isCodeFetched) {
      return (
        <div className="App">
          <div className="main__container">
            <div className="top__container">
              <div className="left__side">
                <PatientDescription positions={positions} />
                <h3 style={{ fontSize: "25px", textAlign: "left", marginLeft: "15vw", fontFamily: "Arvo"}}>Medical Code Options</h3>
                <div className="coding__btns">
                  {/* <GradientButton buttonClassName="icd__btn" color="#8865ff" textColor="#ffffff" text="ICD-10"/>
                  <GradientButton buttonClassName="hcpcs__btn" color="#8865ff" textColor="#ffffff" text="HCPCS"/> */}
                  <div onClick={() => getSyncons()}>
                    <GradientButton buttonClassName="sycons__btn" color="#22B573" textColor="#ffffff" text="Get Codes"/>
                  </div>
                  <div>
                    <GradientButton buttonClassName="clear__btn" color="#B8061A" textColor="#ffffff" text="Clear"/>
                  </div>
                </div>
              </div>
              
              <div className="right__side">
                <PDFExport
                    ref={pdfExportComponent}
                    paperSize="auto"
                    margin={40}
                    fileName={`Your Habits for ${new Date().getFullYear()}`}
                >
                  <div className="icd__codes" ref={container}> 
                    <Button style={{width: '10vw', backgroundColor: '#F83C5B', marginBottom: '10px'}} className="desc__button">
                        <Label>
                            {'Results'}
                        </Label>
                    </Button>
                    <br></br>
                    <ul>
                      { cards }
                    </ul>
                  </div>
              </PDFExport>
              </div>
            </div>

            <div className="pdf__button">
              <Button className="pdf__button" style={{ position: 'fixed', right: '10px', height: '50px', width: '200px', marginLeft: '10px', borderRadius: '10px', color: 'white', backgroundColor: '#22B573'}} onClick={exportPDFWithMethod}>
                    Export ICD Codes (PDF)
              </Button>
            </div>

    
            <div className="bottom__container">
              <SamplePanel />
            </div>
          </div>
        </div>
      );
    }

    else {
      return <LoadingScreen type='cylon' color='#aaafff' />;
    }
  }

  

  return ( <LoadOrNah/> );
}

export default App;
