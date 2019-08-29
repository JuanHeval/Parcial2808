import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial2808';

  elementos: any =[

    {nombre:'Carbono', simbolo: 'C', numeroat: '6', Peso: '12.01', metal: 2, catego: 'Alcalino',boool: true},
    {nombre:'Nitrogeno', simbolo: 'N', numeroat: '7', Peso: '14.02', metal: 2, catego: 'Gas noble',boool: false},
    {nombre:'Oxígeno', simbolo: 'O', numeroat: '8', Peso: '15.99', metal: 2, catego: 'Alcalino',boool: true},
    {nombre:'Flúor', simbolo: 'F', numeroat: '9', Peso: '18.99', metal: 2, catego: 'Alcalino',boool: true},
    {nombre:'Neón', simbolo: 'Ne', numeroat: '10', Peso: '20.17', metal: 2, catego: 'Alcalino',boool: true},
    {nombre:'Sodio', simbolo: 'Na', numeroat: '11', Peso: '22.98', metal: 2, catego: 'Alcalino',boool: true},
    {nombre:'Magnecio', simbolo: 'MG', numeroat: '12', Peso: '24.30', metal: 2, catego: 'Alcalino',boool: true},
    {nombre:'Aluminio', simbolo: 'Al', numeroat: '13', Peso: '26.98', metal: 2, catego: 'Alcalino',boool: true},
    {nombre:'Fòsforo', simbolo: 'P', numeroat: '15', Peso: '30.97', metal: 2, catego: 'Alcalino',boool: true},
   ]


}
