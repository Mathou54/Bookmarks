import {BookmarksGroup} from '../app/bookmarks-group';

export class Environment {
	production: boolean;

	data: {
		bookmarks: BookmarksGroup[]
	};
}
