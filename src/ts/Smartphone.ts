import Product from './Product';

export default class Smartphone implements Product {
	readonly id: number;

	readonly title: string;

	readonly country: string;

	readonly description: string;

	readonly price: number;

	constructor(
		id: number,
		title: string,
		country: string,
		description: string,
		price: number,
	) {
		this.id = id;
		this.title = title;
		this.country = country;
		this.description = description;
		this.price = price;
	}
}
