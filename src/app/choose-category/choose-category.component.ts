import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'choose-category',
  templateUrl: './choose-category.component.html',
  styleUrls: ['./choose-category.component.scss']
})
export class ChooseCategoryComponent implements OnInit {

  private readonly notifier: NotifierService;

  constructor(
    notifierService: NotifierService
  ) { 
    this.notifier = notifierService;
  }

  ngOnInit() {

  }

  notifyWarning(message){
    this.notifier.notify( 'warning', message );
  }
}
