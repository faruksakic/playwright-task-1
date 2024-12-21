// accountDashboard.js
import { expect } from '@playwright/test';
import { CONFIG } from '../config';

class AccountDashboard {
    constructor(page) {
        this.page = page;
        this.profileIcon = page.locator('#profileIcon');
        this.profileButton = page.locator('#profileButton');
        this.pointsBalance = page.locator('#pointsBalance');
    }

    async navigate() {
        await this.profileIcon.click();
        await this.profileButton.click();
        await expect(this.page).toHaveURL(`${CONFIG.MAIN_URL}${CONFIG.ENDPOINTS.PROFILE}`); // This means https://www.exampleurl.com/profile
    }

    async verifyPointsBalance() {
        await expect(this.pointsBalance).toBeVisible();
        expect(this.pointsBalance).toBe('1249'); // 1234 + (3 * 5)
    }

}

export default AccountDashboard;