import { IntNota } from "../types/notas";

export class NotasBuilder implements IntNota {
  createdAt: Date;
  pathname: string | null;
  dueDate: Date | null;
  text: string;
  content: string[] = [];
  constructor(incomingNote: string) {
    const matchDates = incomingNote.matchAll(
      /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/gm,
    );
    this.dueDate = null;

    for (const matchedDate of matchDates) {
      const [newDueDate, newDay, newMonth, newYear] = matchedDate;
      console.log(newDueDate);
      this.dueDate = new Date(
        Number(newYear),
        Number(newMonth),
        Number(newDay),
      );
    }

    this.text = incomingNote;
    this.createdAt = new Date();
    this.pathname = null;
  }
}
