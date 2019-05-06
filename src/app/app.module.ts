import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { LandingComponent } from './landing/landing.component';
// import { HighlighterDirective } from './highlighter.directive';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from '@angular/forms';
import { Repos } from './repos';
import { RepositoryService } from './repository-http/repository.service';
import { UserService } from './user-http/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    LandingComponent,
    // HighlighterDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
