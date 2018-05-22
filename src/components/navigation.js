import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import anime from 'animejs';
import '../styles/navigation.css';

export default class Navigation extends Component {

	constructor(props){
		super(props);

		this.state = {
			navOpen: false,
			isAnimating: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState){
		return !nextState.isAnimating;
	}

	handleClick(){
		if(!this.state.isAnimating){
			this.state.navOpen ? this.animateToggleClose() : this.animateToggleOpen();
		}
	}

	animateToggleOpen(){
		document.body.classList.add('nav_open');
		this.setState({
			isAnimating: true,
			navOpen: true
		});
		setTimeout(() => {
			this.setState({isAnimating: false});
		}, 500);
		
		this.animateRadialOpen();
		const toggle_timeline = anime.timeline();
		toggle_timeline
		.add({
			targets: this.line_one,
			translateY: [0, 10.5],
			rotateZ: [0, '-135deg'],
			duration: 500,
			easing: 'easeOutElastic',
			offset: 0			
		})
		.add({
			targets: this.line_two,
			translateY: [0, 10.5],
			opacity: 0,
			duration: 500,
			offset: 0
		})
		.add({
			targets: this.line_three,
			translateY: [0, -10.5],
			rotateZ: [0, '-45deg'],
			duration: 500,
			easing: 'easeOutElastic',
			offset: 0
		});
	}

	animateToggleClose(){
		document.body.classList.remove('nav_open');
		this.setState({
			isAnimating: true,
			navOpen: false
		});
		setTimeout(() => {
			this.setState({isAnimating: false});
		}, 500);
		this.animateRadialClose();

		const toggle_timeline = anime.timeline();
		toggle_timeline
		.add({
			targets: this.line_one,
			translateY: [10.5, 0],
			rotateZ: ['-135deg', 0],
			duration: 500,
			easing: 'easeOutElastic',
			offset: 0
		})
		.add({
			targets: this.line_two,
			translateY: [10.5, 0],
			opacity: [0, 1],
			duration: 500,
			offset: 0
		})
		.add({
			targets: this.line_three,
			translateY: [-10.5, 0],
			rotateZ: ['-45deg', 0],
			duration: 500,
			easing: 'easeOutElastic',
			offset: 0
		});

		this.setState({navOpen: false});
	}

	animateRadialOpen(){
		const toggleRect = this.toggle.getBoundingClientRect();
		const windowWidth = window.innerWidth,
			  windowHeight = window.innerHeight,
			  maxSide = Math.max(windowWidth, windowHeight);

		const cornerSpace = Math.sqrt(Math.pow(windowWidth - toggleRect.left, 2) + Math.pow(toggleRect.bottom, 2));

		const radius = Math.sqrt(Math.pow(maxSide, 2) * 2) + cornerSpace * 2;
		const menuScaleRatio = radius / (Math.SQRT2 * 30); // root 2 * toggle width / 2.  Toggle width is 60, for now.

		const radial_timeline = anime.timeline();

		radial_timeline
		.add({
			targets: this.radial,
			scale: [1, menuScaleRatio],
			duration: 500,
			easing: 'easeOutQuad'			
		})
		.add({
			targets: this.menu_list.querySelectorAll('li'),
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 250,
			delay: (el, i, l) => {
				return (100 * i);
			},
			easing: 'easeOutQuad'
		});

	}

	animateRadialClose(){
		const toggleRect = this.toggle.getBoundingClientRect();
		const windowWidth = window.innerWidth,
			  windowHeight = window.innerHeight,
			  maxSide = Math.max(windowWidth, windowHeight);

		const cornerSpace = Math.sqrt(Math.pow(windowWidth - toggleRect.left, 2) + Math.pow(toggleRect.bottom, 2));

		const radius = Math.sqrt(Math.pow(maxSide, 2) * 2) + cornerSpace * 2;
		const menuScaleRatio = radius / (Math.SQRT2 * 30);

		const radial_timeline = anime.timeline();
		radial_timeline
		.add({
			targets: Array.prototype.slice.apply(this.menu_list.querySelectorAll('li')).reverse(),
			opacity: [1, 0],
			translateY: [0, 100],
			duration: 100,
			delay: (el, i, l) => {
				return (50 * i);
			},
			easing: 'easeOutQuad'
		})
		.add({
			targets: this.radial,
			scale: [menuScaleRatio, 1],
			duration: 50,
			easing: 'easeInQuad'			
		});
	}

	handleLinkClick(e){
		e.preventDefault();
		this.animateToggleClose();
	}



	render(){
		const {navOpen} = this.state;

		return (
			<div className='main_nav_container'>
				<nav className={`${navOpen ? 'main_nav nav_open' : 'main_nav'}`}>
					<ul className='mobile_menu' ref={el => this.menu_list = el}>
						<li onClick={this.handleLinkClick}><Link to='/'>About</Link></li>
						<li onClick={this.handleLinkClick}><Link to='/portfolio'>Portfolio</Link></li>
						<li onClick={this.handleLinkClick}><Link to='/resume'>Resum&#233;</Link></li>
						<li onClick={this.handleLinkClick}><Link to='/contact'>Contact</Link></li>
							<li>
								<ul className='mobile_social'>
									<li><a href='https://www.linkedin.com/in/justin-brown-96528982' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin'></i></a></li>
									<li><a href='https://github.com/jbrown25' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'></i></a></li>
								</ul>
							</li>
					</ul>
					<ul className='desktop_menu'>
						<li><Link to='/portfolio'>Portfolio</Link></li>
						<li><Link to='/resume'>Resum&#233;</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><a href='https://www.linkedin.com/in/justin-brown-96528982' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin'></i></a></li>
						<li><a href='https://github.com/jbrown25' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'></i></a></li>
					</ul>
				</nav>
				<button className='nav_toggle' onClick={this.handleClick} ref={el => this.toggle = el}>
					<span className='nav_burger'>
						<span className='line' ref={el => this.line_one = el}></span>
						<span className='line' ref={el => this.line_two = el}></span>
						<span className='line' ref={el => this.line_three = el}></span>
					</span>
				</button>
				<span className='radial' ref={el => this.radial = el}></span>
			</div>
		);
	}
}