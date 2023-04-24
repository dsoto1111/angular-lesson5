import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
    numberVariable: Number = 2;
    disableProperty: boolean = false;
    typeProperty!: string;
    srcProperty: string = '';
    hiddenProperty: boolean = true;
    colSpanProperty: string = '1';

    sendNumber(): Number {
        return 2 + 2;
    }

    constructor(private el: ElementRef) {
        console.log(el.nativeElement);

        setTimeout(() => {
            this.disableProperty = true;
            this.typeProperty = 'date';
            this.srcProperty = '../../assets/chillin-doggie.jpg';
            this.hiddenProperty = false;
            this.colSpanProperty = '2';
        }, 5000);
    }
}
