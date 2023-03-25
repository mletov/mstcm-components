import { Component, Input,  } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HolydaysService{

  private _jsonURL = './assets/events.json';

  constructor(private http: HttpClient) {

  }

  public getJSON() {
    return this.http.get<any>(this._jsonURL);
  }

}
