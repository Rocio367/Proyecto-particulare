import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RedirectService} from '../../../../core/services/redirect/redirect.service';

@Component({
  selector:'app-error',
  templateUrl:'./error.component.html',
  styleUrls:['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public message:string = history.state.message;

  constructor(private router:Router, private redirectService:RedirectService) {
    if (!this.message) {
      this.redirectService.toHome();
    }
  }

  ngOnInit() {
  }
}
