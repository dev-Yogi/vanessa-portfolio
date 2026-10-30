import { test, expect } from '@playwright/test';

test.describe( 'Portfolio home page', () => {
    test( 'loads and has a title and main heading', async ({ page }) => {
        await page.goto( '/');

        //the browser tab title shouldn't be empty
        await expect(page).toHaveTitle(/.+/);

        //there should be exactly one visible h1
        await expect(page.locator('h1')).toHaveCount(1);
        await expect(page.locator('h1')).toBeVisible();
    });

    // Make the console-errors test work no matter which URL it's testing.
    // Make console test follow baseURL

    //{ page, baseURL }: Playwright gives the test the baseURL from your config as well as the page, so the filter now matches whatever site is being tested.
    test('has no console errors', async ({ page, baseURL }) => {
        const errors: string[] = [];
        page.on('console', (msg) => {
            const url = msg.location().url;
            // The ! in baseURL! tells TypeScript “this is definitely set.” It’s always set in your config.
            //isVercelOnly skips the analytics script that only exists on Vercel.
            const fromMySite = url.startsWith(baseURL!);
            const isVercelOnly = url.includes('/_vercel/');
            if (msg.type() === 'error' && fromMySite && !isVercelOnly) {
                errors.push(`${msg.text()} → ${url}`);
            }
        });

        await page.goto( '/');
        await page.waitForLoadState('load');

        expect(errors, errors.join('\n')).toEqual([]);
    });
    test( 'every image has alt text', async ({ page }) => {
        await page.goto( '/');
        
        const missingAlt = page.locator('img:not([alt])');
        await expect(missingAlt).toHaveCount(0);
    });
});


// tests the clicks each nav link and check that its section scrolls into view.
test.describe('Navigation', () => {
    const sections = [ 'About', 'Experience', 'Speaking', 'Press', 'Projects', 'Contact'];

    for (const name of sections) {
        test(`"${name}" nav link scrolls to its section`, async ({page}) => {
            await page.goto( '/');
            
            const nav = page.getByRole('banner').getByRole('navigation');
            await nav.getByRole('link', { name }).click();

            const id = name.toLowerCase();
            await expect(page).toHaveURL(new RegExp(`#${id}`));
            await expect(page.locator(`#${id}`)).toBeInViewport();
        })
    }
});

//tests contact from submission by using page.route() to intercept the request and return a fake success response so a real email using /api/contact
//doesn't send a real email through Resent everytime it's tested.

test.describe('Contact form', () => {
    test('show a success message after sending', async ({ page }) => {
        //Fake the api so no real email is sent
        await page.route('**/api/contact', async (route) => {
        await route.fulfill({ status: 200, json: { success: true } });
    });

    await page.goto('/');

    // await page.getByPlaceholder('Jane Smith').fill('Test User');
    // await page.getByPlaceholder('jane@example.com').fill('test@example.com');
    // await page.getByPlaceholder('Tell me about your project').fill('Hello from Playwright!');
    // Retry until React has hydrated and the values stick
    const nameInput = page.getByLabel('Name');
    const emailInput = page.getByLabel('Email');
    const messageInput = page.getByLabel('Message');

     //fix timing issue. Playwright filled the Name field the instant the page appeared, before React had finished
     //loading and attaching the form (this is call 'hydration'). When React took over, it reset Name back to its starting value of ''.
     //Email and message were filled a moment later, so they kept their text. Because Name is *required*, the browser
     //refused to submit the form, so the sucess message never appeared. Webkit tends to be slower here, which is why it failed only there.

    await expect(async () => {
        await nameInput.fill('Test User');
        await emailInput.fill('test@example.com');
        await messageInput.fill('Hello from Playwright!');
        await expect(nameInput).toHaveValue('Test User', { timeout: 1000 });
        await expect(emailInput).toHaveValue('test@example.com', { timeout: 1000 });
        await expect(messageInput).toHaveValue('Hello from Playwright!', { timeout: 1000 });
    }).toPass();

    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByRole('heading', { name: 'Message Sent!' })).toBeVisible();
    });
});