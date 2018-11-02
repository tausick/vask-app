import { Component, OnInit } from '@angular/core';
import { MachineService } from '../shared/machine.service';
import { Machine } from '../shared/machine';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css'],
  providers:[MachineService]
})
export class MachinesComponent implements OnInit {
  machines: Machine[];
  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.machines = this.machineService.machines;
  }

}
