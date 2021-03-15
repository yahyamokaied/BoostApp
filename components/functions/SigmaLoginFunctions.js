import * as AuthSession from 'expo-auth-session';

export const azureAdAppProps = {
    clientId        :   '0ba22465-fda2-483d-98fe-f9ee6dd5d2cd',
    tenantId        :   'f82b0fb7-0101-410d-8e87-0efa7c1d3978',
    scope           :   ['user.read'],
    domainHint      :   'login.microsoftonline.com',
    redirectUrl     :   AuthSession.makeRedirectUri({ native:'se.sigma.BoostApp20://redirect'}),
    clientSecret    :   'DiGF4Yz6D_4A1.DB5QJ-I6yQz6-_5V55nI',
    prompt          :   'login',
    grant_type      :   'authorization_code',
    returnUrl: 'se.sigma.BoostApp20://redirect',
  };

  