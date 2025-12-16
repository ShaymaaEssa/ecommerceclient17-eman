import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ShopService } from 'src/app/core/services/shop.service';
import { IBrand } from 'src/app/shared/models/Brands';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  @Output() selectedBrandId = new EventEmitter();
  brand: IBrand[] = [];
  searchText: string = '';
  value: any;
  cities: any[] | undefined;

  selectedCity: any | undefined;
  constructor(private shopService: ShopService) {}

  ngOnInit() {}
  onBrandSelected() {
    this.shopService.getBrands().subscribe((response: any) => {
      this.brand = response;
      console.log(this.brand, 'brand');
    });
  }
  onSelectBrand(brandId: number) {
    this.selectedBrandId.emit(brandId);
  }
  onSearch() {}
  clearSearchText() {}
}
