import React from 'react';

const downloadResume = () => {
  fetch('resume.pdf').then(response => {
    response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'resume.pdf';
      alink.click();
    })
  })
}

const styles = {
  button: {
    marginTop: 10,
    marginBottom: 30,
    width: 300,
  }
}

export default function Resume() {
  return (
    <div className='d-flex flex-column'>
      {/* <h1>Resume</h1> */}
      <button onClick={downloadResume} className="btn btn-light btn-large" style={styles.button}>Download Resume</button>
      <h3><u>
        Web Development Proficiencies
        </u>
      </h3>
      <h3>
        Front End
      </h3>
      <p>
        Javascript<br></br>
        HTML<br></br>
        CSS<br></br>
        JQuery<br></br>
        Bootstrap<br></br>
        Responsive Design<br></br>
        React<br></br>
      </p>
      <h3>
        Back End
      </h3>
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
