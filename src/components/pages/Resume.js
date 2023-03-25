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

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <button onClick={downloadResume}>Download Resume</button>
      <h2>
        Web Development Proficiencies
      </h2>
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
