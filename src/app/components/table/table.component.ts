import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataModel } from 'src/app/data-model';
import { IPhoneNumber, keys } from 'src/app/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() model!: DataModel;
  @Input() searchData: string = '';
  @Output() editIndex = new EventEmitter<number>();
  public phones: IPhoneNumber[] = [];
  public direction: boolean = true;
  private currentField: string = '';
  public type: keys | '' = '';
  constructor() { }

  ngOnInit(): void {
    this.phones = this.model.data;
  }
  edit(item: IPhoneNumber): void {
    let index: number = this.model.getIndex(item);
    if (index >= 0) this.editIndex.emit(index)
  }
  delete(item: IPhoneNumber): void {
    this.model.delete(item);
  }
  changeSort(event: Event, item: HTMLTableRowElement): void {
    let target!: HTMLSpanElement;
    let name!: keys | null;
    if (event.target) {
      target = event.target as HTMLSpanElement;
      name = target.getAttribute('data-name') as keys;
      if (name !== null) this.type = name;
    }
    if (name !== this.currentField) {
      this.direction = true;
      this.clearElements(item.childNodes);
      target.classList.add('active');
      target.dataset['direction'] = '1';
      if (name !== null) this.currentField = name;
    } else if(name === this.currentField){
      this.changeDirection(target)
    }
  }
  private changeDirection(element: HTMLSpanElement): void {
    if(this.direction){
      element.dataset['direction'] = '-1';
    } else {
      element.dataset['direction'] = '1';
    }
    this.direction = !this.direction;
  }
  private clearElements(arr: NodeListOf<ChildNode>): void {
    arr.forEach((item: ChildNode) => {
      if ((item as HTMLTableCellElement).children.length) {
        (item as HTMLTableCellElement).children[0].classList.remove('active');
      }
    })
  }
}