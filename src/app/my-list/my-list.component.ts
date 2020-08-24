import { Component, OnInit, OnDestroy } from '@angular/core';
import { CreateList } from '../services/add-list.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { LocalStorage } from '../services/local-storage.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
  providers: [CreateList]
})

export class MyListComponent implements OnInit, OnDestroy {

  public error: boolean;
  listName: string;
  request: Subscription;
  listDescription: string;

  constructor(private createList: CreateList, private localStorage: LocalStorage) { }

  ngOnInit(): void {

  }

  createListRequest(form: NgForm) {
    const value = form.value;
    this.request = this.createList.createListRequest(value.listName, value.listDescription)
      .subscribe((res) => {
        form.reset();
        alert(`List with ID ${res} was created!`);
        this.localStorage.setElement('list', res);
      },
        error => {
          this.error = error.message;
        }
      );


  }

  ngOnDestroy(): void {
    this.request.unsubscribe;
  }

}
