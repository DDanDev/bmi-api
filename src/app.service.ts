import { Injectable } from '@nestjs/common';
import { bmiInfo } from './bmi';

@Injectable()
export class AppService {
    getBMI(weight: string, height: string): bmiInfo {
        const bmi = parseFloat(weight) / parseFloat(height) ** 2;
        return {
            weight: parseFloat(weight),
            height: parseFloat(height),
            bmi: bmi - (bmi % 0.01),
        };
    }
}
