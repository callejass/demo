import { Component, OnInit, Optional } from '@angular/core';
import { CustomModalConfig } from '../custom-modal.config';
import { CustomModalRef } from '../custom-modal-ref';
import { CustomModalService } from '../custom-modal.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {
  mensaje = '';
  icono = '';
  clase = '';
  constructor(@Optional() public config: CustomModalConfig,
              @Optional() public modalRef: CustomModalRef
              ) {
                
              }


  ngOnInit() {

  }

}
