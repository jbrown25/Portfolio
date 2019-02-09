import React, {Component} from 'react';
import anime from 'animejs';
import '../styles/resume.css';

const jobsList = [
	{
		organization: 'Horn of the Moon',
		job_title: 'Web Developer',
		job_date: 'June 2018 - Present',
		job_location: 'Issaquah, WA',
		description_list: [
			'Developed and maintained websites and Node.js applications',
			'Wrote and deployed AWS Lambda functions'
		]
	},
	{
		organization: 'JustinTech Mobile',
		job_title: 'Freelance Web and Game Developer',
		job_date: '2012 - Present',
		job_location: 'Seattle, WA',
		description_list: [
			'Designed and built landing pages, WordPress websites, and Unity games',
			'Wrote documentation and provided continuing support for custom websites',
			'Controlled every stage of the projects including gameplay design, development, QA testing, beta testing, and release',
			'Built Sketchup models, used 3rd party art and models, created and edited textures in Photoshop',
			'Designed and built UI, icons'
		]
	},
	{
		organization: 'Indigo Slate',
		job_title: 'Contract Front-End Developer',
		job_date: 'July 2017',
		job_location: 'Bellevue, WA',
		description_list: [
			'Developed a landing page for Microsoft Office Ready Demo Toolkit'
		]
	},
	{
		organization: 'Waking Girl Web Design',
		job_title: 'Web Developer',
		job_date: 'February 2016 - January 2017',
		job_location: '',
		description_list: [
			'Built WordPress sites and landing page templates, designed creatives for ad campaigns',
			'Developed custom jQuery plugins and WordPress widgets for client sites',
			'Debugged and refactored legacy PHP applications',
			'Debugged and maintained WordPress sites',
			'Helped update and maintain dozens of sites hosted on the Weebly platform',
			'Wrote documentation and provided support for clients via email and video chat'
		]
	}
];

export default class Resume extends Component {

	componentDidMount(){
		const resume_timeline = anime.timeline();
		resume_timeline
		.add({
			targets: this.resume_summary,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			delay: 250,
			easing: 'easeOutQuad'
		})
		.add({
			targets: this.resume_skills,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		})
		.add({
			targets: this.resume_certs,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		})
		.add({
			targets: this.resume_experience,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		})
		.add({
			targets: this.resume_education,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		})
		.add({
			targets: this.resume_volunteer,
			opacity: [0, 1],
			translateY: [50, 0],
			duration: 500,
			easing: 'easeOutQuad',
			offset: '-=250'
		});
	}

	render(){
		return (
			<section className='resume'>
				<div className='resume_container'>
					<div className='summary' ref={el => this.resume_summary = el}>
						<h2>Summary</h2>
						<ul>
							<li>Over five years of experience developing for the web</li>
							<li>Strong skills with front-end technologies</li>
							<li>Works well with others</li>
							<li>Excellent experience working with a wide variety of clients and users</li>
						</ul>
					</div>
					<div className='skills' ref={el => this.resume_skills = el}>
						<h2>Skills</h2>
						<div className='skills_row'>
							<ul>
								<li>HTML5</li>
								<li>CSS</li>
								<li>Sass</li>
								<li>JavaScript</li>
								<li>React</li>
								<li>jQuery</li>
							</ul>
							<ul>
								<li>Node.js</li>
								<li>MongoDB</li>
								<li>PHP</li>
								<li>MySQL</li>
								<li>WordPress</li>
								<li>Java</li>
							</ul>
							<ul>
								<li>C#</li>
								<li>Unity3D</li>
								<li>UnityScript</li>
								<li>Photoshop</li>
								<li>Sketch</li>
								<li>Amazon Web Services</li>
							</ul>
						</div>
					</div>
					<div className='certifications' ref={el => this.resume_certs = el}>
						<h2>Certifications</h2>
						<div className='cert'>
							<div className='cert_description'>
								<h3>AWS Solutions Architect - Associate</h3>
							</div>
							<div className='dates'>
								<span className='cert_dates'>March 2018 - March 2020</span>
							</div>
						</div>
					</div>					
					<div className='experience' ref={el => this.resume_experience = el}>
						<h2>Experience</h2>
						{
							jobsList.map((job, i) => {
								return (
									<Job
										key={i}
										organization={job.organization}
										job_title={job.job_title}
										job_date={job.job_date}
										job_location={job.job_location}
										description_list={job.description_list} />
								);
							})
						}
					</div>
					<div className='education' ref={el => this.resume_education = el}>
						<h2>Education</h2>
						<div className='school'>
							<div className='school_details'>
								<h3>Certificate in Web Development</h3>
								<h4>Seattle Central College</h4>
							</div>
							<div className='school_location'>
								<span className='school_city_state'>Seattle, WA</span>
							</div>
						</div>
						<div className='school'>
							<div className='school_details'>
								<h3>BA in Economics, <em>Cum Laude</em></h3>
								<h4>Washington State University</h4>
							</div>
							<div className='school_location'>
								<span className='school_city_state'>Pullman, WA</span>
							</div>
						</div>
					</div>
					<div className='volunteer' ref={el => this.resume_volunteer = el}>
						<h2>Volunteer Experience</h2>
						<div className='experience_job'>
							<div className='experience_job_header'>
								<div className='experience_job_title'>
									<h3>Transplant Recipients International Organization</h3>
									<h4>Web Developer</h4>
								</div>
								<div className='experience_date_location'>
									<span className='date'>August 2018 - Present</span><br />
									<span className='location'>Seattle, WA</span>
								</div>
							</div>
							<div className='experience_job_description'>
								<ul>
									<li>Redesigning and developing WordPress site for the Seattle branch</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		);	
	}
}

const Job = props => {
	return (
		<div className='experience_job'>
			<div className='experience_job_header'>
				<div className='experience_job_title'>
					<h3>{props.organization}</h3>
					<h4>{props.job_title}</h4>
				</div>
				<div className='experience_date_location'>
					<span className='date'>{props.job_date}</span><br />
					<span className='location'>{props.job_location}</span>
				</div>
			</div>
			<div className='experience_job_description'>
				<ul>
					{props.description_list.map((item, i) => <li key={i}>{item}</li>)}
				</ul>
			</div>
		</div>
	);
};