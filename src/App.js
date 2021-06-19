import "@progress/kendo-theme-default/dist/all.css";

import "./App.css";
import { Label } from "@progress/kendo-react-labels";
import { Button } from "@progress/kendo-react-buttons";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import PatientDescription from "./components/PatientDescription/PatientDescription";
import GradientButton from "./components/GradientButtons/GradientButton";
import SamplePanel from "./components/SamplePanel/SamplePanel";
import IcdCard from "./components/IcdCard/IcdCard";
import axios from "axios";

function App() {
  const [description, setDescription] = useState("");
  const [syncons, setSyncons] = useState({});
  const [knldge, setKnldge] = useState({});

  useEffect(() => {
    db.collection("text")
      .doc("DJY30QkTDtgLHA2vo1J3")
      .onSnapshot((snapshot) => {
        setDescription(snapshot.data().current);
      });
    console.log("Description: ", description);
  });

  const getSyncons = () => {
    axios({
      method: "post",
      url: "https://nlapi.expert.ai/v2/analyze/standard/en/relevants",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "Bearer eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IkFFIiwic3ViIjoiZTMxMjAyMmEtNzI4MC00ZGJmLWFlYmUtOGFiNDNjZWQ5NzQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlMzEyMDIyYS03MjgwLTRkYmYtYWViZS04YWI0M2NlZDk3NDciLCJjdXN0b206Y29tcGFueSI6IlN0",
      },
      data: {
        document: {
          text: description,
        },
      },
    }).then(function (response) {
      setSyncons(response.data.data.mainSyncons);
      setKnldge(response.data.data.knowledge);
      console.log(response);
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

  return (
    <div className="App">
      <div className="main__container">
        <div className="top__container">
          <div className="left__side">
            <PatientDescription />
            <h3
              style={{
                fontSize: "25px",
                textAlign: "left",
                marginLeft: "15vw",
                fontFamily: "Arvo",
              }}
            >
              Medical Code Options
            </h3>
            <div className="coding__btns">
              <GradientButton
                buttonClassName="icd__btn"
                color="#8865ff"
                textColor="#ffffff"
                text="ICD-10"
              />
              <GradientButton
                buttonClassName="hcpcs__btn"
                color="#8865ff"
                textColor="#ffffff"
                text="HCPCS"
              />
              <div onClick={() => getSyncons()}>
                <GradientButton
                  buttonClassName="sycons__btn"
                  color="#22B573"
                  textColor="#ffffff"
                  text="Get Codes"
                />
              </div>
              <div>
                <GradientButton
                  buttonClassName="clear__btn"
                  color="#B8061A"
                  textColor="#ffffff"
                  text="Clear"
                />
              </div>
            </div>
          </div>

          <div className="right__side">
            <div className="icd__codes">
              <Button
                style={{ width: "10vw", backgroundColor: "#F83C5B" }}
                className="desc__button"
              >
                <Label>{"Results"}</Label>
              </Button>
              <br></br>
              <div>{JSON.stringify(knldge)}</div>
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
