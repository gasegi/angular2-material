import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Memo } from '../models/memo';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-memo-detail',
  templateUrl: './memo-detail.component.html',
  styleUrls: ['./memo-detail.component.css']
})
export class MemoDetailComponent implements OnInit {

  @Input() memo: Memo;

  constructor(
    private memoService: MemoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.memoService.getMemo(id)
      .then(memo => this.memo = memo);
  });
  }
  
  goBack(): void {
    this.location.back();
  }

}
