import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calendar-check',
  templateUrl: './calendar-check.component.html',
  styleUrls: ['./calendar-check.component.scss']
})
export class CalendarCheckComponent implements OnInit {

  @Input() events: any[];
  @Input() check: string;

  language: string;

  constructor(public router: ActivatedRoute) {
    this.router.params.forEach((params: Params) => {
      this.language = params['language'];
    })
  }

  ngOnInit() {
  }

}
