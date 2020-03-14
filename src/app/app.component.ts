import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private _translocoService:TranslocoService) { }
  name = 'Angular';
   cambiarIdioma() {
    const idiomas = this._translocoService.getAvailableLangs();
    const idiomaActual = this._translocoService.getActiveLang();
    let cambiarA: string;
    idiomas.forEach(idioma => {
      if (idioma !== idiomaActual) {
        cambiarA = idioma;
      }
    })
    this._translocoService.setActiveLang(`${cambiarA}`)
  }
}
