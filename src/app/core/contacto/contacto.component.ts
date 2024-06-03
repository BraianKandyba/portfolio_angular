import {  Component, } from '@angular/core';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent  {

  copiarAlPortapapeles() {
    const texto = (document.querySelector('.contacto-conten p') as HTMLElement).innerText;
    navigator.clipboard.writeText(texto).then(() => {
      console.log('copiado')
      
    }).catch(err => console.log('Error al copiar: ' + err));
  }


}
