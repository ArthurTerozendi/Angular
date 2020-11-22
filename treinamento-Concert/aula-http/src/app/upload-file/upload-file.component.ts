import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  nomeArquivo = "Choose file...";

  constructor() { }

  ngOnInit(): void {
  }

  onChange(evento) {
    console.log(evento.srcElement.files);
    const selectedFiles = <FileList>evento.srcElement.files;
    
    let filesName = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      filesName.push(selectedFiles[i].name);
    }
    this.nomeArquivo = filesName.join(', ');
  }

}
