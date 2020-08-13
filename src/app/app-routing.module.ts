import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { FeedComponent } from './feed/feed.component';
import { ExperienceComponent } from './experience/experience.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: FeedComponent },
  { path: 'experience', component: ExperienceComponent},
  { path: 'datascience', component: DatascienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }