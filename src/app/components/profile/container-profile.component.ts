import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-container-profile',
  templateUrl: './container-profile.component.html',
  styleUrls: ['./container-profile.component.scss']
})
export class ContainerProfileComponent implements OnInit {

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
