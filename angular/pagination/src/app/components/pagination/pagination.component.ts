import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  data = {};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((response: any) => {
      console.log(response);
      this.data = response;
    })
  }

}
