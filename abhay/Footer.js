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
			<FooterLink href="#">Quadcopters</FooterLink>
			<FooterLink href="#">FPV Drones</FooterLink>
			<FooterLink href="#">Accessories</FooterLink>
		</Column>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="#">FAQ</FooterLink>
			<FooterLink href="#">Tutorials</FooterLink>
			<FooterLink href="#">Contact</FooterLink>
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
