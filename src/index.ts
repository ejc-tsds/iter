/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

export abstract class Iter<T> implements Iterable<T> {

	protected abstract iterHandler(index: number): T;
	protected abstract iterSize(): number;

	public [Symbol.iterator](): Iterator<T> {

		let index: number = 0;

		return {

			next: (): IteratorResult<T> => {

				const value: T = this.iterHandler(index);

				index ++;

				return {
					done: index === this.iterSize() + 1,
					value
				};
			}

		};
	}

}