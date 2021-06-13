import './App.css';
import PatientDescription from './components/PatientDescription/PatientDescription';
import GradientButton from './components/GradientButtons/GradientButton';
import SamplePanel from './components/SamplePanel/SamplePanel';

function App() {
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
