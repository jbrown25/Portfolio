import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import '../styles/contact.css';
import {CSSTransition} from 'react-transition-group';

class ContactForm extends Component {

	constructor(props){
		super(props);

		this.state = {
			nameFocus: false,
			emailFocus: false,
			messageFocus: false
		};
	}

	handleFocus(e, focusIn){
		if(focusIn){
			switch(e.target.getAttribute('id')){
				case 'name':
					this.setState({nameFocus: true});
					break;
				case 'email':
					this.setState({emailFocus: true});
					break;
				case 'message':
					this.setState({messageFocus: true});
					break;
				default:
					//
					break;
			}
		}else{
			if(e.target.value === ''){
				switch(e.target.getAttribute('id')){
					case 'name':
						this.setState({nameFocus: false});
						break;
					case 'email':
						this.setState({emailFocus: false});
						break;
					case 'message':
						this.setState({messageFocus: false});
						break;
					default:
						//
						break;
				}
			}
		}
		
	}


	render(){
		const {handleSubmit, pristine, reset, submitting} = this.props;
		const {nameFocus, emailFocus, messageFocus} = this.state;
		const FormLabel = ({str}) => {
			return str.split('').map((letter, index) => <span key={`${letter} ${index}`} style={{transitionDelay: `${index * 25}ms`}} className='letter'>{letter}</span>);
		};

		return (
			<form onSubmit={handleSubmit}>
				<label>
					<Field
						name='name'
						id='name'
						component='input'
						onFocus={e => this.handleFocus(e, true)}
						onBlur={e => this.handleFocus(e, false)}
						type='text' />
					<CSSTransition 
						in={nameFocus}
						mountOnEnter={false}
						unmountOnExit={false}
						timeout={50}
						classNames='letters'>
						<span className='label_text'><FormLabel str='NAME' /></span>
					</CSSTransition>
				</label>
				<label>
					<Field
						name='email'
						id='email'
						component='input'
						onFocus={e => this.handleFocus(e, true)}
						onBlur={e => this.handleFocus(e, false)}
						type='email' />
					<CSSTransition 
						in={emailFocus}
						mountOnEnter={false}
						unmountOnExit={false}
						timeout={50}
						classNames='letters'>
						<span className='label_text'><FormLabel str='EMAIL' /></span>
					</CSSTransition>
				</label>
				<label>
					<Field 
						name='message'
						id='message'
						onFocus={e => this.handleFocus(e, true)}
						onBlur={e => this.handleFocus(e, false)}
						component='textarea' />
					<CSSTransition 
						in={messageFocus}
						mountOnEnter={false}
						unmountOnExit={false}
						timeout={50}
						classNames='letters'>
						<span className='label_text'><FormLabel str='MESSAGE' /></span>
					</CSSTransition>
				</label>
			  <div>
			    <button type="submit" disabled={pristine || submitting}>
			      Submit
			    </button>
			  </div>
			</form>
		);		
	}
}

export default reduxForm({
	form: 'contact_form'
})(ContactForm);