import * as expect from 'expect';
import * as request from 'supertest';
import * as mocha from 'mocha';

import { app } from '../server';

describe('static page', () => {
    it('should render static page', done => {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
});
