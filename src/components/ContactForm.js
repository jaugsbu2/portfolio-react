import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import {send} from 'emailjs-com';

const styles = {
  textName: {
    width: 200,
    marginBottom: 30,
    marginTop: 30,
  },

    textEmail: {
    width: 300,
    marginBottom: 30,
  },
    textMessage: {
    width: 325,
    height: 200,
    marginBottom: 30,
  },
  button: {
    width: 200
  }

}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
      } else if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
        setErrorMessage('Please input your name')
        return;
    }
    else if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    else if (!message) {
        setErrorMessage('Please include a message')
        return;
    }
    else {
        send(
            'service_72siky5',
            'template_d2qf6qd',
            {name, email, message},
            '8m0b08PiWFpRl97I0'
        ).then((response) => {
            console.log("success", response.status, response.text)
            setErrorMessage('Email Sent Successfully!')
        }).catch((err) => {
            console.log("failed to send", err)
            setErrorMessage('Oops, message did not send correctly')
        })
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form className="d-flex flex-column">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
          style={styles.textName}

        ></input>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          style={styles.textEmail}

        ></input>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
                    style={styles.textMessage}
        ></input>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="button" onClick={handleFormSubmit} className="btn btn-light btn-large" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;