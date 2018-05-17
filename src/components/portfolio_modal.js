import React, {Component} from 'react';
import '../styles/portfolio_modal.css';
import anime from 'animejs';

export default class PortfolioModal extends Component {

	constructor(props){
		super(props);
		this.state = {
			modalImageStyle: {
				transformOrigin: 'top left'
			},
			isAnimating: false
		};

		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount(){
		if(this.props.item && !this.state.isAnimating) this.animateIn();
	}

	animateIn(){
		const {rect} = this.props;
		const windowWidth = window.innerWidth,
			  windowHeight = window.innerHeight,
			  modal_rect = this.modal_content_container.getBoundingClientRect(),
			  initial_scale = rect.width / modal_rect.width;

		const left_start = (rect.left - modal_rect.left) / initial_scale,
			  right_start = (rect.right - modal_rect.right) / initial_scale,
			  top_start = (rect.top - modal_rect.top) / initial_scale,
			  bottom_start = (rect.bottom - modal_rect.top - (rect.height / initial_scale)) / initial_scale;

		const TOP_LEFT = 'top left',
			  TOP_RIGHT = 'top right',
			  BOTTOM_LEFT = 'bottom left',
			  BOTTOM_RIGHT = 'bottom right';

		const modalAnimationOpts = {
			targets: this.modal_image,
			scale: [initial_scale, 1],
			duration: 250,
			elasticity: 100,
			delay: 5, //short delay seems to prevent flickering
			easing: 'easeOutQuad'
		};

		if(rect.left > windowWidth / 2){
			if(rect.top > windowHeight / 2){
				this.setState({modalImageStyle: {transformOrigin: BOTTOM_RIGHT}});
				modalAnimationOpts.translateY = [bottom_start, 0];
			}else{
				this.setState({modalImageStyle: {transformOrigin: TOP_RIGHT}});
				modalAnimationOpts.translateY = [top_start, 0];
			}
			modalAnimationOpts.translateX = [right_start, 0];
		}else{
			if(rect.top > windowHeight / 2){
				this.setState({modalImageStyle: {transformOrigin: BOTTOM_LEFT}});
				modalAnimationOpts.translateY = [bottom_start, 0];
			}else{
				this.setState({modalImageStyle: {transformOrigin: TOP_LEFT}});
				modalAnimationOpts.translateY = [top_start, 0];
			}
			modalAnimationOpts.translateX = [left_start, 0];
		}

		//animate
		const modal_timeline = anime.timeline();
		modal_timeline
		.add(modalAnimationOpts)
		.add({
			targets: this.modal_heading,
			translateY: [50, 0],
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 500,
		})
		.add({
			targets: this.modal_content_container.querySelectorAll('.modal_links a'),
			scale: [0, 1],
			translateY: [50, 0],
			delay: (el, i, l) => {
				return 50 + (i * 50)
			},
			easing: 'easeOutExpo',
			duration: 500,
			offset: '-=475'
		})
		.add({
			targets: this.modal_description,
			translateY: [50, 0],
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 500,
			offset: '-=475'
		})
		.add({
			targets: this.modal_content_container.querySelectorAll('.gallery_item_container'),
			opacity: [0, 1],
			translateY: [50, 0],
			delay: (el, i, l) => {
				return 50 + (i * 50);
			},
			easing: 'easeOutExpo',
			duration: 500,
			offset: '-=475'
		});
	}

	animateOut(){
		this.setState({isAnimating: true});
		setTimeout(() => {
			this.setState({isAnimating: false});
		}, 650);

		const {rect} = this.props;
		const windowWidth = window.innerWidth,
			  windowHeight = window.innerHeight,
			  modal_rect = this.modal_content_container.getBoundingClientRect(),
			  initial_scale = rect.width / modal_rect.width;

		const left_start = (rect.left - modal_rect.left) / initial_scale,
			  right_start = (rect.right - modal_rect.right) / initial_scale,
			  top_start = (rect.top - modal_rect.top) / initial_scale,
			  bottom_start = (rect.bottom - modal_rect.top - (rect.height / initial_scale)) / initial_scale;

		const TOP_LEFT = 'top left',
			  TOP_RIGHT = 'top right',
			  BOTTOM_LEFT = 'bottom left',
			  BOTTOM_RIGHT = 'bottom right';

		const modalAnimationOpts = {
			targets: this.modal_image,
			scale: [1, initial_scale],
			duration: 350,
			elasticity: 100,
			easing: 'easeOutExpo'
		};

		if(rect.left > windowWidth / 2){
			if(rect.top > windowHeight / 2){
				this.setState({modalImageStyle: {transformOrigin: BOTTOM_RIGHT}});
				modalAnimationOpts.translateY = [0, bottom_start];
			}else{
				this.setState({modalImageStyle: {transformOrigin: TOP_RIGHT}});
				modalAnimationOpts.translateY = [0, top_start];
			}
			modalAnimationOpts.translateX = [0, right_start];
		}else{
			if(rect.top > windowHeight / 2){
				this.setState({modalImageStyle: {transformOrigin: BOTTOM_LEFT}});
				modalAnimationOpts.translateY = [0, bottom_start];
			}else{
				this.setState({modalImageStyle: {transformOrigin: TOP_LEFT}});
				modalAnimationOpts.translateY = [0, top_start];
			}
			modalAnimationOpts.translateX = [0, left_start];
		}

		//animate
		const modal_timeline = anime.timeline();
		modal_timeline
		.add({
			targets: this.modal_content,
			scaleY: [1, 0],
			opacity: [1, 0],
			duration: 200,
			easing: 'linear'
		})
		.add(modalAnimationOpts)
		.add({
			targets: this.modal_parent,
			opacity: [1, 0],
			duration: 100,
			easing: 'linear',
			offset: '-=150',
		});
	}

	closeModal(){
		if(!this.state.isAnimating){
			this.animateOut();
			this.props.handleClick();
		}
	}

	render(){
		if(!this.props.item) {
			return (
				<div className='portfolio_modal'>no item yet.</div>
			);
		}

		const {image, heading, full_description, gallery} = this.props.item;
		const {modalImageStyle} = this.state;
		const display_gallery = gallery ? gallery.map((thumb, index) => {
			return <div className='gallery_item_container' key={index}><a href={thumb} target='_blank'><img src={thumb} alt=''/></a></div>;
		}) : null;

		return (
			<div className='portfolio_modal' onClick={this.closeModal} ref={el => this.modal_parent = el}>
				<div className='stuff_container' ref={el => this.modal_content_container = el} onClick={e => e.stopPropagation()}>
					<img src={image} alt='' key={image} ref={el => this.modal_image = el} style={modalImageStyle} />
					<div className='modal_content' ref={el => this.modal_content = el}>
						<h2 ref={el => this.modal_heading = el}>{heading}</h2>
						<ul className='modal_links'>
							<li><a href='' target='_blank'><i className='fa fa-link'></i></a></li>
							<li><a href='' target='_blank'><i className='fa fa-github'></i></a></li>
						</ul>
						<p ref={el => this.modal_description = el} dangerouslySetInnerHTML={{__html: full_description}}></p>
						<div className='modal_gallery'>
							{display_gallery}
						</div>
					</div>
					<button className='close_modal' onClick={this.closeModal}>
						<span className='line'></span>
						<span className='line'></span>
					</button>
				</div>
			</div>
		);
	}
}