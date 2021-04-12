import type { Nullable } from 'extended-utility-types';
import type { OrderDirection } from './Enums';

export * from './mutations';
export * from './objects';
export * from './Enums';
export * from './InputObjects';
export * from './Interfaces';
export * from './Queries';
export * from './Unions';

export interface MetaField<T extends string> {
	__typename?: T;
}

export interface Orderable<T> {
	/**
	 * The ordering direction.
	 */
	direction: OrderDirection;

	/**
	 * The field to order the item by.
	 */
	field: T;
}

export interface OrderBy<T, U extends Orderable<T>> {
	/**
	 * Ordering options for items returned from the connection.
	 */
	orderBy?: Nullable<U>;
}

export type Paging<T> = (args: PagingArgs) => T;

export interface PagingArgs {
	/**
	 * Returns the elements in the list that come after the specified cursor.
	 */
	after?: Nullable<string>;

	/**
	 * Returns the elements in the list that come before the specified cursor.
	 */
	before?: Nullable<string>;

	/**
	 * Returns the first *n* elements from the list.
	 */
	first?: Nullable<number>;

	/**
	 * Returns the last *n* elements from the list.
	 */
	last?: Nullable<number>;
}
