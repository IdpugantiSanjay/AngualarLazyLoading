import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor() {}

  get() {
    return 'GET IN BASE HTTP SERVICE';
  }
}
