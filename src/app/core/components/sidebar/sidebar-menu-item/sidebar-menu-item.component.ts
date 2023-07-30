import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DashboardIconComponent} from "../../../../shared/svg/dashboard-icon/dashboard-icon.component";
import {Router} from "@angular/router";
import {SideMenu} from "../../../models/side-bar.model";

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styles: [
  ]
})


export class SidebarMenuItemComponent implements OnInit, OnChanges{

  @Input()
  item: SideMenu | any = null
  isShow: boolean = false
  active: boolean = false
  withSubContent: boolean = false
  @Input()
  currentPath: string = ''
  @Output() onItemClick = new EventEmitter()
  da: DashboardIconComponent = new DashboardIconComponent()

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.withSubContent = (this.item?.sub_content || []).length > 0
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['currentPath']
    if(change){
      const value = change.currentValue
      if(this.item?.link) {
        const d = value.split('/')
        const d2 = this.item.link.split('/')
        this.active = d2[2] === d[2]
        this.isShow = this.active
      }
    }
  }

  /**
   * Toggle sub menu-icon content or navigate to other screen
   */
  toggleSubContent() {
    if (this.item && this.item.sub_content.length === 0) {
      this.goTo(this.item.link)
      return
    }
    this.isShow = !this.isShow
  }

  /**
   * Navigate to other screen
   * @param path
   */
  goTo(path?: string) {
    if (path) {
      this.onItemClick.emit(path)
      this.router.navigate([path])
    }
  }

  /**
   * Checked if sub path is inside the current path.
   * @param path
   */
  checkPath(path: string){
    return this.currentPath.includes(path)
  }

}
