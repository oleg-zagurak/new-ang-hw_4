import { IPhoneNumber } from "./interfaces";

export class DataModel {
    private allData: IPhoneNumber[] = [];
    private numberTemplate: RegExp = /^[0-9]{10}$/;
    constructor(data?: IPhoneNumber[]){
        if(data !== undefined) this.allData = data;
    }
    add(item: IPhoneNumber): void{
        let valid = this.validate(item);
        if(valid && (this.getIndex(item) < 0)){
            this.allData.push(item)
        }
    }
    update(newItem: IPhoneNumber, oldItem: IPhoneNumber): void{
        let valid = this.validate(newItem);
        let index: number = this.getIndex(oldItem);
        if(valid && ( index >= 0 )){
           this.allData[index] = newItem;
        }
    }
    delete(item: IPhoneNumber): void{
        this.allData.splice(this.getIndex(item), 1)
    }
    validate(item: IPhoneNumber): boolean{
        let valid: boolean = (item.name.trim().length > 0) && (item.surname.trim().length > 0) &&
        (item.number.trim().length >= 10 && this.numberTemplate.test(item.number));
        return valid
    }
    getIndex(item: IPhoneNumber): number{
        return this.allData.findIndex(phone => phone.number === item.number);
    }
    get data(): IPhoneNumber[]{
        return this.allData
    }
}
