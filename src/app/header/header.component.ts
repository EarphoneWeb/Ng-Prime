import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from '../core/services/route-state.service';
import { SessionService } from '../core/services/session.service';
import { User } from '../core/models/user.model';
import { notification } from '../core/models/notification.model';
import { UserIdleService } from 'angular-user-idle';
import { ThemeService } from '../core/services/theme.service';
import { ApplicationStateService } from '../core/services/application-state.service';
import { MenuService } from '../core/services/menu.service';
import { CustomMenuItem } from '../core/models/menu-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  displayNotifications: boolean;

  notifications: notification[];

  isMenuVisible: boolean;

  isMobileResolution: boolean = false;

  displaySidebarMenu: boolean = false;

  menuItems: CustomMenuItem[];

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private renderer: Renderer2,
    private themeService: ThemeService,
    private applicationStateService: ApplicationStateService,
    private menuService: MenuService) {
    this.displayNotifications = false;
    this.isMenuVisible = true;
    this.menuItems = menuService.getMenuList();

    var selectedTheme = this.sessionService.getItem("selected-theme");
    if (selectedTheme) {
      this.selectTheme(selectedTheme);
    }
  }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.notifications = [];
    for (var i = 1; i <= 5; i++) {
      var notificationObj = new notification("Message " + i, new Date(), null)
      this.notifications.push(notificationObj);
    }

    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });

    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.sessionService.removeItem('currentUser');
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    if (this.isMobileResolution) {
      this.displaySidebarMenu = !this.displaySidebarMenu;
      return;
    }

    this.isMenuVisible = !this.isMenuVisible;
    const menuElement: HTMLElement = document.getElementById('navigation-menu');
    if (this.isMenuVisible) {
      this.renderer.removeStyle(menuElement, 'display');
    } else {
      this.renderer.setStyle(menuElement, 'display', 'none');
    }
  }

  selectTheme(theme: string) {
    this.sessionService.setItem("selected-theme", theme);
    this.themeService.selectTheme(theme);
  }

}
