import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../users.service';
import {Subscription} from 'rxjs';


declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor( private userService: UsersService) { }
  utilisateurs: any[] = [];
  sub: Subscription[] = [];
  errorMessage: string;
  hasError = false;
  success = false;
  ngOnInit(): void {
    this.hasError = false;
    this.sub.push(this.userService.getAllUsers().subscribe((list: any) => {
      this.utilisateurs = list.users;
      console.log(this.utilisateurs);
    }));
  }

  ngOnDestroy(): void {
    this.sub.map(s => s.unsubscribe());
  }
  deleteUser(id: number): void {
    this.sub.push(this.userService.deleteUser(id).subscribe(
      res => {
        if (res.status === 'failure') {
          this.hasError = true;
          this.errorMessage = res.message;
        }

        if (res.status === 'success') {
          this.success = true;
          this.errorMessage = res.message;
        }

        this.utilisateurs = res.users;
        console.log(this.utilisateurs);
        $ ('.alert').delay(1000).slideUp(1500);
      }
    ));
  }
}

