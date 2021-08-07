import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://thumbs-prod.si-cdn.com/SSVHtiWrf3UNdk9bOJSSvk5hi2s=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/3c/76/3c76e11d-2584-486c-a257-0a171734c86c/scarab-2490586_960_720.jpg';
  image3 = 'https://extensionentomology.tamu.edu/files/2017/06/Dung-Beetle.jpg';

  constructor() { }

  ngOnInit() {
  }

}