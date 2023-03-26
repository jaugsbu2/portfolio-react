import React, { useState } from "react";

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
        <a href="https://www.linkedin.com/in/josh-augsburger/" target={'_blank'}><img src="images/LinkedIn-white.png" style={styles.imgStyles}></img></a>
        <a href="https://github.com/jaugsbu2" target={'_blank'}><img src="images/GitHub_Logo_White.png"style={styles.imgStyles}></img></a>
    </div>
)
}

export default Footer