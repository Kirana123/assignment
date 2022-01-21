import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Platform, PopoverController } from '@ionic/angular';
import { UserIdleService } from 'angular-user-idle';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private userIdle: UserIdleService,
              private NgxService: NgxUiLoaderService,
              private readonly router: Router,
              public dialog: MatDialog,) {}

  ngOnInit() {}

}
