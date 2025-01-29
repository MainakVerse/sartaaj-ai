// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h2>SARTAAJ AI</h2>
      <p>&copy; <a href="https://github.com/Supernova-MV" target='_blank'>2025 Supernova</a>. All rights reserved.</p>
      
    </footer>
  );
};

const styles = {
  footer: {
    fontSize: '22px',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
  }  
};

export default Footer;