import { Injectable } from '@nestjs/common';
import { bmiInfo } from './bmi';

@Injectable()
export class AppService {
    getBMI(weight: string, height: string): bmiInfo {
        const weightN = parseFloat(weight);
        const heightN = parseFloat(height);

        const bmi = weightN / heightN ** 2;
        let evaluation: string;
        switch (true) {
            case bmi < 18.5:
                evaluation = 'Underweight';
                break;
            case bmi <= 24.9:
                evaluation = 'Optimum Range';
                break;
            case bmi <= 29.9:
                evaluation = 'Overweight';
                break;
            case bmi <= 34.9:
                evaluation = 'Class I Obesity';
                break;
            case bmi <= 39.9:
                evaluation = 'Class II Obesity';
                break;
            case bmi > 39.9:
                evaluation = 'Class III Obesity';
                break;
        }

        return {
            weight: weightN,
            height: heightN,
            bmi: bmi - (bmi % 0.01),
            evaluation,
        };
    }
}
