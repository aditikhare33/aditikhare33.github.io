const titleimg = "/static/img/p-fish-world-hc-light.png";
const navItemsInfo = [ 
  { name: "about", link: "about/" }, 
  { name: "websites + coding", link: "coding/" },
  { name: "egg bowl", link: "egg-bowl/"},
  { name: "visual noise", link: "visual-noise/" },
  { name: "sketchbook", link: "sketchbook/", isLast: true }
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
  `
  <div>
    ${titleImgHTML()}
    <button onClick=useDropDown() class="dropDownButton"> ≡ </button>
  </div>
  <div class="dropDown dark-translucent">
    <button onClick=useDropDown() class="dropDownButton"> x </button>
    ${dropDownItemsHTML()}
  </div>`;

let dropDownOn = false;

const useDropDown = () => {
  dropDownOn = !dropDownOn;
  renderNav();
}

const renderNav = () => {
  const div = window.innerWidth > 900 ? bigNav : dropDownOn ? dropDownNav : smallNav;
  if (dropDownOn) {
    document.querySelector('html').style['overflow-y'] = "hidden";
    document.querySelector('.home').style['overflow-y'] = "hidden";
  } else {
    document.querySelector('html').style['overflow-y'] = "scroll";
    document.querySelector('.home').style['overflow-y'] = "scroll";
  }
  document.querySelector('#navContainer').innerHTML = div;
};

window.addEventListener("resize", renderNav);


renderNav();