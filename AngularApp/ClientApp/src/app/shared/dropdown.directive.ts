import { Directive, HostListener, HostBinding } from '@angular/Core';

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
