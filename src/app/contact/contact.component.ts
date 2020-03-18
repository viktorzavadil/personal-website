import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.sass' ]
})
export class ContactComponent implements OnInit {

  constructor(private clipboard: Clipboard) {
  }

  ngOnInit(): void {
  }

  copyAddress() {
    this.clipboard.copy('viktor@viktorzavadil.cz');
  }
}
