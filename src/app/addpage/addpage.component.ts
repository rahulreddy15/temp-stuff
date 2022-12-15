import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-page/news.service';
import { newModel } from '../news-tab/news-model';


@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  constructor(private ns: NewsService) { }

  ngOnInit(): void {
  }

  addPage(page: newModel) {
    console.log(page);
    this.ns.addPage(page);

  }

}
