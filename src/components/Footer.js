import React, { useState } from "react";
import github from '../assets/GitHub_Logo_White.png'
import linkedIn from '../assets/LinkedIn-white.png'

const styles = {
    footerStyles: {
        background: 'black',
        height: 60,
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },

    imgStyles: {
        height: 30,
        paddingInline: 20
    }
}

function Footer() {
return (
    <div style={styles.footerStyles} className="d-flex justify-content-center align-items-center">
        <a href="https://www.linkedin.com/in/josh-augsburger/" target={'_blank'}><img src={linkedIn} style={styles.imgStyles}></img></a>
        <a href="https://github.com/jaugsbu2" target={'_blank'}><img src={github}style={styles.imgStyles}></img></a>
    </div>
)
}

export default Footer