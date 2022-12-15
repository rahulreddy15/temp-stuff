import { Component, OnInit } from '@angular/core';
import { newsList } from '../news-tab/news-list';
import { newModel } from '../news-tab/news-model';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {

  news: newModel[] = [];

  constructor(private NewsService: NewsService) { }

  ngOnInit(): void {
    this.NewsService.getPage().subscribe((data: newModel[]) => {
      console.log("Getting the News...");
      for (var page of data) {
        console.log(page);
        this.news.push(page);
      }
    })
  }



}

