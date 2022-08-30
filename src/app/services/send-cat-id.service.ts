import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendCatIdService {

  constructor() { }

  private _cid = new Subject<number>();
  cid$ = this._cid.asObservable();

  //method that accepts message from Select Category
  sendCategoryId(catId:number){ 
    this._cid.next(catId);
    return catId;

  }
}
