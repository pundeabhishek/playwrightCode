import { test, expect } from '@playwright/test';
import { setToken } from '../../utils/authStore.js';

payload : ''
test.beforeAll(async () => {
  console.log('Starting API and Web Automation Integration Tests');
  
  const apiContext = await test.request.newContext({});
  const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
    data: {
      userEmail: 'abhishekpunde28@gmail.com',
      userPassword: 'AbhishekPunde@29'
    }
  });
  expect(loginResponse.ok()).toBeTruthy();
  console.log(`Login API response status: ${loginResponse.status()}`);
  const loginResponseJson = await loginResponse.json();
  setToken(loginResponseJson.token);

});

test.beforeEach(async () => {
  console.log('Setting up for a new test');
});

test.afterEach(async () => {
  console.log('Test completed');
});

test.afterAll(async () => {     

  console.log('All API and Web Automation Integration Tests completed');
});
