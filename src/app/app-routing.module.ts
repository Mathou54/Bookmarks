import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookmarksComponent} from './bookmarks/bookmarks.component';

const routes: Routes = [{
	path: '',
	component: BookmarksComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
