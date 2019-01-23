import { Component, OnInit, ComponentFactoryResolver, Input, ViewChild, AfterViewInit, Type, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-contenedor-modal',
  templateUrl: './contenedor-modal.component.html',
  styleUrls: ['./contenedor-modal.component.css']
})
export class ContenedorModalComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) { }

  childComponentType: Type<any>;

  @ViewChild(AdDirective) adHost: AdDirective;

  ngOnInit() {

  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }
  private loadChildComponent(componentType: Type<any>) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
