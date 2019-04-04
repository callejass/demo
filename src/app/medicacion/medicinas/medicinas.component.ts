import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-medicinas',
  templateUrl: './medicinas.component.html',
  styleUrls: ['./medicinas.component.scss']
})
export class MedicinasComponent implements OnInit, OnDestroy, AfterViewInit {
  


  @ViewChild('capamedicinas', {read: ElementRef}) capamedicinas: ElementRef;

  movible = false;
  private medicinasSubscription: Subscription;

  medicinas: Array<any>;

  constructor(private dataService: DataService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.medicinasSubscription = this.dataService.GetMedicinas().subscribe(medicinas => {
      this.medicinas = medicinas;
    });
  }

  ngAfterViewInit(): void {
   // this.renderer.addClass(this.capamedicinas.nativeElement,'');
    //
    // tslint:disable-next-line:max-line-length
    // const x = this.capamedicinas.nativeElement.getBoundingClientRect().top;
    //  const y = this.capamedicinas.nativeElement.getBoundingClientRect().left;
    // console.log(x + ',' + y);
    // debugger;


  }


  ngOnDestroy(): void {
    this.medicinasSubscription.unsubscribe();
  }

  drag(ev) {
    // ev.dataTransfer.setData('text', ev.target.innerText);
    const obj = {id: ev.target.dataset.value, descripcion: ev.target.innerText};
    ev.dataTransfer.setData('text/plain', JSON.stringify(obj));
  }

}
