import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://127.0.0.1:8000/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor() { }
}
