import { Component, OnInit } from '@angular/core';
import{HerolistService} from '../../services/herolist.service'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers:[HerolistService]
})
export class WishlistComponent implements OnInit {
      heroes;
  constructor(private herolistService:HerolistService) {
    this.heroes = this.herolistService.getData(); 
   }

  ngOnInit() {
  }

}
