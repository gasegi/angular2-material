import { Component, OnInit } from '@angular/core';

import { MemoService } from './services/memo.service';

import { Memo } from './models/memo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MemoService]
})
export class AppComponent implements OnInit {
  memos: Memo[];
  
  constructor(
    private memoService: MemoService
  ) { }

  getMemos(): void {
    this.memoService.getMemos().then(memos => this.memos = memos);
  }

  ngOnInit(): void {
    this.getMemos();
  }

  title = 'app works!';
}
