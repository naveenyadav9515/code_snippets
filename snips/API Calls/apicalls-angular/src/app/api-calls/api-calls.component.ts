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
  currentObj = {
    id: 0,
    name: '',
    company: ''
  };
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.getData().subscribe((response: records[]) => {
      this.tableData = response;
      console.log(this.tableData)
    })
    this.currentObj.name='';
    this.currentObj.company='';
  }

  pushData(record: any) {
    console.log(this.updateMode);
    if (!this.updateMode) {
      if (record.name != "" && record.company != "") {
        this.api.putData(record).subscribe((response) => {
          console.log(response);
          this.getData();
        });
      }
    } else {
      this.currentObj.name = record.name;
      this.currentObj.company = record.company;
      this.api.updateRecord(this.currentObj).subscribe((response) => {
        console.log(response);
        this.updateMode = !this.updateMode;
        this.getData();
      });

    }
  }

  updateData(user: any) {
    this.currentObj = user;
    this.updateMode = !this.updateMode;
  }

  patchData() {

  }

  deleteData(userId: any) {
    this.api.deleteRecord(userId).subscribe(() => { });
    this.getData();
  }

}
