
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

// Angular Material
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule }  from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { IonicModule } from '@ionic/angular';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import { ToastrModule } from "ngx-toastr";
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatRippleModule,
    MatBadgeModule,
    MatMenuModule,
    MatChipsModule,
    IonicModule,
    MatProgressBarModule,
    ClipboardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    NgxJsonViewerModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatRippleModule,
    MatBadgeModule,
    MatMenuModule,
    MatChipsModule,
    IonicModule,
    MatProgressBarModule,
    ClipboardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule
  ],
  declarations: [

  ]
})
export class SharedModule {}