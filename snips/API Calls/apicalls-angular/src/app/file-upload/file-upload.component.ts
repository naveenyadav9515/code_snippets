import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { saveAs as saveFile } from 'file-saver';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  ngOnInit(): void {
  }

  file: File | null = null;
  url:string = '';
  constructor(private api: ApiService) {

  }

  selectFile(event: any) {
    this.file = event.target.files[0];
    console.log("file selected" + this.file)
  }

  uploadFile() {
    console.log("before api call")
    this.api.upload(this.file).subscribe((response: any) => {
      console.log(response);
      this.url = response.Url;
    });
  }

  downloadFile() {
    this.api.getFile(this.url).subscribe((response) => {
      saveFile(response,'myFile');
      console.log(response);
    });
  }

}
