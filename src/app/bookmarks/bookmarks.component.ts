import {Component, OnInit} from '@angular/core';
import {BookmarksGroup} from '../bookmarks-group';
import {environment} from '../../environments/environment';

@Component({
	selector: 'app-bookmarks',
	templateUrl: './bookmarks.component.html',
	styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

	public readonly resetSearchKeys: string[] = ['Enter', 'Escape'];

	public search: string = '';
	public shouldResetSearch: boolean = true;

	public groups: BookmarksGroup[] = environment.data.bookmarks;
	public filteredGroups: BookmarksGroup[] = environment.data.bookmarks;

	constructor() {
	}

	ngOnInit() {
	}

	public onKeyUpOnSearch(event: KeyboardEvent): void {
		if (this.shouldResetSearch) {
			if (this.resetSearchKeys.includes(event.key)) {
				this.search = '';
			}
		}
		this.filteredGroups = this.filterGroup(this.groups, this.search);
	}

	public clickOnBookmark(): void {
		if (this.shouldResetSearch) {
			this.search = '';
		}
	}

	private filterGroup(groups: BookmarksGroup[], search: string): BookmarksGroup[] {
		return groups.map(group => {
			return {
				title: group.title,
				bookmarks: group.bookmarks.filter(bookmark => bookmark.text.indexOf(search) >= 0)
			};
		})
			.filter(group => group.bookmarks.length > 0);
	}
}
