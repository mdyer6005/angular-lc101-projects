import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = "Links I like"
  favLinks = ["https://isthereanydeal.com/", "https://www.rpgwatch.com/"];

  constructor() { }

  ngOnInit() {
  }

}
