import { Injectable } from '@angular/core';

@Injectable()
/**
 * menu service
 */
export class MenuService {
    getMenuList() {
        return [
            {
                Label: 'Home', Icon: 'fa fa-home', RouterLink: '/home/dashboard', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Employees', Icon: 'fa fa-users', RouterLink: '/home/employees', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Departments', Icon: 'fa fa-sitemap', RouterLink: '/home/departments', Childs: null, IsChildVisible: false
            },
            {
                Label: 'About Us', Icon: 'fa fa-info-circle', RouterLink: '/home/aboutus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Contact Us', Icon: 'fa fa-envelope', RouterLink: '/home/contactus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Menu Level 1', Icon: 'fa fa-cart-plus', RouterLink: null, Childs: [
                    { Label: 'Menu Level 1.1', Icon: 'fa fa-address-book', RouterLink: null, Childs: null, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', Icon: 'fa fa-id-card', RouterLink: null, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', Icon: 'fa fa-address-book', RouterLink: null, Childs: null, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', Icon: 'fa fa-id-card', RouterLink: null, Childs: null, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            }
        ];
    }
}