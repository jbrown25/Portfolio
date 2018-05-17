import React, {Component} from 'react';
import PortfolioItem from '../components/portfolio_item';
import {connect} from 'react-redux';
import '../styles/portfolio_list.css';
import PortfolioModal from '../components/portfolio_modal';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import anime from 'animejs';

class PortfolioList extends Component {

	constructor(props){
		super(props);

		this.state = {
			openModal: false,
			clickedItem: null,
			rect: null
		};

		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount(){
		const portfolio_anim = anime({
			targets: this.portfolio_container.querySelectorAll('.portfolio_item_container'),
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			delay: (el, i, l) => {
				return 250 + (i * 100);
			},
			easing: 'easeOutQuad'
		});
	}

	handleClick(item, rect){
		this.setState({
			openModal: true,
			clickedItem: item,
			rect: rect
		});
		document.body.classList.add('modal_open');
	}

	closeModal(){
		this.setState({
			openModal: false
		});
		document.body.classList.remove('modal_open');
	}

	renderItems(){
		return this.props.portfolio_items.map((item) => {
			return <PortfolioItem key={item.id} item={item} handleClick={(rect) => this.handleClick(item, rect)} />
		});
	}

	render(){
		const {openModal, clickedItem, rect} = this.state;
		const modal = () => {
			if(!openModal){
				return null;
			}
			return (
				<CSSTransition timeout={650} classNames='modal_container'>
					<PortfolioModal item={clickedItem} rect={rect} handleClick={this.closeModal} />
				</CSSTransition>
			);
		}
		return (
			<section className='portfolio'>
				<div className='portfolio_container' ref={el => this.portfolio_container = el}>
					{this.renderItems()}
				</div>
				<TransitionGroup>
					{modal()}
				</TransitionGroup>
			</section>
		);
	}
}

function mapStateToProps(state){
	return {
		portfolio_items: state.portfolio_items
	};
}

export default connect(mapStateToProps, null)(PortfolioList);