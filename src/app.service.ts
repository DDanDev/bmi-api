import { Injectable } from '@nestjs/common';
import { bmiInfo } from './bmi';

@Injectable()
export class AppService {
    getBMI(weight: string, height: string): bmiInfo {
        // validate input!!
        const weightN = parseFloat(weight);
        const heightN = parseFloat(height);
        if (isNaN(weightN) || isNaN(heightN)) {
            return {
                weight: 0,
                height: 0,
                bmi: 0,
                evaluation: 'Invalid Input',
            };
        }

        // calculate bmi
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
