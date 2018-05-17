import React, {Component} from 'react';
import '../styles/portfolio_item.css';

export default class PortfolioItem extends Component {

	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const rect = this.portfolio_image.getBoundingClientRect();
		this.props.handleClick(rect);
	}

	render(){
		const {heading, short_description, image} = this.props.item;

		return (
			<div className='portfolio_item_column'>
				<div className='portfolio_item_container'>
					<img key={image} src={image} alt='' ref={el => this.portfolio_image = el} onClick={this.handleClick} />
					<div className='portfolio_item_content'>
						<h3>{heading}</h3>
						<div className='portfolio_item_description'>
							<p>{short_description}</p>
							<button onClick={this.handleClick}>View Details</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}