import React from 'react';
import './SampleTile.css';
import { motion } from "framer-motion";
import { db } from '../../firebase';


const SampleTile = ({ cover, currText }) => {

    const updateSample = () => {
        db.collection('text')
        .doc('DJY30QkTDtgLHA2vo1J3')
        .update({
            current: currText
        });
    }
    
    return (  
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1, cursor: 'pointer' }} className="sample__tile" onClick={() => updateSample()}>
            <h1>{cover}</h1>
        </motion.div>
    );
}

export default SampleTile;