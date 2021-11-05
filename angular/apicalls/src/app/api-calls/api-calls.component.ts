import { Component, OnInit } from '@angular/core';
import { ApiService, records } from '../services/api.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent implements OnInit {
  tableData: any;
  updateMode: boolean = false;
  currentObj:any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.getData().subscribe((response: records[]) => {
      this.tableData = response;
    })
    this.currentObj = {};
  }

  pushData(record: any) {
    if (!this.updateMode) {
      if (Object.keys(record).length>0) {
        delete this.currentObj.id;
        this.api.putData(record).subscribe((response) => {
          this.getData();
          this.currentObj = {};
        });
      }
    } else {
      this.currentObj.name = record.name;
      this.currentObj.company = record.company;
      this.api.updateRecord(this.currentObj).subscribe((response) => {
        this.updateMode = !this.updateMode;
        this.getData();
      });
    }
  }

  updateData(user: any) {
    this.currentObj = user;
    this.updateMode = !this.updateMode;
  }

  deleteData(userId: any) {
    this.api.deleteRecord(userId).subscribe(() => { this.getData(); });
  }

}
