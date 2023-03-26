import React from 'react';
import ContactForm from '../ContactForm'
const styles = {
  header: {
    paddingLeft: 40,
    paddingBottom: 40,
    paddingTop:20,
  },
  extend: {
    paddingBottom: 80,
  }
}

export default function Contact() {
  return (
    <div style={styles.extend}>
      <h1 style={styles.header}>Let's Talk!</h1>
      <ContactForm/>
    </div>
  );
}
