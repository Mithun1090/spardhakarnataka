import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularPaginatorModule } from 'angular-paginator';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './content/leftsidebar/sidebar.component';
import { RightsidebarComponent } from './content/rightsidebar/rightsidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './content/carousel/carousel.component';
import { HeaderCarouselComponent } from './content/header-carousel/header-carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { ResultsComponent } from './results/results.component';
import { CourseComponent } from './course/course.component';
import { CurrentaffairsComponent } from './currentaffairs/currentaffairs.component';
import { QuizComponent } from './quiz/quiz.component';
import { MocktestComponent } from './mocktest/mocktest.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    RightsidebarComponent,
    ContentComponent,
    FooterComponent,
    CarouselComponent,
    HeaderCarouselComponent,
    AboutComponent,
    GalleryComponent,
    VideosComponent,
    ResultsComponent,
    CourseComponent,
    CurrentaffairsComponent,
    QuizComponent,
    MocktestComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxNavbarModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule,
    AngularPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule,
  ],
})
export class AppModule { }
