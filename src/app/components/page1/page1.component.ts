import { LiveDataService } from './../../services/live-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [LiveDataService]
})
export class Page1Component implements OnInit {

  liveData = [];

  constructor(private http: HttpClient, private livedataServ: LiveDataService) {
   }

  ngOnInit(): void {
    this.livedataServ.getData().subscribe((data: []) => {
    this.liveData = data;
    console.log(this.liveData);
  });

  }
}
