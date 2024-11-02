import { test, expect } from '@playwright/test';

test('Navigate to professional account registration', async ({ page }) => {
    // Étape 1 : Accéder à la page d'enregistrement
    await page.goto('https://www.amazon.fr/ap/register?_encoding=UTF8&openid.assoc_handle=frflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_newcust&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-1&pf_rd_r=8SW3XB79XCJP6XDK4NTC&pf_rd_t=101&pf_rd_p=2832fc45-a873-4056-a371-98649e69dcf7&pf_rd_i=14209271031');

    // Étape 2 : Localiser le lien pour le compte professionnel
    const professionalAccountLink = page.locator('#ab-enhanced-registration-link');

    // Étape 3 : Cliquer sur le lien
    await professionalAccountLink.click();

    // Étape 4 : Vérifier que nous sommes redirigés vers la page de création de compte professionnel
    await expect(page).toHaveURL('https://www.amazon.fr/business/register/org/landing?ref_=ap_altreg_ab');
});
