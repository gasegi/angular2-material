import { Component, OnInit, Input } from '@angular/core';

import { Memo } from '../models/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {
  @Input() memos: Memo[];

  constructor() { }

  ngOnInit() {
  }

  gotoDetail(memo: Memo): void { /* not implemented yet */}
}
