import React from 'react';
import '../styles/footer.css';

const Footer = () => {
	return (
		<footer className='main_footer'>
			<p>Designed and developed by me, Justin.  Copyright 2018 - {(new Date()).getFullYear()}.</p>
		</footer>
	);
};

export default Footer;