import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['/ajout']);
    this.drawer.toggle();
  }

}
