import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class planPackagesService extends DataService {
  constructor(http: Http) { 
     super('https://polar-coast-41083.herokuapp.com/api/planpackages', http)
  }
}