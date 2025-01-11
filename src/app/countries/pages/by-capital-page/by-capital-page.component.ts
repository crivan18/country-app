import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public searchByCapital(term: string): void {
    console.log(ByCapitalPageComponent.name);
    console.log({term});
  }

}
