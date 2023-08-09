import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { USERS, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styles: [
  ]
})
export class SidebarHeaderComponent implements OnInit, OnDestroy {

  currentUser: USERS | null = null;
  userSubscription: Subscription | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    //get current user
    this.userSubscription = this.usersService.currentUser$.subscribe(
      (user: USERS | any) => {
        this.currentUser = user?.data;
        console.log("==>", this.currentUser)
      }
    );
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
