import React, { useState, useEffect } from 'react';
import { Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { db } from '../../firebase';
import './PatientDescription.css';

const PatientDescription = ({ positions }) => {
    console.log(positions);
    const [description, setDescription] = useState('');

    useEffect(() => {
        db.collection('text')
        .doc('DJY30QkTDtgLHA2vo1J3')
        .onSnapshot((snapshot) => {
            setDescription(snapshot.data().current)
        });
    }, []);

    function highlightWords(pos) {
        var desCopy = description;
        pos.forEach(item => {
            var subs = `<span class='highlight__text'>${desCopy.substring(item[0], item[1] + 1)}</span>`
            setDescription(desCopy.substring(0, item[0]) + subs + desCopy.substring(item[1]));
        });
    }

    return (
        <div className="textarea__component">
            {/* {
                highlightWords(positions)
            } */}
            <Button className="desc__button">
                <Label>
                    {'Patient Medical Description'}
                </Label>
            </Button>
            <textarea name='medicalDescription' id='medicalDescription' cols="30" rows="12" value={description} onChange={(e) => {
                positions=[];
                setDescription(e.target.value)
            }}>

            </textarea>
        </div>
    );
}

export default PatientDescription;