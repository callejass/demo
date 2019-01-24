import { Observable, Subject } from 'rxjs';

export class CustomModalRef {



    private readonly _afterClosed = new Subject<any>();
    afterClosed: Observable<any> = this._afterClosed.asObservable();
    constructor() { }


    accept(result?: any) {
        this._afterClosed.next({
            tipo: 'ACCEPT',
            result: result
        });
    }
    cancel(result: string) {
        this._afterClosed.next({
            tipo: 'CANCEL',
            result: result
        });
    }
    
    // close(result?: any) {
    //     this._afterClosed.next(result);
    // }

}
