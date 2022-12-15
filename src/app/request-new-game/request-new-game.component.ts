import { Component, OnInit } from "@angular/core";
import { GameRequest } from "./request-game";
import { RequestService } from "./request.service";

@Component({
  selector: "app-request-new-game",
  templateUrl: "./request-new-game.component.html",
  styleUrls: ["./request-new-game.component.css"],
})
export class RequestNewGameComponent implements OnInit {
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {}

  addGameRequest(gameRequest: GameRequest) {
    this.requestService.addGame(gameRequest);
  }
}