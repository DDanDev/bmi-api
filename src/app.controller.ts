import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { bmiInfo } from './bmi';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(':weight/:height')
    getBMI(@Param('weight') weight: string, @Param('height') height: string): bmiInfo {
        return this.appService.getBMI(weight, height);
    }
}
