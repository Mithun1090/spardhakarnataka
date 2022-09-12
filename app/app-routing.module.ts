import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component'; 
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { ResultsComponent } from './results/results.component';
import { CourseComponent } from './course/course.component';
import { CurrentaffairsComponent } from './currentaffairs/currentaffairs.component';
import { QuizComponent } from './quiz/quiz.component';
import { MocktestComponent } from './mocktest/mocktest.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [ 
  {path: "",  component: ContentComponent, pathMatch: "full"},
  { path: 'content', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'course', component: CourseComponent },
  { path: 'currentaffairs', component: CurrentaffairsComponent},
  { path: 'mocktest', component: MocktestComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'contactus', component: ContactusComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
