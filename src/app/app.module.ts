import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './navigation/topnavbar/topnavbar.component';
import { SecNavBarComponent } from './navigation/sec-nav-bar/sec-nav-bar.component';
import { HomepageLayoutComponent } from './homepage-layout/homepage-layout.component';
import { ForumLayoutComponent } from './forum-layout/forum-layout.component';
import { LoginPageComponent } from './user-tracking/login-page/login-page.component';
import { UserService } from './user-tracking/user-service';
import { NewsPageComponent } from './news-page/news-page.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { NewsTabComponent } from './news-tab/news-tab.component';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { AddpageComponent } from './addpage/addpage.component';
import { FriendsComponent } from './friends/friends.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    SecNavBarComponent,
    HomepageLayoutComponent,
    ForumLayoutComponent,
    LoginPageComponent,
    BottomnavComponent,
    NewsPageComponent,
    NewsTabComponent,
    UpcomingGamesComponent,
    AddpageComponent,
    FriendsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
