import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import '../styles/contact.css';
import {CSSTransition, Transition} from 'react-transition-group';
import {send_email} from '../actions/index';

class ContactForm extends Component {

	constructor(props){
		super(props);

		this.state = {
			nameFocus: false,
			emailFocus: false,
			messageFocus: false,
			formSubmitted: false
		};
	}

	handleFocus(e, focusIn){
		if(focusIn || (!focusIn && e.target.value === '')){
			switch(e.target.getAttribute('id')){
				case 'name':
					this.setState({nameFocus: focusIn});
					break;
				case 'email':
					this.setState({emailFocus: focusIn});
					break;
				case 'message':
					this.setState({messageFocus: focusIn});
					break;
				default:
					//
					break;
			}			
		}
	}

	onSubmit(values){
		this.setState({formSubmitted: true});
		this.props.send_email(values);
	}
	
	renderNameField(field){
		const {meta: {touched, error}} = field;
		const className = touched && error ? 'has-danger' : '';
		return (
			<div className={className}>
				<input
					type='text'
					name='name'
					id='name'
					{...field.input} />
				<div className='text-help'>
					{ touched ? error : ''}
				</div>
			</div>
		);
	}

	renderEmailField(field){
		const {meta: {touched, error}} = field;
		const className = touched && error ? 'has-danger' : '';
		return (
			<div className={className}>
				<input
					type='email'
					name='email'
					id='email'
					{...field.input} />
				<div className='text-help'>
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	renderMessageField(field){
		const {meta: {touched, error}} = field;
		const className = touched && error ? 'has-danger' : '';
		return (
			<div className={className}>
				<textarea
					name='message'
					id='message'
					{...field.input} />
				<div className='text-help'>
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	render(){
		const {handleSubmit, pristine, reset, submitting, form_response} = this.props;
		const {nameFocus, emailFocus, messageFocus, formSubmitted} = this.state;
		const FormLabel = ({str}) => {
			return str.split('').map((letter, index) => <span key={`${letter} ${index}`} style={{transitionDelay: `${index * 25}ms`}} className='letter'>{letter}</span>);
		};

		const StatusText = (form_response) => {
			if(form_response.length === 0 || !form_response['form_response'][0]) return <span>Sending...</span>;
			if(form_response['form_response'][0].data.statusCode === 200) return <span>Thanks for your message!  I will get back to you as soon as I can.</span>
			return <span>Sorry, something went wrong.  You can still reach me at (509) 531-1368, or Justin.Brown345@gmail.com</span>
		};

		return (
			<div className='contact_form'>
				<CSSTransition
					in={formSubmitted || form_response.length > 0}
					mountOnEnter={false}
					unmountOnExit={false}
					timeout={150}
					key='form_transition'
					classNames='form_submitted'>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
						<label>
							<Field
								name='name'
								component={this.renderNameField}
								onFocus={e => this.handleFocus(e, true)}
								onBlur={e => this.handleFocus(e, false)} />
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
								component={this.renderEmailField}
								onFocus={e => this.handleFocus(e, true)}
								onBlur={e => this.handleFocus(e, false)} />
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
								component={this.renderMessageField}
								onFocus={e => this.handleFocus(e, true)}
								onBlur={e => this.handleFocus(e, false)} />
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
				</CSSTransition>
				<Transition
					in={formSubmitted || form_response.length > 0}
					mountOnEnter={true}
					timeout={500}>
					<div className='sub_status'>
						<StatusText form_response={form_response} />
					</div>
				</Transition>
			</div>
		);		
	}
}

function validate(values){
	const errors = {};

	//validate the inputs from 'values'
	if(!values.name){
		errors.name="Please enter a name.";
	}

	if(!values.email){
		errors.email="Please enter an email address.";
	}

	if(!values.message){
		errors.message="Please enter a message.";
	}

	return errors;
}

function mapStateToProps({form_response}){
	return {form_response};
}

export default reduxForm({
	validate,
	form: 'contact_form'
})(
	connect(mapStateToProps, {send_email})(ContactForm)
);