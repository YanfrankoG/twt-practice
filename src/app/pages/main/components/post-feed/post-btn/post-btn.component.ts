import { Component } from '@angular/core';
import {
  faComment,
  faHeart,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faRetweet,
  faChartSimple,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-post-btn',
  templateUrl: './post-btn.component.html',
  styleUrl: './post-btn.component.scss',
})
export class PostBtnComponent {
  faComment = faComment;
  faRetweet = faRetweet;
  faHeart = faHeart;
  faChartSimple = faChartSimple;
  faBookmark = faBookmark;
  faArrowUpFromBracket = faArrowUpFromBracket;
}
