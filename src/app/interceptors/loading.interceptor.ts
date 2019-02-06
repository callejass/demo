import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private spinner: NgxSpinnerService) { }

    requestCounter = 0;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.requestCounter++;
        this.setLoading();

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.requestCounter--;
                    this.setLoading();
                    console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this.requestCounter--;
                this.setLoading();
                // this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
    }

    private setLoading() {
        console.log('Counter:' + this.requestCounter);
        if (this.requestCounter > 0) {
            this.spinner.show();
        } else {
            this.spinner.hide();
        }
    }
}
