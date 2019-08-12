import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  loadDashboard = true;
  // loadComents = false;
  // loadAnalytics = false;


  displayDashboard(){
    this.loadDashboard = !this.loadDashboard;
  }

  // displayComments(){
  //   this.loadComents = !this.loadComents;
  // }

  // displayAnalytics(){
  //   this.loadAnalytics = !this.loadAnalytics;
  // }

}
