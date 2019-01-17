import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-urls',
  templateUrl: './listado-urls.component.html',
  styleUrls: ['./listado-urls.component.css']
})
export class ListadoUrlsComponent implements OnInit {

  @Output() selectEntry: EventEmitter<any> = new EventEmitter();

  urls: any[] = [
    {name: 'Culkin', url: 'https://dam.vanidades.com/wp-content/uploads/2019/01/900macaulay-culkin-amas-770x513.jpg'},
    {name: 'Ceremonia Oscars', url: 'https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-85019-oscar--2x1--940.jpg'},
    {name: 'Barça', url: 'https://img.depor.com/files/article_main/files/crop/uploads/2018/09/01/5b8a98d19459c.r_255742.0-0-624-312.jpeg'}
  ];

  constructor() { }

  ngOnInit() {
  }

  select(name: string) {
    this.selectEntry.emit(this.urls.filter(item => item.name === name)[0]);
  }

}
