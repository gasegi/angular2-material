import { Injectable } from '@angular/core';
import { Memo } from '../models/memo';

const memos: Memo[] = [
  { id: 11, memo: 'Mr. Nice' },
  { id: 12, memo: 'Narco' },
  { id: 13, memo: 'Bombasto' },
  { id: 14, memo: 'Celeritas' },
  { id: 15, memo: 'Magneta' },
  { id: 16, memo: 'RubberMan' },
  { id: 17, memo: 'Dynama' },
  { id: 18, memo: 'Dr IQ' },
  { id: 19, memo: 'Magma' },
  { id: 20, memo: 'Tornado' }
];

@Injectable()
export class MemoService {

  getMemos(): Promise<Memo[]> {
    return Promise.resolve(memos);
  }

  getMemo(id: number): Promise<Memo> {
    return this.getMemos()
      .then(memos => memos.find(memo => memo.id === id));
  }


}
