import React from "react";
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
	<Container>
		<Row>
		<Column>
			<Heading>Products</Heading>
			<FooterLink href="http:www.google.com" alt="googlw website">Quadcopters</FooterLink>
			<FooterLink href="http:www.google.com" alt="googlw website">FPV Drones</FooterLink>
			<FooterLink href="http:www.google.com" alt="googlw website">Accessories</FooterLink>
		</Column>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="http:www.google.com" alt="googlw website">FAQ</FooterLink>
			<FooterLink href="http:www.google.com" alt="googlw website">Tutorials</FooterLink>
			<FooterLink href="http:www.google.com" alt="googlw website">Contact</FooterLink>
		</Column>
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">About</FooterLink>
			<FooterLink href="#">Gallery</FooterLink>
			<FooterLink href="#">Store</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
