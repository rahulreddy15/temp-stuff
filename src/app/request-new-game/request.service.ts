import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    AngularFireDatabase,
    AngularFireList,
    AngularFireObject,
  } from "@angular/fire/compat/database";
import { GameRequest } from "./request-game";

@Injectable(
    {providedIn : 'root'}
)
export class RequestService {
    upcomingPagesRef: AngularFireList<any>;

    constructor(private db: AngularFireDatabase, private http: HttpClient) {}

    getUpcomingPages() {
        this.upcomingPagesRef = this.db.list("upcoming-games")
        return this.upcomingPagesRef
    }

    addGame(game: GameRequest) {
        this.db.list<GameRequest>("upcoming-games").push(game)
    }
}