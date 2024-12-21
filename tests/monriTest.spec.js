// monriTest.spec.js
import { test } from '@playwright/test';
import { testData } from '../testData';
import LoginPage from '../pages/loginPage';
import AccountDashboard from '../pages/accountDashboard';


test.describe('Main tasks', () => {

    test('Verify main tasks - Login and verify balance', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const accountDashboard = new AccountDashboard(page);
    
        await loginPage.navigate();
        await loginPage.performLogin(testData.valid_user.email, testData.valid_user.password);
        await accountDashboard.navigate();
        await accountDashboard.verifyPointsBalance();
    });
});

test.describe('Other login tests - bonus', () => {

    let loginPage; // Declare loginPage here so it can be accessed in all tests
    test.beforeEach(async ({ page }) => {  // This will run before each test in this test suite - navigate to login page
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Verify alert message is displayed when user enters invalid email', async ({ page }) => {

        await loginPage.performLogin(testData.invalid_user.email, testData.valid_user.password);
        await loginPage.verifyInvalidCredsErrorMessage();
    });

    test('Verify alert is displayed when user enters invalid password', async ({ page }) => {
    
        await loginPage.performLogin(testData.valid_user.email, testData.invalid_user.password);
        await loginPage.verifyInvalidCredsErrorMessage();
    });

    test('Verify alert is displayed when user enters and then deletes email and password', async ({ page }) => {
    
        await loginPage.enterEmailPassword(testData.valid_user.email, testData.valid_user.password);
        await loginPage.clearEmailPassword();
        await loginPage.verifyEmailPasswordRequiredErrorMessage();
    });

}); 