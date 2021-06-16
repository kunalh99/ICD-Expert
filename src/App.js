import '@progress/kendo-theme-default/dist/all.css';

import './App.css';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
// import React, { useState, useEffect } from 'react';
// import {db} from './firebase';
import PatientDescription from './components/PatientDescription/PatientDescription';
import GradientButton from './components/GradientButtons/GradientButton';
import SamplePanel from './components/SamplePanel/SamplePanel';
import IcdCard from './components/IcdCard/IcdCard';
// import axios from 'axios';
const https = require("https");

function App() {
  // const [description, setDescription] = useState('');
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
  const getData = () => {
    const data = JSON.stringify({
      "document": {
        "text": "At first there was considerable trouble about getting the machine up in the air and the engine well up to speed. They did this by running along a single-rail track perhaps 200 feet long. It was also, in the early experiments, found advisable to run against the wind, because they could then have a greater time to practice in the air and not get so far away from the building where it was stored. Since they can come around to the starting-point, however, they can start with the wind even behind them; and with a strong wind behind it is an easy matter to make even more than a mile a minute. The operator takes his place lying flat on his face. This position offers less resistance to the wind. The engine is started and got up to speed. The machine is held until ready to start by a sort of trap to be sprung when all is ready; then with a tremendous flapping and snapping of the four-cylinder engine, the huge machine springs aloft. When it first turned that circle, and came near the starting-point. I was right in front it; and I said then, and I believe still, it was one of the grandest sights, if not the grandest sight, of my life. Imagine a locomotive that has left its track, and is climbing up in the air right toward you—a locomotive without any wheels, we will say, but with white wings instead, we will further say-a locomotive made of aluminum. Well, now, imagine this white locomotive, with wings that spread 20 feet each way, coming right toward you with a tremendous flap of its propellers, and you will have something like what I saw. The younger brother bade me move to one side for fear it might come down suddenly; but I tell you, friends, the sensation that one feels in such a crisis is something hard to describe. The attendant at one time, when the rope came off that started it, said he was shaking from head to foot as if he had a fit of ague. His shaking was uncalled for, however, for the intrepid manager succeeded in righting up his craft, and she made one of her very best flights. I may add, however, that the apparatus is secured by patents, both in this and in foreign countries; and as nobody else has as yet succeeded in doing any thing like what they have done I hope no millionaire or syndicate will try to rob them of the invention or laurels they have so fairly and honestly earned.  When Columbus discovered America he did not know what the outcome would be, and no one at that time knew; and I doubt if the wildest enthusiast caught a glimpse of what really did come from his discovery. In a like manner these two brothers have probably not even a faint glimpse of what their discovery is going to bring to the children of men. No one living can give a guess of what is coming along this line, much better than any one living could conjecture the final outcome of Columbus'\'' experiment when lie pushed off through the trackless waters. Possibly we may be able to fly over the north pole, even if we should not succeed in tacking the \"stars and stripes\" to its uppermost end."
      }});
    const options = {
      hostname: 'https://nlapi.expert.ai',
      port: 443,
      path: '/v2/analyze/standard/en/relevants',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        "Authorization": eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IkFFIiwic3ViIjoiZTMxMjAyMmEtNzI4MC00ZGJmLWFlYmUtOGFiNDNjZWQ5NzQ3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJlMzEyMDIyYS03MjgwLTRkYmYtYWViZS04YWI0M2NlZDk3NDciLCJjdXN0b206Y29tcGFueSI6IlN0dWRlbnQiLCJhdWQiOiIxZWdzNjNxOTlwM3NlYmVjaHNiNzI5dDgwbyIsImV2ZW50X2lkIjoiM2U4NDIyNmUtZDA2ZS00ZGIwLWJmMTgtOTg3ODAwZjBjNzY2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjM2MDA4MzksIm5hbWUiOiJBZGl0aHlhIiwiZXhwIjoxNjIzNjg3MjM5LCJpYXQiOjE2MjM2MDA4MzksImZhbWlseV9uYW1lIjoiUHJhdmVlbiIsImVtYWlsIjoiZjIwMTcwMTk5QGR1YmFpLmJpdHMtcGlsYW5pLmFjLmluIiwiY3VzdG9tOm1hcmtldGluZ0F1dGgiOiIwIn0.KHolcGb__8oIudy9oDOlMT7Eg-r1kHMkh41kTeUsEIoAg50eKzUyGZH-xWpq_1fRWx9lOlCzlB72Pu8oquaGXsXoDIyHn4PSHHOv_fpeurvX5-iwfzDZWOON2CJtvVz_Zwr1Wt6i6YnThkHLLCR36bM1XySHhVOzxiSmUd3UNTieqOouwCDGU5ACy9fXTToaXHRrwM3rXQTkmGW3VnCa7zGeEnPYUAbS3zyErltCefDXHsNrP1JKEv3K-L1y3twOX-9hLl2yWm-pRQNaGxi-BPtrK1Cdo0UgLYOI7qPLLn98Rmpg-iw2d5jhbW8uuTyov7eV9TBCs-cDzOZXPrIqWw,
        'Content-Length': data.length
      }
    }
    const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
      })
    })
    
    req.on('error', error => {
      console.error(error)
    })
    
    req.write(data)
    req.end()
    // console.log("Dhruv Daddy Dom");
  }
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
              
              <div className="generate_btn" onClick= {() => getData()}>
              <GradientButton  buttonClassName="generate" color="#8865ff" textColor="#ffffff" text="Generate Report"/>
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
              <IcdCard code="A07" />
              <IcdCard code="G05" />
              <IcdCard code="H84" />
              <IcdCard code="D85" />
              <IcdCard code="Z15" />
              <IcdCard code="V21" />
              <IcdCard code="C32" />
              <IcdCard code="E06" />
            </div>
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
