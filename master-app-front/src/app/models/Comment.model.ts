export class Comment {
    id: number;
    date: Date;
    mark: number;
    text: string;
    therapist_id: number;
    user_id: number;
    constructor (id, date, mark, text, therapist?, user?){
      this.id = id;
      this.date = date;
      this.mark = mark;
      this.text = text;
      this.therapist_id = therapist;
      this.user_id = user;
    }
  }
  