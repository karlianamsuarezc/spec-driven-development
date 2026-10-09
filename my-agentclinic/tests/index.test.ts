import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
  it('returns AgentClinic is open for business', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('AgentClinic is open for business');
  });
});
