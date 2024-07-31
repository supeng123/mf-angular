import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private inject: Injector, private router: Router,
      private location: Location,
     private activateRoute: ActivatedRoute){

  }

  navigate(){
    this.router.navigate(['list'], { relativeTo: this.activateRoute})
    // console.log(this.activateRoute.url)
    
  }
}
