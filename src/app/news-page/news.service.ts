import { Injectable } from "@angular/core"
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { newModel } from "../news-tab/news-model";


@Injectable(
    { providedIn: 'root' }
)
export class NewsService {

    constructor(private db: AngularFireDatabase) {

    }


    getPage() {
        return this.db.list<newModel>("page").valueChanges();
    }

    addPage(page: newModel) {
        this.db.list<newModel>("page").push(page);
    }
}