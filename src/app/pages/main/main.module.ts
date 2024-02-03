import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostBtnComponent } from './components/post-feed/post-btn/post-btn.component';

@NgModule({
  declarations: [MainComponent, PostFeedComponent, PostBtnComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [MainComponent, PostFeedComponent],
})
export class MainModule {}
