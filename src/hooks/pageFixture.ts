import { Page } from '@playwright/test';
import {Logger} from 'winston';
import HeaderPage from '../pages/headerPages';
import LoginPage from '../pages/loginPage';
import AddToCartPage from '../pages/addtocartPages';

export const pageFixture = {
     //@ts-ignore
    page : undefined as Page,
    logger :undefined as Logger | undefined ,
    loginPage: undefined as LoginPage | undefined,
    headerPage: undefined as HeaderPage | undefined,
    addToCartPage : undefined as AddToCartPage | undefined
}