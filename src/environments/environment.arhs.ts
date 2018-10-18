import {Environment} from './environment.class';
import {bookmarks} from '../app/bookmarks/bookmarks.file.arhs';

export const environment: Environment = {
	production: true,
	data: {
		bookmarks: bookmarks
	}
};
