import { Component, OnInit } from '@angular/core';
import { GameRequest } from '../request-new-game/request-game';
import { RequestService } from '../request-new-game/request.service';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {

  upcomingPages: any = []

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getUpcomingPages().snapshotChanges().subscribe((data) => {
      this.upcomingPages = [];
      data.forEach((page) => {
        let a = page.payload.toJSON()
        this.upcomingPages.push(a as GameRequest)
      })
    })
  }

  addTitle(data: any) {
    const tagsArray = data.tags.split(",");
    const game: GameRequest = {
      name: data.name,
      description: data.description,
      tags: tagsArray,
      status: "Approval Pending"
    }
    this.requestService.addGame(game);
  }
}