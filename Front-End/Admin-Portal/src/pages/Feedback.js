import React from 'react';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

const Feedback = () => {

    const isSignin = useSelector((state) => state.isSignin);
    const history = useHistory();

    useEffect(() => {
        console.log(`Feedbacks got loaded`)
        
      }, [])

return(
    <h1 align="center">Page Under Construction</h1>
);
}

export default Feedback