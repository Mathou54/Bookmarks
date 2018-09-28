import {Component, OnInit} from '@angular/core';
import {BookmarksGroup} from '../bookmarks-group';

@Component({
	selector: 'app-bookmarks',
	templateUrl: './bookmarks.component.html',
	styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

	public search: string = '';

	public groups: BookmarksGroup[] = [{
		title: 'title1',
		bookmarks: [{
			text: 'text1',
			url: 'url1'
		}, {
			text: 'text2',
			url: 'url2'
		}]
	}, {
		title: 'title2',
		bookmarks: [{
			text: 'text3',
			url: 'url3'
		}, {
			text: 'text4',
			url: 'url4'
		}]
	}];

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
