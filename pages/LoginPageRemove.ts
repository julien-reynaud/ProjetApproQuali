import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Méthode pour accéder à la page de login
    async goToLogin() {
        await this.page.goto('https://www.amazon.fr/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fhomepage.html%3F_encoding%3DUTF8%26ref_%3Dnavm_em_signin%26action%3Dsign-out%26path%3D%252Fgp%252Fhomepage.html%253F_encoding%253DUTF8%2526ref_%253Dnavm_em_signin%26signIn%3D1%26useRedirectOnSuccess%3D1%26ref_%3Dnav_em_signout_0_1_1_44&openid.assoc_handle=frflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');  // URL de la page de login d'Amazon
    }

    // Méthode pour se connecter avec un email et un mot de passe
    async login(email: string, password: string) {
        await this.page.fill('#ap_email', email);  // Localisateur pour le champ email
        await this.page.click('#continue');  // Bouton pour continuer après avoir entré l'email
        await this.page.fill('#ap_password', password);  // Localisateur pour le champ mot de passe
        await this.page.click('#signInSubmit');  // Bouton pour se connecter
    }
}
