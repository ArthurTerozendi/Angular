import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  nomeArquivo = "Choose file...";

  files: Set<File>;
  inscricao : Subscription


  constructor(
    private uploadFileService : UploadFileService
  ) { }

  ngOnInit(): void {
  }

  onChange(evento) {
    console.log(evento.srcElement.files);
    const selectedFiles = <FileList>evento.srcElement.files;
    
    let filesName = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      filesName.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    this.nomeArquivo = filesName.join(', ');
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.inscricao =  this.uploadFileService.upload(this.files, environment.BASE_URL + '/uploads').subscribe(
        response => console.log('upload concluído')
      )
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
