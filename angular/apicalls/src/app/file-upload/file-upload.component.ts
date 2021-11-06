import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  ngOnInit(): void {
  }

  file: File | null = null;
  url:string = this.api.url;
  constructor(private api: ApiService) {

  }

  selectFile(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    console.log("before api call")
    this.api.upload(this.file).subscribe((response: any) => {
      this.url = response.Url;
      this.api.url = this.url;
    });
  }

}
