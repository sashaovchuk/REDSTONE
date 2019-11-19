import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { NewRequest } from 'src/app/shared/classes/new-request.class';
import { IRequest } from 'src/app/shared/interfaces/request.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat = 49.811056;
  lng = 24.012966;
  constructor() {
  }
  choseLocation(event): void{
    this.lat = event.coords.lat
    this.lng = event.coords.lng
  }
  ngOnInit() {
  }
}
