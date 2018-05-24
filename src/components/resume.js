import React, {Component} from 'react';
import anime from 'animejs';
import '../styles/resume.css';

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
		});
	}

	render(){
		return (
			<section className='resume'>
				<div className='resume_container'>
					<div className='summary' ref={el => this.resume_summary = el}>
						<h2>Summary</h2>
						<ul>
							<li>Over four years of experience developing for the web</li>
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
								<li>PHP</li>
								<li>MySQL</li>
								<li>WordPress</li>
								<li>Java</li>
								<li>C#</li>
							</ul>
							<ul>
								<li>Android</li>
								<li>Unity3D</li>
								<li>UnityScript</li>
								<li>Photoshop</li>
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
						<div className='experience_job'>
							<div className='experience_job_header'>
								<div className='experience_job_title'>
									<h3>JustinTech Mobile</h3>
									<h4>Freelance Web and Game Developer</h4>
								</div>
								<div className='experience_date_location'>
									<span className='date'>2012 - Present</span><br />
									<span className='location'>Seattle, WA</span>
								</div>
							</div>
							<div className='experience_job_description'>
								<ul>
									<li>Designed and build landing pages, WordPress websites, and Unity games</li>
									<li>Wrote documentation and provided continuing support for custom websites</li>
									<li>Controlled every stage of the projects including gameplay design, development, QA testing, beta testing, and release</li>
									<li>Built Sketchup models, used 3rd party art and models, created and edited textures in Photoshop</li>
									<li>Designed and built UI, icons</li>
								</ul>
							</div>
						</div>

							<div className='experience_job_header'>
								<div className='experience_job_title'>
									<h3></h3>
									<h4></h4>
								</div>
								<div className='experience_date_location'>

								</div>
							</div>
							<div className='experience_job_description'>

							</div>

						<div className='experience_job'>

							<div className='experience_job_header'>
								<div className='experience_job_title'>
									<h3>Indigo Slate</h3>
									<h4>Contract Front-End Developer</h4>
								</div>
								<div className='experience_date_location'>
									<span className='date'>June 2017</span><br />
									<span className='location'>Bellevue, WA</span>
								</div>
							</div>
							<div className='experience_job_description'>
								<ul>
									<li>Developed a landing page for Microsoft Office Ready Demo Toolkit</li>
								</ul>
							</div>
						</div>
						<div className='experience_job'>
							<div className='experience_job_header'>
								<div className='experience_job_title'>
									<h3>Waking Girl Web Design</h3>
									<h4>Web Developer</h4>
								</div>
								<div className='experience_date_location'>
									<span className='date'>February 2016 - January 2017</span><br />
									<span className='location'>Seattle, WA</span>
								</div>
							</div>
							<div className='experience_job_description'>
								<ul>
									<li>Built WordPress sites and landing page templates, designed creatives for ad campaigns</li>
									<li>Developed custom jQuery plugins and WordPress widgets for client sites</li>
									<li>Debugged and refactored legacy PHP applications</li>
									<li>Debugged and maintained WordPress sites</li>
									<li>Helped update and maintain dozens of sites hosted on the Weebly platform</li>
									<li>Wrote documentation and provided support for clients via email and video chat</li>
								</ul>
							</div>
						</div>
						<div className='experience_job'>
							<div className='experience_job_header'>
								<div className='experience_job_title'>
									<h3>Spectrum Information Services</h3>
									<h4>Document Imaging Tech</h4>
								</div>
								<div className='experience_date_location'>
									<span className='date'>2008 - 2011</span><br />
									<span className='location'>Seattle, WA</span>
								</div>
							</div>
							<div className='experience_job_description'>
								<ul>
									<li>Prepared and scanned documents</li>
									<li>Helped instruct new employees on equipment and software use</li>
								</ul>
							</div>
						</div>
						<div className='experience_job'>
							<div className='experience_job_header'>
								<div className='experience_job_title'>
									<h3>UNC-Chapel Hill Dept of Economics</h3>
									<h4>Teaching Assistant</h4>
								</div>
								<div className='experience_date_location'>
									<span className='date'>2007 - 2008</span><br />
									<span className='location'>Chapel Hill, NC</span>
								</div>
							</div>
							<div className='experience_job_description'>
								<ul>
									<li>Graded papers and proctored quizzes for intermediate economics course</li>
									<li>Held office hours and helped undergraduates with the material</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='education' ref={el => this.resume_education = el}>
						<h2>Education</h2>
						<div className='school'>
							<div className='school_details'>
								<h3>Coursework in Web Design and Development</h3>
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
				</div>
			</section>
		);	
	}
}