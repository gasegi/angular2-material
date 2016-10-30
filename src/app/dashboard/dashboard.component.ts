import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Memo } from '../models/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  memos: Memo[] = [];

  constructor(
    private router: Router,
    private memoService: MemoService
  ) { }

  ngOnInit(): void {
    this.memoService.getMemos()
      .then(memos => this.memos = memos.slice(1, 5));
  }

  gotoDetail(memo: Memo): void {
    let link = ['/detail', memo.id];
    this.router.navigate(link);
  }
}
