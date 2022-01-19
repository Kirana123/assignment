import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment';

  constructor(
    // Angular Modules 
    private http: HttpClient,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getBrewers().subscribe((res: any) => {
      console.log(res)
    });
  }
}
