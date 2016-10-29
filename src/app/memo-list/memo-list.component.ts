import { Component, OnInit, Input } from '@angular/core';
import { Memo } from '../models/memo';

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

}
