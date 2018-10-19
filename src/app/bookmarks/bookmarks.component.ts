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

	public search = '';
	public shouldResetSearch = true;

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

	/**
	 * Filter groups input by filtering with search input (ignore case).
	 * The groups are searched on title and on text of each bookmarks.
	 *
	 * @param groups the group to filter on.
	 * @param search the search param (case ignored).
	 */
	private filterGroup(groups: BookmarksGroup[], search: string): BookmarksGroup[] {
		if (search) {
			const searchLowerCase = search.toLowerCase();
			return groups.map(group => {
				if (group.title.toLowerCase().indexOf(searchLowerCase) >= 0) {
					return group;
				} else {
					return {
						title: group.title,
						bookmarks: group.bookmarks.filter(bookmark =>
							bookmark.text.toLowerCase().indexOf(searchLowerCase) >= 0)
					};
				}
			}).filter(group => group.bookmarks.length > 0);
		} else {
			return groups;
		}
	}
}
