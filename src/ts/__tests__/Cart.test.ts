import { expect, test } from '@jest/globals';
import Cart from '../Cart';
import Movie from '../Movie';
import Smartphone from '../Smartphone';

test('', () => {
	const cart = new Cart();
	const movie = new Movie(
		1,
		'Мстители',
		2012,
		'США',
		'"Avengers Assemble!',
		'фантастика, боевик, фэнтези, приключения',
		'137 мин. / 02:17',
		1200,
	);

	cart.add(movie);
	cart.removeById(1);

	expect(cart.items.length === 0).toBe(true);
});

test('', () => {
	const cart = new Cart();
	const movie1 = new Movie(
		1,
		'Мстители',
		2012,
		'США',
		'"Avengers Assemble!',
		'фантастика, боевик, фэнтези, приключения',
		'137 мин. / 02:17',
		1200,
	);
	const movie2 = new Movie(
		2,
		'Мстители 2',
		2015,
		'США',
		'"Avengers Assemble!',
		'фантастика, боевик, фэнтези, приключения',
		'137 мин. / 02:17',
		2000,
	);
	const smartphone1 = new Smartphone(
		3,
		'Iphone 11',
		'США',
		'Описание',
		38000,
	);
	const smartphone2 = new Smartphone(
		4,
		'Iphone 12',
		'США',
		'Описание',
		58000,
	);

	cart.add(movie1);
	cart.add(movie2);
	cart.add(smartphone1);
	cart.add(smartphone2);
	cart.add(movie1);

	const expected = 3;
	const received = cart.items.length;

	expect(received).toBe(expected);
});

test('', () => {
	const cart = new Cart();
	const movie1 = new Movie(
		1,
		'Мстители',
		2012,
		'США',
		'"Avengers Assemble!',
		'фантастика, боевик, фэнтези, приключения',
		'137 мин. / 02:17',
		1200,
	);
	const movie2 = new Movie(
		2,
		'Мстители 2',
		2012,
		'США',
		'"Avengers Assemble!',
		'фантастика, боевик, фэнтези, приключения',
		'137 мин. / 02:17',
		1800,
	);

	cart.add(movie1);
	cart.add(movie2);

	const expected = 1800;
	const received = cart.amount();

	expect(received).toBe(expected);
});

test('', () => {
	const cart = new Cart();
	const movie1 = new Movie(
		1,
		'Мстители',
		2012,
		'США',
		'"Avengers Assemble!',
		'фантастика, боевик, фэнтези, приключения',
		'137 мин. / 02:17',
		1200,
	);
	const movie2 = new Movie(
		2,
		'Мстители 2',
		2012,
		'США',
		'"Avengers Assemble!',
		'фантастика, боевик, фэнтези, приключения',
		'137 мин. / 02:17',
		1800,
	);

	cart.add(movie1);
	cart.add(movie2);

	const expected = 900;
	const received = cart.amountWithDiscount(50);

	expect(received).toBe(expected);
});
