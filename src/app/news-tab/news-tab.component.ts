import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-tab',
  templateUrl: './news-tab.component.html',
  styleUrls: ['./news-tab.component.css']
})
export class NewsTabComponent {

  @Input() game: string;
  @Input() title: string;
  @Input() description: string;
  @Input() link: string;
  @Input() images: string;

  constructor() { 

    this.game = "";
    this.title = "";
    this.description = "";
    this.link = "";
    this.images = "";

  }

}