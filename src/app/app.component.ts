import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial2808';

  elementos: any =[

    {nombre:'Carbono', simbolo: 'C', numeroat: '6', Peso: '12.01'},
    {nombre:'Nitrogeno', simbolo: 'N', numeroat: '7', Peso: '14.02'},
    {nombre:'Oxígeno', simbolo: 'O', numeroat: '8', Peso: '15.99'},
    {nombre:'Flúor', simbolo: 'F', numeroat: '9', Peso: '18.99'},
    {nombre:'Neón', simbolo: 'Ne', numeroat: '10', Peso: '20.17'},
    {nombre:'Sodio', simbolo: 'Na', numeroat: '11', Peso: '22.98'},
    {nombre:'Magnecio', simbolo: 'MG', numeroat: '12', Peso: '24.30'},
    {nombre:'Aluminio', simbolo: 'Al', numeroat: '13', Peso: '26.98'},
    {nombre:'Fòsforo', simbolo: 'P', numeroat: '15', Peso: '30.97'},
   ]


}
