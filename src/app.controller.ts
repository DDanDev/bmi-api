import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { bmiInfo } from './bmi';
import { GetBMIParams } from './params.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(':weight/:height')
    @UsePipes(new ValidationPipe())
    getBMI(@Param() getBMIParams: GetBMIParams): bmiInfo {
        const { weight, height } = getBMIParams;
        return this.appService.getBMI(weight, height);
    }
}
