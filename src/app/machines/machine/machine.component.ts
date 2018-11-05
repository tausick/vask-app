import { Component, OnInit, Input, Output } from '@angular/core';
import { Machine } from 'src/app/shared/machine';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  @Input() machine: Machine;
  @Output() start: EventEmitter<Machine> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.start.emit(this.machine);
  }

}
