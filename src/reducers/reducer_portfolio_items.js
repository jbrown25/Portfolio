//feature images
import congress_feature from '../images/feature_images/congress.jpg';
import crown_touch_feature from '../images/feature_images/crown_touch.jpg';
//import steele_feature from '../images/feature_images/chris_steele.jpg';
import drive_car_feature from '../images/feature_images/drive_car.jpg';
import drive_car_two_feature from '../images/feature_images/drive_car2.jpg';
import drive_moto_feature from '../images/feature_images/drive_moto.jpg';
import fit_chipotle_feature from '../images/feature_images/fitchipotle.jpg';
import glow_rider_feature from '../images/feature_images/glowrider.jpg';
import justin_portfolio_feature from '../images/feature_images/jbportfolio.jpg';
import toolkit_feature from '../images/feature_images/toolkit.jpg';
import welshons_feature from '../images/feature_images/welshons.jpg';
import zombies_feature from '../images/feature_images/zombies.jpg';
import allclients_feature from '../images/feature_images/allclients.jpg';
import telos_feature from '../images/feature_images/telos.jpg';
import fit_guy_feature from '../images/feature_images/fit_after_40.jpg';
import drakos_feature from '../images/feature_images/drakoskeep.jpg';
import goodblock_feature from '../images/feature_images/goodblockio.jpg';

//gallery images
import crown_touch_gallery_one from '../images/gallery_images/crown_touch3.jpg';
import crown_touch_gallery_two from '../images/gallery_images/crown_touch4.jpg';
import crown_touch_gallery_three from '../images/gallery_images/crown_touch1.jpg';
import crown_touch_gallery_four from '../images/gallery_images/crown_touch2.jpg';

import toolkit_gallery from '../images/gallery_images/toolkit.jpg';

import allclients_gallery_one from '../images/gallery_images/lp1.jpg';
import allclients_gallery_two from '../images/gallery_images/lp2.jpg';
import allclients_gallery_three from '../images/gallery_images/lp3.jpg';
import allclients_gallery_four from '../images/gallery_images/lp4.jpg';
import allclients_gallery_five from '../images/gallery_images/lp5.jpg';
import allclients_gallery_six from '../images/gallery_images/lp6.jpg';
import allclients_gallery_seven from '../images/gallery_images/lp7.jpg';
import allclients_gallery_eight from '../images/gallery_images/lp8.jpg';

import zombies_gallery_one from '../images/gallery_images/zombies1.jpg';
import zombies_gallery_two from '../images/gallery_images/zombies2.jpg';
import zombies_gallery_three from '../images/gallery_images/zombies3.jpg';

import drive_car_gallery_one from '../images/gallery_images/drive_car1.jpg';
import drive_car_gallery_two from '../images/gallery_images/drive_car2.jpg';

import drive_car_two_gallery_one from '../images/gallery_images/dc_two1.jpg';
import drive_car_two_gallery_two from '../images/gallery_images/dc_two2.jpg';

import drive_moto_gallery_one from '../images/gallery_images/drive_moto1.jpg';
import drive_moto_gallery_two from '../images/gallery_images/drive_moto2.jpg';
import drive_moto_gallery_three from '../images/gallery_images/drive_moto3.jpg';

import telos_gallery_one from '../images/gallery_images/telos1.jpg';
import telos_gallery_two from '../images/gallery_images/telos2.jpg';

import drakos_gallery_one from '../images/gallery_images/drakos1.jpg';
import drakos_gallery_two from '../images/gallery_images/drakos2.jpg';


export default function(){
	return [
		{
			heading: 'Telos Foundation',
			short_description: 'Website for a blockchain startup.',
			full_description: 'Telos is a fork of EOS, a cryptocurrency. I build and maintained the website for the Telos Foundation. I also built some Node.js apps that collected data through the website.',
			image: telos_feature,
			tags: ['JavaScript', 'Responsive Design', 'React', 'Redux', 'Node.js'],
			links: {
				site: 'https://telosfoundation.io'
			},
			gallery: [
				telos_gallery_one,
				telos_gallery_two
			]
		},
		{
			heading: 'Drakos Keep',
			short_description: 'Marketing site for Drakos Keep, a game developed for blockchain.',
			full_description: 'Drakos Keep is a dragon-themed game that uses blockchain technology. It is one of the first blockchain games. I developed an animation-rich marketing site based on design comps.',
			image: drakos_feature,
			links: {
				site: 'https://drakoskeep.com'
			},
			gallery: [
				drakos_gallery_one,
				drakos_gallery_two
			]
		},
		{
			heading: 'GoodBlock',
			short_description: 'Website for a Telos block producer.',
			full_description: 'GoodBlock was the team that created Telos. I built and maintained the website with React.',
			image: goodblock_feature,
			tags: ['JavaScript', 'Responsive Design', 'React', 'Redux'],
			links: {
				site: 'https://goodblock.io'
			}
		},
		{
			heading: 'Office Ready Demo Toolkit',
			short_description: 'Landing page for a Microsoft Office sales event. I wrote the code and worked with a design team.',
			full_description: 'Landing page for a Microsoft Office sales event. I wrote the code and worked with a design team.  It was a fun project.',
			image: toolkit_feature,
			tags: ['JavaScript', 'Responsive Design', 'Sass', 'MVC'],
			links: {
				site: 'http://office-demo-rsp.azurewebsites.net/'
			},
			gallery: [toolkit_gallery]
		},
		{
			heading: 'Crown Touch Landscape Manager',
			short_description: 'An in-house customer relations management application for a landscaping and pest control company.',
			full_description: `
				This was an in-house, legacy customer relationship management application built with PHP and MySQL that I took over from a previous developer.  I was brought in to debug and refactor it, as well as rebuild the UI to be responsive.  I also refactored and redesigned the customer portal.<br />
				I added the following features:
				<ul>
					<li>“Quick Bids”: The company could suggest an area of improvement for one of their clients, with a description of the job, a bid price, and several photos of the area in need of work.  The bid gets emailed to the client and appears in their portal for review.</li>	
					<li>A water report page for tracking water usage on jobs</li>
					<li>A map page for uploading and viewing property maps</li>
				</ul>
			`,
			image: crown_touch_feature,
			tags: ['PHP', 'MySQL', 'Responsive Design', 'MVC', 'JavaScript', 'Photoshop'],
			links: {},
			gallery: [
				crown_touch_gallery_one,
				crown_touch_gallery_two,
				crown_touch_gallery_three,
				crown_touch_gallery_four
			]
		},
		{
			heading: 'AllClients',
			short_description: 'I designed and built over a dozen landing page templates for AllClients, a cloud-based CRM company.',
			full_description: 'I designed and built over a dozen landing page templates for AllClients, a cloud-based CRM company. I also developed a jQuery plugin that formats and clones the lead generation form, as well as smooths out some of the bugs in the landing page editor.',
			image: allclients_feature,
			tags: ['Responsive Design', 'Bootstrap', 'JavaScript', 'jQuery', 'Photoshop'],
			links: {
				site: 'http://developers.allclients.com/powertools/landing-pages/',
				github: 'https://github.com/jbrown25/crmform-plugin'
			},
			gallery: [ 
				allclients_gallery_one,
				allclients_gallery_two,
				allclients_gallery_three,
				allclients_gallery_four,
				allclients_gallery_five,
				allclients_gallery_six,
				allclients_gallery_seven,
				allclients_gallery_eight
			]
		},
		{
			heading: 'Congressional Finance App',
			short_description: 'Tool for visualizing campaign finace data for members of the US House of Representatives.',
			full_description: `
				This is a web app that lets you search and view graphs of campaign finance data  for members of congress.  I built it because campaign finance reform is a big topic in the news and I wanted to learn more about the issue.  The data is restricted to members of the US House of Representatives, and doesn’t cover “dark” money or super PACs.<br /><br />
				I would like to extend this project with other political data visualizations once I have time.  One idea I have is to compare district lean with money spent to see how money flows when races are more competitive.  I need to get access to a bigger data set first, though.<br />
				Built with React and Redux.  Data courtesy of the <a href='https://opensecrets.org' target='_blank' rel='noopener noreferrer'>Center for Responsive Politics</a>.
			`,
			image: congress_feature,
			tags: ['React', 'Chart.js', 'AWS Lambda', 'Sass', 'ES6', 'Sass'],
			links: {
				github: 'https://github.com/jbrown25/Congressional-Finance-App',
				site: 'http://congressional-finance-app.s3-website-us-west-2.amazonaws.com/'
			}
		},
		{
			heading: 'Welshon\'s Chiropractic',
			short_description: 'Custom WordPress theme based on underscores and built with Twitter Bootstrap. Customizer ready and includes some widgets I built.',
			full_description: 'Custom WordPress theme based on underscores and built with Twitter Bootstrap.  I built the testimonials widget so the site administrator can add detailed testimonials with stars and links without writing any code.',
			image: welshons_feature,
			tags: ['WordPress', 'Responsive Design', 'PHP', 'JavaScript', 'jQuery'],
			links: {}
		},
		/*{
			id: 5,
			heading: 'Chris Steele',
			short_description: 'Chris Steele, film and television actor. Custom WordPress theme based on underscores and built with Twitter Bootstrap.',
			full_description: 'Chris Steele, film and television actor. Custom WordPress theme based on underscores and built with Twitter Bootstrap.',
			image: steele_feature,
			tags: ['WordPress', 'Responsive Design', 'PHP', 'JavaScript', 'jQuery'],
			links: {
				site: 'http://actorchrissteele.com/'
			}
		},*/
		{
			heading: 'Fit After 40 Guy',
			short_description: 'Fitness oriented website. Custom WordPress theme based on underscores and built with Bootstrap.',
			full_description: 'Fitness oriented website. Custom WordPress theme based on underscores and built with Bootstrap.',
			image: fit_guy_feature,
			tags: ['WordPress', 'Responsive Design', 'PHP', 'JavaScript', 'jQuery'],
			links: {
				site: 'http://fitafter40guy.com'
			}
		},
		{
			heading: 'Fit Chipotle',
			short_description: 'Site about the health benefits of a high-burrito diet. Built with Bootstrap.',
			full_description: 'Site about the health benefits of a high-burrito diet. Built with Bootstrap. Designed icon in Photoshop.  The "burrito" is an AriZona Iced Tea can wrapped in foil.  Honestly, I\'m not sure why I made this site.',
			image: fit_chipotle_feature,
			tags: ['Responsive Design', 'Bootstrap', 'Photoshop', 'Animate.css', 'WOW.js'],
			links: {
				site: 'http://fitchipotle.com'
			}
		},
		{
			heading: 'My Old Portfolio',
			short_description: 'My old portfolio.  Not using it anymore, but I still like it.',
			full_description: 'My old portfolio.  Not using it anymore, but I still like it.  I built it with three.js, a WebGL library.',
			image: justin_portfolio_feature,
			tags: ['JavaScript', 'three.js', 'skeleton.css', 'CSS animation'],
			links: {
				site: 'http://justin-old-portfolio.s3-website-us-west-2.amazonaws.com/'
			}
		},
		{
			heading: 'Apocalypse of Zombies! Shooter',
			short_description: 'First person survival/horror shooter for Android. Features virtual storefront, incentivized installs, intuitive touch-based controls, and immersive 3D graphics.',
			full_description: 'First person survival/horror shooter for Android. Features virtual storefront, incentivized installs, intuitive touch-based controls, and immersive 3D graphics.  I was partly inspired by <a href="https://en.wikipedia.org/wiki/Slender:_The_Eight_Pages">Slender: The Eight Pages</a>, in which the player\'s sole light source is a flashlight.  I thought it added a lot to the game, and I didn\'t see too many other mobile zombie shooters with that feature.<br /><br />Originally I implemented what I thought was a novel control system: a control stick to move forward, backwards, and strafe left and right, a button to fire your weapon, and the device\'s accelerometer (gyroscope) to aim and turn left or right.  Most mobile shooters have a restrictive control system in which you can aim or fire with one finger, but not both at the same time.  No one who tried that version found the controls as intuitive as I did, however, so I scrapped it and built this instead.',
			image: zombies_feature,
			tags: ['Unity3D', 'C#', 'Photoshop'],
			links: {
				site: 'https://play.google.com/store/apps/details?id=com.JustinTechMobile.ZombieShooter'
			},
			gallery: [
				zombies_gallery_one,
				zombies_gallery_two,
				zombies_gallery_three
			]
		},
		{
			heading: 'Drive Car',
			short_description: 'Drive Car is a top-down driving game. The obstacle cars change lanes, your car speeds up over time, and the environment changes. It was challenging, yet fun to build. I used Unity3D, C#, UnityScript, Sketchup, and Photoshop to create it.',
			full_description: `
				Drive Car was my most successful game with over 1 million installs.<br />
				I had two theories I wanted to test when I made this game:
				<ol>
					<li>People like driving games because they like cars</li>
					<li>The most important search keywords were in the title of a game</li>
				</ol>
				I suspected that users didn’t respond to “Glow Rider” as much as other games with similar mechanics in part because those other games had cars and my game had a glowing bike.  I also didn’t think “glow” or “rider” were important search terms.  So, I developed Drive Car with a more realistic setting and several cars to choose from, and gave it the terrible name of “Drive Car”.<br />
				I have no way of knowing if my theories were correct, but Drive Car consistently rated highly for searches of “drive” and “car” and averaged 2000 new installs per day for over a year.
			`,
			image: drive_car_feature,
			tags: ['Unity3D', 'C#', 'Photoshop', 'SketchUp'],
			links: {
				site: 'https://play.google.com/store/apps/details?id=com.JustinTechMobile.DriveCar'
			},
			gallery: [
				drive_car_gallery_one,
				drive_car_gallery_two
			]
		},
		{
			heading: 'Drive Car 2',
			short_description: 'Sequel to Drive Car with a landscape view. Implemented better shaders, ad mediation, Google Play Games Services.',
			full_description: 'Sequel to Drive Car with a landscape view. Implemented better shaders, ad mediation, Google Play Games Services.',
			image: drive_car_two_feature,
			tags: ['Unity3D', 'C#', 'Photoshop', 'SketchUp'],
			links: {
				site: 'https://play.google.com/store/apps/details?id=com.JustinTechMobile.DriveCar2'
			},
			gallery: [
				drive_car_two_gallery_one,
				drive_car_two_gallery_two
			]
		},
		{
			heading: 'Drive Moto',
			short_description: 'Drive Car 2, but with a motorcycle. Rigged models, ragdoll physics.',
			full_description: 'Drive Car 2, but with a motorcycle. Rigged models, ragdoll physics.',
			image: drive_moto_feature,
			tags: ['Unity3D', 'C#', 'Photoshop', 'SketchUp'],
			links: {
				site: 'https://play.google.com/store/apps/details?id=com.JustinTechMobile.DriveMoto'
			},
			gallery: [
				drive_moto_gallery_one,
				drive_moto_gallery_two,
				drive_moto_gallery_three
			]
		},
		{
			heading: 'Glow Rider',
			short_description: 'Glow Rider is also a top-down driving game, but with Tron-inspired graphics. You play by tilting the device and dodging microchips. It was my first game.',
			full_description: 'Glow Rider is also a top-down driving game, but with Tron-inspired graphics. You play by tilting the device and dodging microchips. It was my first game.',
			image: glow_rider_feature,
			tags: ['Unity3D', 'C#', 'Photoshop'],
			links: {
				site: 'https://play.google.com/store/apps/details?id=com.FatWienerMobile.GlowRiderRacing'
			}
		}
	];
}