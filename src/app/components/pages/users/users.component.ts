import {OnInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'phone', 'street', 'city', 'state', 'country', 'postal_code'];
  dataSource;
  UserList: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('tableOneSort') tableOneSort: MatSort;

  constructor(private router: Router,
              private commonService : CommonService,
              private NgxService: NgxUiLoaderService,
              private toastr: ToastrService,
              public dialog: MatDialog){}

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.commonService.getBrewers().subscribe((data : any) => {
      this.UserList = data;
      this.dataSource = new MatTableDataSource(this.UserList);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.tableOneSort);
    });
  }

  getSearchbyCity(value){
    this.commonService.getSearchbyCity(value).subscribe((data : any) => {
      this.UserList = data;
      this.dataSource = new MatTableDataSource(this.UserList);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.tableOneSort);
    });
  }

  OncancelSearch() {
    this.getUser();
  }

  getSearchbyname(value){
    this.commonService.getSearchbyName(value).subscribe((data : any) => {
      this.UserList = data;
      this.dataSource = new MatTableDataSource(this.UserList);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.tableOneSort);
    });
  }

  Oncancel(){
    this.getUser();
  }

  getSearchbyState(value){
    this.commonService.getSearchbyState(value).subscribe((data : any) => {
      this.UserList = data;
      this.dataSource = new MatTableDataSource(this.UserList);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.tableOneSort);
    });
  }

  cancelSearch(){
    this.getUser();
  }

  refresh(){
    this.getUser();
  }

  OngetSortbysortasc(){
    this.commonService.getSortbyasc().subscribe((data : any) => {
      this.UserList = data;
      this.dataSource = new MatTableDataSource(this.UserList);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.tableOneSort);
    });
  }

  OngetSortbysortdesc(){
    this.commonService.getSortbydesc().subscribe((data : any) => {
      this.UserList = data;
      this.dataSource = new MatTableDataSource(this.UserList);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.tableOneSort);
    });
  }

}