import React, {Component} from 'react';
import anime from 'animejs';
import '../styles/contact.css';
import ContactForm from './contact_form';


export default class Contact extends Component {

	componentDidMount(){
		
		const contact_timeline = anime.timeline();
		contact_timeline
		.add({
			targets: this.address_container,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			delay: 250,
			easing: 'easeOutQuad'		
		})
		.add({
			targets: this.form_container,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		});
	}
	
	render(){
		return (
			<section className='contact'>
				<div className='contact_container'>
					<div className='address_container' ref={el => this.address_container = el}>
						<h1 ref={el => this.thingy = el}>Get in touch.</h1>
						<p>For inquiries regarding projects, jobs, or if you just need a hand with your homework.  Let me know how I can help!</p>
						<span className='contact_email'>Justin.Brown345@gmail.com</span><br />
						<span className='contact_phone'>(509) 531-1368</span>
						<address>
							Seattle, WA 98144
						</address>
					</div>
					<div className='form_container' ref={el => this.form_container = el}>
						<ContactForm />
					</div>
				</div>
			</section>
		);
	}	
}

