import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {

  public data: any;
  constructor(private api: SharedService) { }

  ngOnInit(): void {
  }
  getData() {
      this.api.getUsers().subscribe(res => {
        this.data = res;
      })
  }

}
