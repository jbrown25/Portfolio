import React from 'react';
import Navigation from './navigation';
import {Link} from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
	return (
		<header className='main_header'>
			<div className='top_bar'>
				<Link to='/'><h1>Justin A. Brown</h1></Link>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;