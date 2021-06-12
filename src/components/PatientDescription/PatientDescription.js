import React, { useState } from 'react';
import { TextArea } from '@progress/kendo-react-inputs';
import { Field, FieldWrapper, Form, FormElement } from '@progress/kendo-react-form';
import { Hint, Label } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import './PatientDescription.css';

const FormTextArea = fieldRenderProps => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        type,
        optional,
        max,
        value,
        ...others
    } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Button className="desc__button" disabled={true}>
                <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>
                    {label}
                </Label>
            </Button>
            <div className={'k-form-field-wrap'}>
                <TextArea value={value} valid={valid} type={type} id={id} disabled={disabled} rows={12} {...others} />
                <div className="textarea__hints">  
                    <div>
                        <Hint direction="end" className="hint__two" style={{ fontFamily: 'Arvo'}}></Hint>
                    </div>
                </div>
            </div>
        </FieldWrapper>
    );
};

const PatientDescription = () => {
    const [description, setDescription] = useState('');

    return (
        <div className="textarea__component">
            <Form
                initialValues={{medicalDescription: ''}}
                render={formRenderProps => <FormElement style={{
                }}>
                    <Field
                        id={'medicalDescription'}
                        name={'medicalDescription'}
                        label={'Patient Medical Description'}
                        value={description}
                        hint={'Hint: Patient Condition Description'}
                        component={FormTextArea}
                        onChange={() => setDescription(formRenderProps.valueGetter('medicalDescription'))}
                    />
                </FormElement>}
            />
        </div>
    );
}

export default PatientDescription;