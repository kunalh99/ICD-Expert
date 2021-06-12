import React from 'react';
import './SampleTile.css';
import { motion } from "framer-motion";


const SampleTile = ({ cover }) => {
    return (  
        <motion.div whileHover={{ scale: 1.1, cursor: 'pointer' }} className="sample__tile">
            <h1>{cover}</h1>
        </motion.div>
    );
}

export default SampleTile;