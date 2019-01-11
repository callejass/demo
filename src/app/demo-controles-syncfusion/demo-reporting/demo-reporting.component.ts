import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-reporting',
  templateUrl: './demo-reporting.component.html',
  styleUrls: ['./demo-reporting.component.css']
})
export class DemoReportingComponent implements OnInit {
  public serviceUrl: string;
  public reportPath: string;
  public reportServerUrl: string;
  public parameters: any;
  public reportData: any;
  constructor() {
    this.serviceUrl = 'http://js.syncfusion.com/ejServices/api/ReportViewer';
    this.reportPath = 'GroupingAgg.rdl';
    this.reportServerUrl = ''; // 'http://reportserver.syncfusion.com:80/';
  }

  ngOnInit() {

  }

}
