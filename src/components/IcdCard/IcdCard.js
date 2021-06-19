import React from 'react';
import './IcdCard.css';
import { motion } from 'framer-motion';
import { CardHeader } from '@progress/kendo-react-layout';
// {code, ailment, onDelete, id}
const IcdCard = (props) => {

    const handleDelete = () => {
        console.log("Handle delete invokeed")
        props.onDelete(props.id);
    }
    return (
        <motion.div
            whileHover={{ scale: 1.1 }} 
            className="icd__card"
        >
            <CardHeader style={{backgroundColor: '#ff6fa5', borderRadius: '5px'}} className="icd__cardheader">
                {props.code}
            </CardHeader>
            <CardHeader style={{backgroundColor: '#a38cff', borderRadius: '5px'}} className="icd__cardheader">
                {props.ailment}
            </CardHeader>
            <motion.div 
                    // onClick={() => deleteHabitWrapper(habit)}
                    // className="delete__icon" 
                    // onTap={{scale: 0.9}} 
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
                        onClick={handleDelete}
                    ></span>
                </motion.div>
        </motion.div>
    );
}

export default IcdCard;