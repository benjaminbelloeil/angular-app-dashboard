import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  viewChild,
  AfterViewInit,
  OnInit,
  Output,
  EventEmitter,
  output
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css',
})
export class NewTicketsComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{title: string; text: string}>()

  ngOnInit() {
    console.log("Init");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log("After View Init");
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    this.form?.nativeElement.reset();
  }
}
