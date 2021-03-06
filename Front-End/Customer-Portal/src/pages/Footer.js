import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Footer.css";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (

		<Box>
			<div><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" ></link></div>
			<Container>

				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Mobiles</FooterLink>
						<FooterLink href="#">Pre-Ordering</FooterLink>
						<FooterLink href="#">Delivery</FooterLink>
						{/* <FooterLink href="#">Teaching</FooterLink> */}
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							<i className="fa fa-phone-square">
							</i>
							<span style={{ marginLeft: "10px" }}>
								+91 97734-66928,
							</span>

						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-phone-square"> <b>Hotline:</b>
							</i><br></br>
							<span style={{ marginLeft: "10px" }}>

								+852-800-931-122
							</span>
						</FooterLink>

						<FooterLink href="#">
							<i className="fa fa-envelope"> <b>Email us:</b>
							</i>
							<span style={{ marginLeft: "10px" }}>
								www.mobigo.ir@gmail.com
							</span>
						</FooterLink>
						{/* <FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink> */}
					</Column>
					<Column>

						<Heading>Social Media</Heading>
						<FooterLink href="https://www.linkedin.com/in/akshay-z-b811321b1/">
							<i className="fa fa-linkedin-square">
							</i>
							<span style={{ marginLeft: "10px" }}>
								LinkedIn
							</span>


						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-facebook-square">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Facebook
							</span>


						</FooterLink>
						<FooterLink href="https://www.instagram.com/mobigo2022/">
							<i className="fa fa-instagram">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Instagram
							</span>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-twitter">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Twitter
							</span>
						</FooterLink>
						<FooterLink href="#">
							<i className="fa fa-youtube">
							</i>
							<span style={{ marginLeft: "10px" }}>
								Youtube
							</span>
						</FooterLink>
					</Column>
				</Row>
				<div className="footer-copyright text-center py-3 " >
					<Card.Header className="mt-4">
						&copy; {new Date().getFullYear()} Copyright:{" "}
						<a href="#"> Akshay-Zambre && Rajveer-Singh(Pg-DAC IACSD Sept-2021)</a>
					</Card.Header>
				</div>
			</Container>

		</Box>
	);
};
export default Footer;
