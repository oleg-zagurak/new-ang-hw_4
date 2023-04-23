import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DataModel} from './../../data-model';
import { IPhoneNumber } from 'src/app/interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Input() model !: DataModel;
  @Input() mockData : IPhoneNumber | null = null;
  public subtitle: string = 'Add'
  public mock: IPhoneNumber = {
    name: '',
    surname: '',
    number: ''
  }
  constructor() { }

  ngOnInit(): void {
    if(this.mockData !== null){
      this.mock = { ...this.mockData};
      this.subtitle = 'Edit'
    }
  }
  add(): void{
    if(this.model.validate(this.mock)){
      if(this.mockData === null) {
        this.model.add(this.mock);
      } else {
        this.model.update(this.mock, this.mockData);
      }
    }
    this.closeModal();
  }
  closeModal(): void{
    this.close.emit(false)
  }
}
