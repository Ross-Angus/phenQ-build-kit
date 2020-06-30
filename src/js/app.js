'use strict';

import '../scss/app.scss';

import './polyfills/closest.js';

import 'scroll-behavior-polyfill';

import clicks from './components/clicks.js';
const myClicks = new clicks();
myClicks.init();

import blank from './components/blank.js';
const myBlank = new blank();
myBlank.init();

import tabFactory from './components/tabs.js';
const myTabs = new tabFactory();
myTabs.init();
window.addEventListener('resize', myTabs.scrollCheck);

import blockScroll from './components/block-scroll.js';
const myBlockScroll = new blockScroll();
myBlockScroll.init();

import faq from './components/faq.js';
const myFaq = new faq();
myFaq.init();

import shareLinks from './components/share-links.js';
const myShareLinks = new shareLinks();
myShareLinks.init();

import nav from './components/nav.js';
const myNav = new nav();
myNav.init();

import offGrid from './components/off-grid.js';
const myOffGrid = new offGrid();
myOffGrid.init();
