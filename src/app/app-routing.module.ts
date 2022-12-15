import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForumLayoutComponent } from './forum-layout/forum-layout.component';

import { HomepageLayoutComponent } from './homepage-layout/homepage-layout.component';
import { LoginPageComponent } from './user-tracking/login-page/login-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { FavGameComponent } from './FavGame/fav-game/fav-game.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';

const routes: Routes = [
  { path: '', component: HomepageLayoutComponent },
  { path: 'homepage', component: HomepageLayoutComponent },
  { path: 'newspage', component: NewsPageComponent },
  { path: 'favorite', component: FavGameComponent },
  { path: 'forum', component: ForumLayoutComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'profile', component: ProfileLayoutComponent },
  { path: 'upcoming', component: UpcomingGamesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
