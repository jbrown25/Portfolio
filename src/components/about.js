import React, {Component} from 'react';
import anime from 'animejs';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import justin from '../images/justin.jpg';
import seattle from '../images/seattle.jpeg';
import '../styles/about.css';

//number of samples to show on front page
const ABOUT_WORK_QUANT = 3;

class About extends Component {

	componentDidMount(){
		const about_timeline = anime.timeline();
		about_timeline
		.add({
			targets: this.intro,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			delay: 250,
			easing: 'easeOutQuad'		
		})
		.add({
			targets: this.intro_image,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		})
		.add({
			targets: this.work_samples,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		});
	}

	renderWorkSamples(){
		return this.props.portfolio_items.slice(0, ABOUT_WORK_QUANT).map((item) => {
			return <WorkSample key={item.id} item={item} />;
		});
	}

	render(){
		return (
			<section className='about'>
				<div className='intro_container'>
					<div className='intro' ref={el => this.intro = el}>
						<h1>Hi, I'm Justin.</h1>
						<p>I am a Seattle-based web developer who enjoys building things and tackling difficult problems.  I have worked on a wide variety of projects including mobile games with Unity3D, database driven web applications, single page applications, cloud deployments with AWS, WordPress sites, and static landing pages.</p>
						<p>I once won an AWS trivia night.  Well my team did anyway, but I helped.</p>
						<p>In my spare time I enjoy lifting weights, watching movies, and playing the violin.</p>
					</div>
					<div className='intro_img_container' ref={el => this.intro_image = el}>
						<img src={justin} alt='' />
					</div>
				</div>
				<div className='work_sample_container' ref={el => this.work_samples = el}>
					<h2>Here is some of my work</h2>
					<div className='work_sample_row'>
						{this.renderWorkSamples()}
					</div>
					<Link to='/portfolio' onClick={window.scrollTo(0, 0)} className='link_to_portfolio'>See more of my work</Link>
				</div>
				<div className='about_seattle' style={{backgroundImage: `url(${seattle})`}}>
					<div className='about_contact'>
						<p>Currently living and working in Seattle, WA.</p>
						<Link to='/contact' onClick={window.scrollTo(0, 0)} className='link_to_contact'>Contact me</Link>
					</div>
				</div>
			</section>
		);
	}
}

const WorkSample = (props) => {
	return (
		<div className='work_sample'>
			<img src={props.item.image} alt='' />
			<h3>{props.item.heading}</h3>
			<p>{props.item.short_description}</p>
		</div>
	);
};

function mapStateToProps(state){
	return {
		portfolio_items: state.portfolio_items
	};
}

export default withRouter(connect(mapStateToProps, null)(About));