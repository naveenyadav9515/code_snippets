import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileServiceService } from './file-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fileToUpload: File | null = null;

  constructor(private http: HttpClient, private fileservice: FileServiceService) { }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    if (this.fileToUpload) {
      this.fileservice.postFile(this.fileToUpload).subscribe(data => {
        // do something, if upload success
      }, error => {
        console.log(error);
      });
    }
  }

}
