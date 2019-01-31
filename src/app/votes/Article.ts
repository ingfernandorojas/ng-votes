export class Article {

    title: string;
    link: string;
    votes: number;

    constructor(title:string, link:string, votes?:number){

        this.title = title;
        this.link = link;
        this.votes = votes || 0;

    }

    votesUp(){
        this.votes++;
    }

    votesDown(){
        this.votes--;
    }

    domain(){
        try {
            const link = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (error) {
            return null;
        }
    }

}