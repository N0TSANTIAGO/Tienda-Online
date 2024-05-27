// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();

  constructor(

  ) { }

  setAdmin(isAdmin: boolean): void {
    this.isAdminSubject.next(isAdmin);
  }

  getAdmin(): boolean {
    return this.isAdminSubject.value;
  }
}