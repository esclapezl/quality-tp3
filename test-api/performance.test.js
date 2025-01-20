import request from 'supertest';
import jwt from 'jsonwebtoken';
const os = require('os');

const baseUrl = 'http://127.0.0.1:3000';

describe('Enhanced API Performance Tests', () => {
  jest.setTimeout(30 * 60 * 1000);

  const iterations = 1000;
  const concurrentUsers = 1000;
  const testDuration = 5 * 60 * 1000; 
  let authToken;

  const measureResponseTime = async (requestFn) => {
    const start = Date.now();
    await requestFn();
    return Date.now() - start;
  };

  beforeAll(async () => {
    await waitForServer();
    const res = await request(baseUrl)
      .get('/login/')
      .send({ username: 'test', password: 'test' });
    expect(res.status).toBe(200);
    authToken = res.body.token;
  });

  describe('Login Endpoint Stress Tests', () => {
    it(`Handles ${iterations} rapid sequential login requests`, async () => {
      const times = [];

      for (let i = 0; i < iterations; i++) {
        const responseTime = await measureResponseTime(async () => {
          const res = await request(baseUrl)
            .get('/login/')
            .send({ username: 'test', password: 'test' });
          expect([200, 429]).toContain(res.statusCode);
        });
        times.push(responseTime);
      }

      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      console.log(`Average login response time: ${avgTime}ms`);
      expect(avgTime).toBeLessThan(500);
    });

    it(`Handles ${concurrentUsers} concurrent login requests`, async () => {
      const times = [];
      const batchSize = 50;
      const totalBatches = Math.ceil(concurrentUsers / batchSize);

      for (let i = 0; i < totalBatches; i++) {
        const batchPromises = Array(batchSize).fill().map(() => {
          const startTime = Date.now();
          return request(baseUrl)
            .get('/login/')
            .send({ username: 'test', password: 'test' })
            .then(res => {
              expect([200, 429]).toContain(res.statusCode);
              times.push(Date.now() - startTime);
            });
        });

        await Promise.all(batchPromises);
      }

      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      console.log(`Average concurrent login response time: ${avgTime}ms`);
      expect(avgTime).toBeLessThan(1000);
    });
  });

  describe('Stress Test Over Time', () => {
    it('Maintains consistent performance under sustained load', async () => {
      const startTime = Date.now();
      const results = [];

      while (Date.now() - startTime < testDuration) {
        const promises = Array(10).fill().map(() => measureResponseTime(async () => {
          const res = await request(baseUrl)
            .get('/login/')
            .send({ username: 'test', password: 'test' });
          expect([200, 429]).toContain(res.statusCode);
        }));

        const batchResults = await Promise.all(promises);
        results.push(...batchResults);
      }

      const avgTime = results.reduce((a, b) => a + b, 0) / results.length;
      console.log(`Average sustained load response time: ${avgTime}ms`);
      expect(avgTime).toBeLessThan(1000);
    });
  });

  describe('Error Handling Performance', () => {
    it('Should quickly handle invalid login attempts', async () => {
      const responseTime = await measureResponseTime(async () => {
        const res = await request(baseUrl)
          .get('/login/')
          .query({ name: 'invalid', password: 'invalid' });
        expect(res.statusCode).toBe(403);
      });
      
      console.log(`Invalid login response time: ${responseTime}ms`);
      expect(responseTime).toBeLessThan(200);
    });

    it('Should quickly handle invalid auth tokens', async () => {
      const responseTime = await measureResponseTime(async () => {
        const res = await request(baseUrl)
          .get('/auth/')
          .set('Authorization', 'invalid_token');
        expect(res.statusCode).toBe(403);
      });
      
      console.log(`Invalid auth response time: ${responseTime}ms`);
      expect(responseTime).toBeLessThan(100);
    });
  });

  describe('Feedback Performance', () => {
    it(`Should handle ${concurrentUsers} concurrent feedback submissions`, async () => {
      const times = [];
      const batchSize = 50;
      const batches = Math.ceil(concurrentUsers / batchSize);
      
      for (let i = 0; i < batches; i++) {
        const batchPromises = Array(Math.min(batchSize, concurrentUsers - i * batchSize))
          .fill()
          .map(() => {
            const startTime = Date.now();
            return request(baseUrl)
              .post('/feedback/')
              .send({
                name: `test${Math.floor(Math.random() * 1000)}`,
                message: `test`
              })
              .then(res => {
                expect([200, 429]).toContain(res.statusCode);
                times.push(Date.now() - startTime);
              });
          });
        
        await Promise.all(batchPromises);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      console.log(`Average feedback submission time: ${avgTime}ms`);
      console.log(`Total feedback submissions processed: ${times.length}`);
      console.log(`Success rate: ${times.length}/${concurrentUsers}`);
      
      expect(avgTime).toBeLessThan(2000); 
    });
  });

  describe('System Resource Usage', () => {
    it('Monitors CPU and memory usage during tests', async () => {
      const metrics = [];
      const monitorDuration = 30000;

      const interval = setInterval(() => {
        const cpuUsage = os.loadavg()[0];
        const memUsage = process.memoryUsage().heapUsed / 1024 / 1024;
        metrics.push({ cpu: cpuUsage, memory: memUsage });
      }, 1000);

      await new Promise(resolve => setTimeout(resolve, monitorDuration));
      clearInterval(interval);

      const avgCpu = metrics.reduce((sum, m) => sum + m.cpu, 0) / metrics.length;
      const peakMemory = Math.max(...metrics.map(m => m.memory));

      console.log(`Average CPU usage: ${avgCpu.toFixed(2)}%`);
      console.log(`Peak memory usage: ${peakMemory.toFixed(2)} MB`);

      expect(avgCpu).toBeLessThan(80);
      expect(peakMemory).toBeLessThan(1024);
    });
  });

  afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
});

const waitForServer = async () => {
  let retries = 5;
  while (retries > 0) {
    try {
      await request(baseUrl).get('/status');
      return;
    } catch {
      retries--;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  throw new Error('Server not ready');
};
