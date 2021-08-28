import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AspirationsComponent } from './aspirations/aspirations.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    RecommendationsComponent,
    ContactMeComponent,
    AspirationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
