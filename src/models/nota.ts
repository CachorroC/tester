import { IntNota } from '../types/notas';
import { datesExtractor } from '../utils/date-validator';

export class NotasBuilder implements IntNota {
  createdAt: Date;
  pathname: string | null;
  dueDate: Date | null;
  text: string;
  content: string[] = [];
  constructor(
    incomingNote: string
  ) {
    const dateExtract = datesExtractor(
      incomingNote
    );

    if ( dateExtract.length === 0 ) {
      this.dueDate = null;
    }

    const [ firstDate ] = dateExtract;
    this.dueDate = firstDate;
    this.text = incomingNote;
    this.createdAt = new Date();
    this.pathname = null;
  }
}
