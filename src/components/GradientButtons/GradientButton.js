import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import './GradientButton.css';

const GradientButton = ({ buttonClassName, color, text, textColor }) => {
    return (
        <Button
            style={{ 
                backgroundColor: `${color}`, 
                color:`${textColor}`,
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                margin: "10px",
                fontFamily: "Arvo",
            }}
        >
            {text}
        </Button>
    );
}

export default GradientButton;