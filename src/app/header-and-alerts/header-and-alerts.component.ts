import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-and-alerts',
  templateUrl: './header-and-alerts.component.html',
  styleUrls: ['./header-and-alerts.component.scss']
})
export class HeaderAndAlertsComponent implements OnInit {

  header: object;
  warningMessage: string;

  constructor() { 
    this.header = {
      url: 'assets/images/header.JPG',
      display: true,
    };
  }

  ngOnInit() {
    this.setWarningMessage("WARNING: Algal Toxins Levels Are At An Unsave Level For The Lake. " + 
    "Updated Tests Results Are Expected The Week Of July 1st")
  }

  setHeaderImageDisplay(isDisplayed) {
    this.header[0].display = isDisplayed;
  }

  setWarningMessage(message){
    this.warningMessage = message;
  }

  dismissWarning(){
    this.warningMessage = undefined;
  }

}
