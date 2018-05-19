import React, {Component} from 'react';
import anime from 'animejs';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import justin from '../images/justin.jpg';
import seattle from '../images/seattle.jpeg';
import '../styles/about.css';

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
		});
	}

	renderWorkSamples(){
		return this.props.portfolio_items.slice(0, 3).map((item) => {
			return <WorkSample key={item.id} item={item} />;
		});
	}

	render(){
		return (
			<section className='about'>
				<div className='intro_container'>
					<div className='intro' ref={el => this.intro = el}>
						<h1>Hi, I am Justin.</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur tempor velit ac venenatis. In maximus enim at ornare maximus. Ut sit amet ex iaculis lorem molestie tempus. In sed mauris scelerisque, convallis justo sed, tempor odio. Vivamus eget malesuada mauris. Suspendisse elementum, magna nec aliquam aliquam, quam dui hendrerit ligula, eget tincidunt velit tortor vel enim. Nullam quis ultrices enim, sit amet accumsan mi. Cras hendrerit urna sagittis justo consequat congue.</p>
					</div>
					<div className='intro_img_container' ref={el => this.intro_image = el}>
						<img src={justin} alt='' />
					</div>
				</div>
				<div className='work_sample_container'>
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