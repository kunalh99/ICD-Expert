import React, { useState, useEffect } from 'react';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { db } from '../../firebase';
import './PatientDescription.css';

const PatientDescription = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        db.collection('text')
        .doc('DJY30QkTDtgLHA2vo1J3')
        .onSnapshot((snapshot) => {
            setDescription(snapshot.data().current)
        });

        console.log(description);
    });

    return (
        <div className="textarea__component">
            <Button className="desc__button" disabled={true}>
                <Label>
                    {'Patient Medical Description'}
                </Label>
            </Button>
            <textarea name='medicalDescription' id='medicalDescription' cols="30" rows="12" value={description}>

            </textarea>
        </div>
    );
}

export default PatientDescription;