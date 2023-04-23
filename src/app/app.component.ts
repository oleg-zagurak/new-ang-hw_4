import { Component } from '@angular/core';
import { DataModel } from './data-model';
import { mockPhone } from './mock-phone-data';
import { IPhoneNumber } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private model = new DataModel(mockPhone);
  private editIndex: number = 0;
  private editable: boolean = false;
  public showModal = false;
  public search: string = '';

  setEdit(index: number): void{
    this.editIndex = index;
    this.editable = true;
    this.showModal = true;
  }
  closeModal(status: boolean): void{
    this.showModal = status;
    this.editable = false;
  }
  get dataModel(): DataModel{
    return this.model
  }
  get editablePhone(): IPhoneNumber | null{
    if(this.editable){
      return this.model.data[this.editIndex]
    }
    return null
  }
}
