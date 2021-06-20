import "@progress/kendo-theme-default/dist/all.css";

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
  const [description, setDescription] = useState("");
  const [syncons, setSyncons] = useState({});
  const [knldge, setKnldge] = useState({});
  const [positions, setPositions] = useState([]);
  const [isCodeFetched, setisCodeFetched] = useState(false);
  const [cards, setCards] = useState([]);
  const [tab, setTab] = useState([]);
  var today = new Date().toDateString();
  // console.log(today);
  const apiURL = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=';

  useEffect(() => {
    db.collection("text")
      .doc("DJY30QkTDtgLHA2vo1J3")
      .onSnapshot((snapshot) => {
        setDescription(snapshot.data().current);
      });
  }, [description]);

  var tpToken = 'eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IkFFIiwic3ViIjoiZTMxMjAyMmEtNzI4MC00ZGJmLWFlYmUtOGFiNDNjZWQ5NzQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlMzEyMDIyYS03MjgwLTRkYmYtYWViZS04YWI0M2NlZDk3NDciLCJjdXN0b206Y29tcGFueSI6IlN0dWRlbnQiLCJhdWQiOiIxZWdzNjNxOTlwM3NlYmVjaHNiNzI5dDgwbyIsImV2ZW50X2lkIjoiNmQzYjExNGQtMWQ5MS00NzJmLTg0ODctNDY0NTZlMGNiMTljIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjQxMDk0NTMsIm5hbWUiOiJBZGl0aHlhIiwiZXhwIjoxNjI0MTk1ODUzLCJpYXQiOjE2MjQxMDk0NTMsImZhbWlseV9uYW1lIjoiUHJhdmVlbiIsImVtYWlsIjoiZjIwMTcwMTk5QGR1YmFpLmJpdHMtcGlsYW5pLmFjLmluIiwiY3VzdG9tOm1hcmtldGluZ0F1dGgiOiIwIn0.iKsUvjqc7L--nKTGOot3mHo6KM7JTeMELXEHYtZx7GM8Yukq8fhxGNv5Usy89sY7OKxFsE1YZHW_OKGj4r_POEFBJNYXSA2MqPLhZke5-J8Kx0lF1dalLkoWyqpV7t47FFqrIBIPWcG_fVIQX8F2E5qGrHWSBzbw10hXqllz9ADo5_X5uE29O9YZizY1diMhONZCFMl_5OlwhjDlPk-8TJOVryZtcVSLGebNm_ggcfPiFGmhQRVsJ057BIExO68Wbao52SLMtOPPBBS6gdGzUqEH5PFFMy_vfrtfgEWYeMKizAREpGUEuGj4QmKpN5APi0YbiEKtnRXgpMoM7l4l9w';

  const getSyncons = () => {
    setisCodeFetched(true);
    axios({
      method: "post",
      url: "https://nlapi.expert.ai/v2/analyze/standard/en/relevants",
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
      // console.log(response)
      getIDs(response.data.data.knowledge, response.data.data.mainSyncons);
    });
  };

  const getID = () => {
    const labelSet = new Set(
      "disease.pathological_process",
      "process.biological_process",
      "illness.disease"
    );
    const synconID = new Set();
    for (let i = 0; i < knldge.length; i++) {
      if (labelSet.has(knldge[i].label)) {
        synconID.add(knldge[i].syncon);
      }
    }

    return synconID;
  };

  const getPositions = () => {
    let synconID = getID();
    let positions = [];
    for (let i = 0; i < syncons.length; i++) {
      if (synconID.has(syncons[i].syncon)) {
        positions.push(syncons[i].positions);
      }
    }
    console.log(positions);
  };
  
  const highlightText = () => {
    let positions = getPositions();
    for (let i = 0; i < positions.length; i++){
      let currWord = description.substring(positions[i].start,positions[i].end);
      description.replace(currWord, "<span class='highlight'>" + currWord + "</span>");
    }
  }

  function deleteDisease(id) {
    // console.log("Final delete function!")
    setCards((prevCards) => {
      // console.log(prevCards);
      return prevCards.filter(
        (i) => {
          // console.log(i);
          return i.props.id !== id;
        }
      );
    })
  }

  async function getIDs(respK, respS) {
    const diseaseLabels = new Set(['illness.disease', 'disease.pathological_process', 'process.biological_process']);
    var synconLabelDict = {};

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
    let tempRows = [];
    for(let i = 0; i < pos.length; i++) {
      let ailment = description.substring(pos[i][0], pos[i][1]);
      let result = await axios.get(apiURL + ailment)
        .then(response => { return response.data[1][0] } )
      codes.push([result, ailment])
    }
    setisCodeFetched(false);

    for(let i = 0; i < codes.length; i++) {
      tempCards.push(<IcdCard onDelete={deleteDisease} id={i} code={codes[i][0]} ailment={codes[i][1]} />)
      tempRows.push(<tr style={{borderBottom: "2px solid black"}}><td>{codes[i][0]}</td><td style={{textAlign: "center"}}>{codes[i][1]}</td></tr>);
    }

    setCards(tempCards);
    setTab(tempRows);

    // console.log("Codes: ")
    // console.log(codes)
    // console.log("Cards: ")
    // console.log(cards)
  }
  
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithMethod = () => {
      let element = container.current || document.body;
      savePDF(element, {
          paperSize: "auto",
          margin: 40,
          fileName: `ICD Codes, Date: ${today}`,
      });
  };

  function LoadOrNah() {
    if(!isCodeFetched) {
      return (
        <div className="App">
          <div className="main__container">
            <div className="top__container">
              <div className="left__side">
                <PatientDescription />
                <h3 style={{ fontSize: "25px", textAlign: "left", marginLeft: "15vw", fontFamily: "Arvo"}}>Medical Code Options</h3>
                <div className="coding__btns">
                  <div onClick={() => getSyncons()}>
                    <GradientButton buttonClassName="sycons__btn" color="#22B573" textColor="#ffffff" text="Get Codes"/>
                  </div>
                  <div>
                    <GradientButton buttonClassName="clear__btn" color="#B8061A" textColor="#ffffff" text="Clear"/>
                  </div>
                </div>
              </div>

              <PDFExport
                    ref={pdfExportComponent}
                    paperSize="auto"
                    margin={40}
                    fileName={`ICD Codes, Date: ${today}`}
                
                >
                <div className="hidden__table" ref={container}>
                  <h1 style={{fontFamily: 'Arvo'}} >{`ICD Codes, Date: ${today}`}</h1>
                  <table style={{width: "500px", border: "2px solid black", cellPadding: "20px", borderCollapse:"collapse"}}>
                    <tbody>
                      <tr style={{fontWeight: "bold", fontSize: "20px"}}><td>{"ICD-10 Codes"}</td><td style={{textAlign: "center"}}>{"Disease Description"}</td></tr>
                      {
                        tab
                      }
                    </tbody>
                  </table>
                </div>
              </PDFExport>
              
              <div className="right__side">
                  <div className="icd__codes"> 
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
              </div>
            </div>
            
            <div className="coding__btns" onClick={() => exportPDFWithMethod()} style={{position: "fixed", right: "10px", bottom: "130px"}}>
              <GradientButton buttonClassName="export__btn" color="#22B573" textColor="#ffffff" text="Export ICD Codes (PDF)"/>
            </div>

    
            <div className="bottom__container">
              <SamplePanel />
            </div>
          </div>
        </div>
      );
    }

    else {
      return <LoadingScreen type='bars' color='#aaafff' />;
    }
  }

  

  return ( <LoadOrNah/> );
}

export default App;
