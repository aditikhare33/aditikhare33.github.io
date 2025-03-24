const titleimg = "/static/img/p-fish-world-hc-light.png";
const navItemsInfo = [ 
  { name: "about", link: "about/" }, 
  { name: "egg bowl", link: "egg-bowl/"},
  { name: "visual noise", link: "visual-noise/" },
  { name: "sketches", link: "sketchbook/" },
  { name: "websites and apps", link: "coding/" , isLast: true }
];

const navItemsHTML = () => {
  let navItemsStr = ''
  for (const navItem of navItemsInfo) {
    const isActive = window.location.href.endsWith(navItem.link) ? 'active' : '';
    navItemsStr += `
    <a class="${isActive}" href="/${navItem.link}">${navItem.name}</a>`;
    navItemsStr += navItem.isLast ? `` : `<span class="divider">|</span>`;
  }
  return navItemsStr;
};
const titleImgHTML = () => {
  return `<a href="/"><img class="titleimg" loading="lazy" src=${titleimg} /></a>`
};
const dropDownItemsHTML = () => {
  let navItemsStr = ''
  for (const navItem of navItemsInfo) {
    navItemsStr += `<div class="dropDownItem ">
      <a href="/${navItem.link}">${navItem.name} → </a>
    </div>`;
  }
  return navItemsStr;
};

const bigNav =

    `
    ${titleImgHTML()}
    <div class="nav">
      <div id="nav-items" class="links">
        ${navItemsHTML()}
      </div>
    </div>`;

const smallNav =  
  `<div>
    ${titleImgHTML()}
    <button onClick=useDropDown() class="dropDownButton"> ≡ </button>
  </div>`;

const dropDownNav = 
  `<div class="dropDown">
    ${dropDownItemsHTML()}
  </div>`;

let dropDownOn = false;

const useDropDown = () => {
  dropDownOn = true;
  document.querySelector('#navContainer').innerHTML = dropDownNav;
}

const doBigNav= () => {
  document.querySelector('html').style['overflow-y'] = 'visible';
  return bigNav;
}

const doSmallNav = () => {
  document.querySelector('html').style['overflow-y'] = 'visible';
  return smallNav
}

const doDropDownNav = () => {
  document.querySelector('html').style['overflow-y'] = 'hidden';
  return dropDownNav;
}

const renderNav = () => {
  const div = window.innerWidth > 900 ? doBigNav() : dropDownOn ? doDropDownNav() : doSmallNav();
  document.querySelector('#navContainer').innerHTML = div;
};

window.addEventListener("resize", renderNav);


renderNav();