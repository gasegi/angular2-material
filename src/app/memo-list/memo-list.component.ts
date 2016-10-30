import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Memo } from '../models/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {
  @Input() memos: Memo[];

  constructor(
    private memoService: MemoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.memoService.getMemos().then(memos => this.memos = memos);
  }

  gotoDetail(memo: Memo): void {
    let link = ['/detail', memo.id];
    this.router.navigate(link);
  }
}
