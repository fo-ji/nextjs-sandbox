import { test, expect } from '@playwright/test';

test('should navigate to the login page', async ({ page }) => {
  // インデックスページからテストを開始 （ baseURL は playwright.config.ts の webServer を通じて設定される）
  await page.goto('/');
  // 'About Page' が含まれている要素を見つけてクリック
  await page.click('text=Login');
  // 新しい URL は "/about"になる（ baseURL はここで利用される）
  await expect(page).toHaveURL('/login');
  // 新しく遷移したページの h1 要素には "About Page" が含まれる
  await expect(page.locator('h1')).toContainText('Login');
});
