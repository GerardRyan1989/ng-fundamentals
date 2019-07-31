import { Component } from '@angular/core'

@Component({
  templateUrl: `./navbar.component.html`,
  selector: 'app-nav-bar',
  styles: [`
  .nav.navbar-nav {font-size: 15px;}
  #searchForm {margin-right: 100px;}
  @media (max-width: 1200px) {#searchForm {dispaly:none}}
  `]
})

export class NavBarComponent {

}
