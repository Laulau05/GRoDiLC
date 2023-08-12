import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private usersService: UsersService, private authService: AuthService) { }

  ngOnInit(): void {
    //get current user
    this.userSubscription = this.usersService.currentUser$.subscribe(
      (user: USERS | any) => {
        this.currentUser = user?.data;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout(): void{
    this.authService.logout();
    location.reload()
  }

}
