import React from 'react';
import './IcdCard.css';
import { motion } from 'framer-motion';
import { CardHeader } from '@progress/kendo-react-layout';

const IcdCard = ({code}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }} 
            className="icd__card"
        >
            <CardHeader style={{backgroundColor: '#ff6fa5', borderRadius: '5px'}} className="icd__cardheader">
                {code}
            </CardHeader>
            <motion.div 
                    // onClick={() => deleteHabitWrapper(habit)} 
                    // className="delete__icon" 
                    onTap={{scale: 0.9}} 
                    whileHover={{ scale: 1.5 }} 
                    className="icd__card-delete" 
                    style={{ 
                        backgroundColor:"#c5221d", 
                        width: "20px", 
                        borderRadius: "5px", 
                        textAlign: "center", 
                        padding: "5px 10px 5px 10px"
                    }}
                >
                    <span 
                        style={{ color: "white", cursor: "pointer"}} 
                        className="k-icon k-i-delete"
                    ></span>
                </motion.div>
        </motion.div>
    );
}

export default IcdCard;