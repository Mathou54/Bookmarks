import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BookmarksComponent} from './bookmarks.component';
import {FormsModule} from '@angular/forms';

describe('BookmarksComponent', () => {
	let component: BookmarksComponent;
	let fixture: ComponentFixture<BookmarksComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule
			],
			declarations: [BookmarksComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BookmarksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
