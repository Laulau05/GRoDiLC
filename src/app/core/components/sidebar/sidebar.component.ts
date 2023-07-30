import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ADMIN_ROUTES, EMPLOYE_ROUTES} from "../../routes/admin-route";
import {SubSideMenu} from "../../models/side-bar.model";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit, AfterViewInit{

  @Input() isAdmin: boolean = true;
  content: Array<SubSideMenu> = []
  current: string = ''

  constructor(private router: Router){}


  ngOnInit(): void {
    this.current = this.router.url;
    this.content = !this.isAdmin ? EMPLOYE_ROUTES : ADMIN_ROUTES
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((value: any) => {
      if(value instanceof NavigationEnd){
        this.current = value.url
      }
    })
  }

}
