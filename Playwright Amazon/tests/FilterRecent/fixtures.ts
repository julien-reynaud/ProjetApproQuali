import { test as base, Page } from '@playwright/test';
import { FilterReviewsWithText } from './FilterReviewsWithText';


type Fixtures = {
    FilterReviewsWithText: FilterReviewsWithText; 
};

export const test = base.extend<Fixtures>({

    FilterReviewsWithText: async ({ page }, use) => {
        const nearestLockerAmazon = new FilterReviewsWithText(page);
        await use(nearestLockerAmazon);
    },
});
