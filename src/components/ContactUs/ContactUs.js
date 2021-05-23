import React, { Component } from "react"
import classes from "./ContactUs.module.css";
import ankitProfile from "../../assets/ankit.jpeg";
import vedantProfile from "../../assets/vedant.jpeg";
import jeevanshiProfile from "../../assets/jeevanshi.jpg";
import anushProfile from "../../assets/anush.jpg";

class ContactUs extends Component {
    render() {
        return (
			<div>
				<section className='site-section-2'>
					<div id='contact-us' className={classes.ContactUs}>
						<h1 data-aos='zoom-in'>Contact Us</h1>
						<div className={classes.ProfileSection}>
							<div
								className={classes.ProfileBox}
								data-aos='fade-right'
								data-aos-delay='50'
							>
								<div className={classes.Author}>
									<img
										src={ankitProfile}
										alt='Ankit Chaudhari'
									/>
									<div>
										<a
											href='https://www.linkedin.com/in/ankit1598/'
											target='_blank'
											rel='noreferrer'
										>
											<h5>Ankit Chaudhari</h5>
										</a>
										<span>Full Stack Developer</span>
									</div>
								</div>
							</div>
							<div
								className={classes.ProfileBox}
								data-aos='fade-right'
								data-aos-delay='150'
							>
								<div className={classes.Author}>
									<img
										src={vedantProfile}
										alt='Vedant Khairnar'
									/>
									<div>
										<a
											href='https://www.linkedin.com/in/vedantkhairnar/'
											target='_blank'
											rel='noreferrer'
										>
											<h5>Vedant Khairnar</h5>
										</a>
										<span>ML Enthusiast</span>
									</div>
								</div>
							</div>
							<div
								className={classes.ProfileBox}
								data-aos='fade-right'
								data-aos-delay='150'
							>
								<div className={classes.Author}>
									<img
										src={jeevanshiProfile}
										alt='Jeevanshi Sharma'
									/>
									<div>
										<a
											href='https://www.linkedin.com/in/femme-js/'
											target='_blank'
											rel='noreferrer'
										>
											<h5>Jeevanshi Sharma</h5>
										</a>
										<span>ML Enthusiast</span>
									</div>
								</div>
							</div>
							<div
								className={classes.ProfileBox}
								data-aos='fade-right'
								data-aos-delay='150'
							>
								<div className={classes.Author}>
									<img
										src={anushProfile}
										alt='Anush krishna v'
									/>
									<div>
										<a
											href='https://www.linkedin.com/in/anush-krishna-v-8270941a0/'
											target='_blank'
											rel='noreferrer'
										>
											<h5>Anush krishna v</h5>
										</a>
										<span>ML Enthusiast</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
    }
}

export default ContactUs