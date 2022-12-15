import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ForumModel } from "./forum-model";


@Injectable(
    {providedIn: 'root'}
)

export class Forumservice{
    private baseUrl:string = "https://mul-t-80ec1-default-rtdb.firebaseio.com/";
    private mainpageEndpoint:string ="forum/bugs.json";

    constructor(private http:HttpClient){

    }

    getForumGroup() {
        return this.http.get<ForumModel []>(this.baseUrl + this.mainpageEndpoint)as unknown as ForumModel[];
    }

    getCardGrou(index:number){
        return this.http.get<ForumModel []>(this.baseUrl + 'forum/bugs' + '/' + index + '.json');
    }

}