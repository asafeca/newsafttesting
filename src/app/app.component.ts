import { Component } from '@angular/core';
import * as saft from 'saft-file-manager'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsaft';
  obj: any

  constructor() {

  }

  ngOnInit() {
    this.title = 'Loucos de ...'

  }

  loadFile(e: any) {

    this.obj = e

  }

  validate() {

    this.obj.target.files[0].arrayBuffer().then((data: Uint8Array) => {

      const _result = saft.parseFile(data)
      console.log(_result)

    })

  }


}
