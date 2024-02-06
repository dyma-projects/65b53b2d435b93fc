import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User{
  nom:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() { }

  public addUser(user: string){
    this.users$.subscribe((users:string[]) => {
      users.push(user)
      console.log(users);
    })
  }
}
