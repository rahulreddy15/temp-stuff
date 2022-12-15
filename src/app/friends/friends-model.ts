export class FirendsModel {
    title: string;
    img: string;
    fave: string;
    discord: string;
    description: string;
  
    constructor(img: string, title: string, description: string, fave: string, discord: string) {
      this.title = title
      this.img = img;
      this.fave = fave;
      this.discord = discord;
      this.description = description
    }
  }