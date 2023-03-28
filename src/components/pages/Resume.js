import React from 'react';

const downloadResume = () => {
  fetch('resume.pdf').then(response => {
    response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'josh-augsburger-resume.pdf';
      alink.click();
    })
  })
}

const styles = {
  button: {
    marginTop: 10,
    marginBottom: 30,
    width: 300,
  },
  header: {
    paddingLeft: 40,
    paddingBottom: 40,
    paddingTop:20,
  },
  extend: {
    paddingBottom: 80,
  }
}

export default function Resume() {
  return (
    <div className='d-flex flex-column' style={styles.extend}>
      <h1 style={styles.header}>Skills</h1>
      <button onClick={downloadResume} className="btn btn-light btn-large" style={styles.button}>Download Resume</button>
      <h4><u>
        Web Development
        </u>
      </h4>
      <h4>
        Front End
      </h4>
      <p>
        Javascript<br></br>
        HTML<br></br>
        CSS<br></br>
        JQuery<br></br>
        Bootstrap<br></br>
        Responsive Design<br></br>
        React<br></br>
      </p>
      <h4>
        Back End
      </h4>
      <p>
        API's<br></br>
        Express <br></br>
        Node Js<br></br>
        MySQL<br></br>
        MongoDB <br></br>
        Mongoose<br></br>
      </p>
    </div>
  );
}
