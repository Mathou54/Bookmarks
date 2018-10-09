import {Component, OnInit} from '@angular/core';
import {BookmarksGroup} from '../bookmarks-group';
import {bookmarks} from './bookmarks.file';

@Component({
	selector: 'app-bookmarks',
	templateUrl: './bookmarks.component.html',
	styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

	public search: string = '';

	public groups: BookmarksGroup[] = bookmarks;

	constructor() {
	}

	ngOnInit() {
	}

	filterGroup(groups: BookmarksGroup[], search: string): BookmarksGroup[] {
		return groups.map(group => {
			return {
				title: group.title,
				bookmarks: group.bookmarks.filter(bookmark => bookmark.text.indexOf(search) >= 0)
			};
		})
			.filter(group => group.bookmarks.length > 0);
	}
}
