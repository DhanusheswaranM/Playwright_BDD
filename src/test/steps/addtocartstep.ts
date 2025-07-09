import { Given, When, Then} from '@cucumber/cucumber';

import {expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
import HeaderPage from './../../pages/headerPages';
import AddToCartPage from './../../pages/addtocartPages';



Then('User search the book {string}', async function (book) {
    const headerPage = new HeaderPage(pageFixture.page!);
    await headerPage.enterBookName(book);
    pageFixture.logger?.info("Book name entered: " + book);
    
         });

Then('User add the book to cart', async function () {
    const addToCartPage = new AddToCartPage(pageFixture.page!);
    await addToCartPage.clickAddToCart();
    pageFixture.logger?.info("Book added to cart successfully");
         });

Then('User can view the book carted', async function () {
    const addToCartPage = new AddToCartPage(pageFixture.page!);
    await addToCartPage.VerifyProductAddedInCart();
    pageFixture.logger?.info("Product added in cart is verified");
         });

Then('User dosent see the book that is provided {string}', async function (book) {
    const addToCartPage = new AddToCartPage(pageFixture.page!);
    await addToCartPage.verifyBookInCart(book);
    pageFixture.logger?.info("Book not found in cart: "+book);
         });