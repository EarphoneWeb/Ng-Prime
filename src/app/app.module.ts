// angular default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Prime NG
import { MessageService } from 'primeng/api';
import { NgPrimeModule } from './app.ngprime.module'
// app related
import { AppComponent } from './app.component';
import { AuthGuard } from './core/gaurds/auth.gaurd';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoaderService } from './core/services/loader.service';
import { ToastService } from './core/services/toast.service';
import { RouteStateService } from './core/services/route-state.service';
import { SessionService } from './core/services/session.service';
import { HeaderBreadcrumbComponent } from './header-breadcrumb/header-breadcrumb.component';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog/contact-us-mail-dialog.component';
import { UserIdleModule } from 'angular-user-idle';
import { ThemeService } from './core/services/theme.service';
import { ApplicationStateService } from './core/services/application-state.service';
import { UserService } from './core/services/user.service'
import { MenuService } from './core/services/menu.service';
import { EmployeeService } from './employees/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    EmployeesComponent,
    AboutusComponent,
    ContactusComponent,
    DepartmentComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    RegisterUserComponent,
    HeaderBreadcrumbComponent,
    ContactUsMailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgPrimeModule,
    UserIdleModule.forRoot({ idle: 300, timeout: 1, ping: null })
  ],
  providers: [
    MessageService,
    AuthGuard,
    LoaderService,
    ToastService,
    RouteStateService,
    SessionService,
    ThemeService,
    ApplicationStateService,
    UserService,
    MenuService,
    EmployeeService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ContactUsMailDialogComponent
  ]
})
export class AppModule { }
