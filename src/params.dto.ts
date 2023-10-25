import { Type } from 'class-transformer';
import { IsPositive } from 'class-validator';

export class GetBMIParams {
    @Type(() => Number)
    @IsPositive()
    weight: string;

    @Type(() => Number)
    @IsPositive()
    height: string;
}
