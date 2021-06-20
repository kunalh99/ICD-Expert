import React from 'react';
import ReactLoading from 'react-loading';
import './LoadingScreen.css'

const LoadingScreen = ({ type, color }) => (
    <ReactLoading className='tatte' type={type} color={color} height={'20%'} width={'20%'} />
);

export default LoadingScreen;