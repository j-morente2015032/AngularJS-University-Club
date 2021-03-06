import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';
import { MembresiaService } from '../../../services/membresia.service';

//JQUERY
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-records',
  templateUrl: './record.component.html',
  
})
export class RecordsComponent implements OnInit {
  usuarios:any[] = [];
  membresias:any[] = [];
  users:any[] = [];
  members:any[] = [];

  constructor(
    private usuarioService:UsuarioService,
    private membresiaService:MembresiaService
  ) { }

  ngOnInit() {
    this.initializeAlDia();
  }

  //CARGAR PAGOS
  public initializeAlDia() {
    this.members.splice(0);
    var d = new Date();
    var n = d.getMonth() + 1;
    this.membresiaService.getAllMembresias().subscribe(data => {
      this.membresias = data;
        for(let y of this.membresias) {
          if(y.Mes === n.toString()) {
            console.log(y);
            this.members.push(y);
          }
        }  
    });  
  }

}