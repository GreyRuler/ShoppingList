import Movie from './Movie';
import Smartphone from './Smartphone';

export default class Cart {
	protected _items: (Movie | Smartphone)[] = [];

	get items() {
		return this._items;
	}

	add(element: (Movie | Smartphone)): void {
		const existMovie = this._items.findIndex((item) => item instanceof Movie);
		if (existMovie !== -1 && element instanceof Movie) {
			this._items.splice(existMovie, 1, element);
		} else {
			this._items.push(element);
		}
	}

	/**
	 * Удаляет элемент из корзины и возвращает массив
	 */
	removeById(id: number): (Movie | Smartphone)[] {
		const index = this._items.findIndex((item) => item.id === id);
		return this._items.splice(index, 1);
	}

	/**
	 * Подсчитывает общую стоимость корзины
	 */
	amount(): number {
		return this._items.reduce((value: number, item: (Movie | Smartphone)) => {
			value += item.price;
			return value;
		}, 0);
	}

	/**
	 * Подсчитывает общую стоимость корзины со скидкой
	 * @param discount
	 */
	amountWithDiscount(discount: number): number {
		const amount = this._items.reduce((value: number, item: (Movie | Smartphone)) => {
			value += item.price;
			return value;
		}, 0);
		return amount * (discount / 100);
	}
}
