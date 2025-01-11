import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  public emitTerm(term: string): void {
    this.onValue.emit(term);
  }
}
