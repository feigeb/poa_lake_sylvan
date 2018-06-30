import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-and-alerts',
  templateUrl: './header-and-alerts.component.html',
  styleUrls: ['./header-and-alerts.component.scss']
})
export class HeaderAndAlertsComponent implements OnInit {

  header: object;
  message: string;
  isWarning: boolean;

  constructor() { 
    this.header = {
      url: 'assets/images/header.JPG',
      display: true,
    };
    this.isWarning = false;
  }

  ngOnInit() {
    this.setWarningMessage("Alert: Lake water is safe again :)  Continue to avoid water that looks like " + 
    "spilled paint, has scumms, has mats, has films, is discolored, has colored streaks or has " + 
    "green globs floating below the surface")
  }

  setHeaderImageDisplay(isDisplayed) {
    this.header[0].display = isDisplayed;
  }

  setWarningMessage(message){
    this.message = message;
  }

  dismissWarning(){
    this.message = undefined;
  }

}
