'use strict';

const tabs = document.querySelectorAll('[role="tab"');
const hamburger = document.querySelector('.header__mobile-btn');
const navigation = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav-links ul');

//Functions

const showList = function () {
  tabs.forEach(t => t.setAttribute('aria-selected', false));
  this.setAttribute('aria-selected', true);
};
const hideList = function () {
  tabs.forEach(t => t.setAttribute('aria-selected', false));
};

const openMenu = function () {
  navigation.classList.toggle('active');
  if (navigation.classList.contains('active'))
    this.style.backgroundImage = 'url(../../images/icon-close.svg)';
  else this.style.backgroundImage = 'url(../../images/icon-hamburger.svg)';
};

//Event listeners

tabs.forEach(tab => {
  tab.addEventListener('click', showList);
  tab.addEventListener('mouseover', showList);
});
navLinks.forEach(n => n.addEventListener('mouseleave', hideList));
hamburger.addEventListener('click', openMenu);
