import {Environment} from './environment.class';
import {bookmarks} from '../app/bookmarks/bookmarks.file.demo';

export const environmen: Environment = {
	production: true,
	data: {
		bookmarks: bookmarks
	}
};
