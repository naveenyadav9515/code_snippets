import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { saveAs as saveFile } from 'file-saver';
@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {
  @Input() url = this.api.url;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    console.log(this.url);
  }

  downloadFile() {
    this.api.getFile(this.url).subscribe((response) => {
      saveFile(response, 'myFile');
      console.log(response);
    });
  }

}
