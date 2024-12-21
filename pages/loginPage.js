// loginPage.js
import { expect } from '@playwright/test';
import { CONFIG } from '../config';

class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#loginButton');
        this.invalidCredsErrorMessage = page.locator('div', { hasText: 'Invalid credentials' });
        this.emailRequiredErrorMessage = page.locator('text=Email address is required');
        this.passwordRequiredErrorMessage = page.locator('text=Password is required');
    }

    async navigate() {
        await this.page.goto(`${CONFIG.MAIN_URL}${CONFIG.ENDPOINTS.SIGN_IN}`); // This means https://www.exampleurl.com/sign-in
        await expect(this.page).toHaveURL(`${CONFIG.MAIN_URL}${CONFIG.ENDPOINTS.SIGN_IN}`);
      }
    
      async performLogin(username, password) {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.page).toHaveURL(CONFIG.MAIN_URL); // This means https://www.exampleurl.com/
        await expect(this.webAppHeaderTitle).toBeVisible();
        await expect(this.webAppHeaderTitle).toHaveText('Web Application');
      }

      async verifyInvalidCredsErrorMessage() {
        await expect(this.invalidCredsErrorMessage).toBeVisible();
    }

    async enterEmailPassword(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async clearEmailPassword() {
        await this.emailInput.clear();
        await this.passwordInput.clear();
    }    

    async verifyEmailPasswordRequiredErrorMessage() {
        await expect(this.emailRequiredErrorMessage).toBeVisible();
        await expect(this.passwordRequiredErrorMessage).toBeVisible();
    }

}

export default LoginPage;