import {Machine} from '../shared/Machine';
import { Injectable } from '@angular/core';

@Injectable()
export class MachineService {
    machines: Machine[] = [
        new Machine('Vask A', 1),
        new Machine('Vask B', 1),
        new Machine('Tør A', 2),
        new Machine('Tør B', 2),
    ];
}
