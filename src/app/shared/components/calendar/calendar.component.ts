import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  language: string;
  @Input() month;
  public monthNumber: number;
  @Input() year;
  @Input() events;

  public isLeap: boolean = false;
  public daysBefore;
  public daysAfter;
  public week1 = [];
  public week2 = [];
  public week3 = [];
  public week4 = [];
  public week5 = [];
  public week6 = [];

  constructor(public route: ActivatedRoute) {

    this.route.params.forEach((params: Params) => {
      this.language = params['language'];
    });
  }

  ngOnInit() {
    this.monthNumber = parseInt(this.month, 10);
    this.isLeap = new Date(this.year, 1, 29).getDate() === 29;

    this.daysBefore = new Date(this.year + "-" + this.month + "-1").getDay() - 1;
    if (this.daysBefore === -1) {
      this.daysBefore = new Array(6);
    } else {
      this.daysBefore = new Array(this.daysBefore);
    }
    this.daysAfter = new Array(7 - new Date(this.year, this.month, 0).getDay());
    if (this.daysAfter === 6) {
      this.daysAfter = new Array(0);
    }

    for (let i = 0; i < this.daysBefore.length; i++) {
      this.week1.push(0);
    }

    let dayNumber = 1;
    while (this.week1.length !== 7) {
      this.week1.push(dayNumber);
      dayNumber++;
    }
    while (this.week2.length !== 7) {
      this.week2.push(dayNumber);
      dayNumber++;
    }
    while (this.week3.length !== 7) {
      this.week3.push(dayNumber);
      dayNumber++;
    }
    while (this.week4.length !== 7) {
      this.week4.push(dayNumber);
      dayNumber++;
    }
    while (this.week5.length !== 7 && new Date(this.year, this.month - 1, dayNumber).getDate() === dayNumber) {
      this.week5.push(dayNumber);
      dayNumber++;
    }
    if (this.week5.length === 7) {
      while (new Date(this.year, this.month - 1, dayNumber).getDate() === dayNumber) {
        this.week6.push(dayNumber);
        dayNumber++;
      }
      if (this.week6.length === 0) {
        this.week6 = null;
      } else {
        while (this.week6.length !== 7) {
          this.week6.push(0);
        }
      }
    } else {
      if (this.week5.length === 0) {
        this.week5 = null;
      } else {
        while (this.week5.length !== 7) {
          this.week5.push(0);
        }
      }
      this.week6 = null;
    }
  }
}

