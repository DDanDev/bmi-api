import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bmiInfo } from './bmi';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should return weight 80, height 1.8, bmi 24.69', () => {
            expect(appController.getBMI('80', '1.80')).toStrictEqual({
                weight: 80,
                height: 1.8,
                bmi: 24.69,
                evaluation: 'Optimum Range',
            });
        });
    });
});
