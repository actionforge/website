import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page-404/page-404.componment';
import { GraphViewerComponent } from './components/graph-viewer/graph-viewer.component';

function githubRouteMatcher(segments: UrlSegment[], _group: UrlSegmentGroup, _route: Route) {
  if (segments.length > 0 && segments[0].path.startsWith('github')) {
    return {
      consumed: segments,
      posParams: {
        path: new UrlSegment(segments.map(s => s.path).join('/'), {})
      }
    };
  }
  return null;
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { matcher: githubRouteMatcher, component: GraphViewerComponent },
  { path: '**', pathMatch: 'full', component: Page404Component },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
