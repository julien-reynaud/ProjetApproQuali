import { test, expect } from '@playwright/test';

test('Access Amazon Terms of Use from registration page', async ({ page }) => {
    // Étape 1 : Accéder à la page d'enregistrement Amazon
    await page.goto('https://www.amazon.fr/ap/register?_encoding=UTF8&openid.assoc_handle=frflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_newcust&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-1&pf_rd_r=8SW3XB79XCJP6XDK4NTC&pf_rd_t=101&pf_rd_p=2832fc45-a873-4056-a371-98649e69dcf7&pf_rd_i=14209271031');

    // Étape 2 : Localiser le lien "Conditions d'utilisation" avec son sélecteur
    const termsLink = page.locator('a.a-link-normal.a-nowrap[href="/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=548524"]');

    // Étape 3 : Cliquer sur le lien
    await termsLink.click();

    // Étape 4 : Vérifier que nous sommes redirigés vers la page des conditions d'utilisation
    await expect(page).toHaveURL('https://www.amazon.fr/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=548524');
});
