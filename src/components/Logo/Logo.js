import React from "react";
import companyLogo from "../../assets/logo.png";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

const logo = (props) => {
	return (
		<div className={classes.Logo}>
			<Link to='/' style={{ height: "100%" }}>
				<img
					style={{ height: props.height }}
					src={companyLogo}
					alt='logo'
				/>
			</Link>
		</div>
	);
};

export default logo;
