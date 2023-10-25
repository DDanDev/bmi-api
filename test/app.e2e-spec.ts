import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/80/1.80')
            .expect(200)
            .expect({ weight: 80, height: 1.8, bmi: 24.69, evaluation: 'Optimum Range' });
    });

    it('/ WRONG GET)', () => {
        return request(app.getHttpServer())
            .get('/-80/1.80a')
            .expect(400)
            .expect({
                message: ['weight must be a positive number', 'height must be a positive number'],
                error: 'Bad Request',
                statusCode: 400,
            });
    });
});
