import { Component } from '@angular/core';
import listadePostres from 'src/assets/json/postres.json';
import listadeFirmas from 'src/assets/json/db.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



  Postres: any = listadePostres;
  Firmas: any = listadeFirmas;
}


