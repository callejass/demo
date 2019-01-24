// tslint:disable-next-line:max-line-length
import { Component, OnInit, ComponentFactoryResolver, Input, ViewChild, AfterViewInit, Type, ChangeDetectorRef, OnDestroy, ComponentRef } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { CustomModalRef } from '../custom-modal-ref';

@Component({
  selector: 'app-contenedor-modal',
  templateUrl: './contenedor-modal.component.html',
  styleUrls: ['./contenedor-modal.component.css']
})
export class ContenedorModalComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private customModalRef: CustomModalRef) { }

  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;

  @ViewChild(AdDirective) adHost: AdDirective;

  @Input() titulo;

  ngOnInit() {

  }



  ngOnDestroy(): void {
    if (this.componentRef) {
      
      this.componentRef.destroy();
    }
  }
  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }
  private loadChildComponent(componentType: Type<any>) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  close(reason: string) {
    this.customModalRef.cancel(reason);
  }


}
