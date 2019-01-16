import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { IPointRenderEventArgs, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { isArray } from 'util';

@Component({
    selector: 'images-image-information',
    templateUrl: './image-information.component.html',
    styleUrls: ['./image-information.component.css']
})
export class ImageInformationComponent implements OnInit, OnChanges {

    @Input() info = null;

    public emocionData: Object[] = [];
    public peloData: Object[] = [];
    public tooltipMappingName: 'country';
    public marker: Object = {
        dataLabel: {
            visible: true,
            position: 'Top', font: {
                fontWeight: '600',
                color: '#ffffff'
            }
        }
    };

    public primaryXAxis: Object = {
        title: 'Emoción',
        valueType: 'Category',
        majorGridLines: { width: 0 },
        enableTrim: true,
    };

    public primaryYAxis: Object = {
        minimum: 0,
        maximum: 100,
        labelFormat: Browser.isDevice ? '{value}' : '{value}%',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: {
            color: 'transparent'
        }
    };

    public pointRender(args: IPointRenderEventArgs): void {
        let materialColors: string[] = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
            '#ea7a57', '#404041', '#00bdae'];
        let fabricColors: string[] = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
            '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
        let bootstrapColors: string[] = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
            '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
        let highContrastColors: string[] = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',
            '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
            args.fill = materialColors[args.point.index % 10];
        } else if (selectedTheme === 'highcontrast') {
            args.fill = highContrastColors[args.point.index % 10];
        } else {
            args.fill = bootstrapColors[args.point.index % 10];
        }
    }
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        // args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    }


    constructor() { }

    ngOnInit() {
        if (this.info) {
            this.refresh();
        }
    }
    ngOnChanges() {
        if (this.info) {
            this.refresh();
        }
    }
    private refresh() {
        this.emocionData = this._getData(this.info.faceAttributes.emotion);
        this.peloData = this._getData(this.info.faceAttributes.hair.hairColor);
    }


    private _getData(origen): any[] {
        if (isArray(origen)) {
            let resul: any[] = [];
            resul = origen.map((element, index, todo) => {
                return {
                    x: element[Object.keys(element)[0]],
                    y: element[Object.keys(element)[1]] * 100,
                    country: element[0]
                };
            });
            return resul;
        } else {
            // es un objeto,
            let resul: any[] = [];
            Object.keys(origen).forEach((element) => {
                resul.push({
                    x: element,
                    y: this.info.faceAttributes.emotion[element] * 100,
                    country: element
                });
            });
            return resul;
        }
    }




}
