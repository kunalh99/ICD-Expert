import React from 'react';
import './SamplePanel.css';
import SampleTile from '../SampleTile/SampleTile';

const SamplePanel = () => {
    return ( 
        <div className="sample__panel">
            <SampleTile cover={"1"} />
            <SampleTile cover={"2"} />
            <SampleTile cover={"3"} />
            <SampleTile cover={"4"} />
            <SampleTile cover={"5"} />
        </div>
    );
}

export default SamplePanel;