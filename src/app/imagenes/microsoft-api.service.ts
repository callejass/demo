import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MicrosoftApiService {
  private _apiconfig: any = {
      urlbase: 'https://westeurope.api.cognitive.microsoft.com',
      key: 'bdb1e60308f245abbcaa80617360cc91'
  };
  // private _apikey = 'bdb1e60308f245abbcaa80617360cc91';
  // private _url = '';


  constructor(private httpClient: HttpClient) { }

  getFaces(imageDataUrl): Observable<any> {
    // const apikey = 'bdb1e60308f245abbcaa80617360cc91';
    // tslint:disable-next-line:max-line-length
    // const url = 'https://westeurope.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise';

    const url = `${this._apiconfig.urlbase}/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise`;
    return this.sendRequest(imageDataUrl, url);
  }

  getInfo(imageDataUrl): Observable<any> {
    const url = `${this._apiconfig.urlbase}//v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise`;
    return this.sendRequest(imageDataUrl, url);
  }

  private sendRequest(imageDataUrl: string, apiUrl: string) {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Ocp-Apim-Subscription-Key', this._apiconfig.key);
    headers = headers.set('Content-Type', 'application/octet-stream');

    return this.httpClient.post<any>(apiUrl, this.blobFromDataUrl(imageDataUrl), {headers: headers})
    .pipe(
      map(response => {
        return response;
      })
    );
  }



  private blobFromDataUrl(dataURL) {
    const BASE64_MARKER = ';base64,';
    let parts: string[];
    let contentType: string;
    let raw: any;
    if (dataURL.indexOf(BASE64_MARKER) === -1) {
        parts = dataURL.split(',');
        contentType = parts[0].split(':')[1];
        raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    } else {
      parts = dataURL.split(BASE64_MARKER);
      contentType = parts[0].split(':')[1];
      raw = window.atob(parts[1]);
      const rawLength = raw.length;
      const uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    }
}
}
