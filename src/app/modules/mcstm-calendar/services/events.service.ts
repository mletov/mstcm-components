import { Component, Input,  } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EventModel } from '../models/event';

@Injectable()
export class EventsService{

  private _jsonURL = './assets/events.json';

  constructor(private http: HttpClient) {

  }

  public getJSON(): Promise<EventModel> {
    return this.http.get<any>(this._jsonURL)
    .toPromise();
  }

}
