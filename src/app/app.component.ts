import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService} from './data.service';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  users: User[] = [];
  constructor(private dataSvc: DataService){}
  
  ngOnInit(): void {
   this.dataSvc.getAllUsers()
   .pipe(
     tap((res: User[]) => this.users = res)
   )
   .subscribe()
  }


}
