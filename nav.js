const titleimg = "/static/img/p-fish-world-hc-light.png";
const navItemsInfo = [ 
  { name: "about", link: "about/" },
  { name: "egg bowl", link: "egg-bowl/"},
  { name: "websites", link: "websites/" },
  { name: "computer graphics", link: "computer-graphics/" },
  { name: "visual noise", link: "visual-noise/" },
  { name: "sketchbook", link: "sketchbook/" }
];

const navItemsHTML = () => {
  let navItemsStr = ''
  for (const navItem of navItemsInfo) {
    const isActive = window.location.href.endsWith(navItem.link) ? 'active' : '';
    navItemsStr += `
    <a class="${isActive}" href="/${navItem.link}">${navItem.name}</a>`;
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
    <div class="nav">
      <div id="nav-items" class="links">
        ${titleImgHTML()}
        <div></div>
        ${navItemsHTML()}
      </div>
    </div>
`;

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
  const div = window.innerWidth > 950 ? bigNav : dropDownOn ? dropDownNav : smallNav;
  if (dropDownOn) {
    document.querySelector('.home').style['overflow-y'] = "hidden";
  } else {
    if (document.querySelector('.home').style['overflow-y'] === "hidden") {
      document.querySelector('.home').style['overflow-y'] =  "auto";
    }
  }
  document.querySelector('#navContainer').innerHTML = div;
  document.querySelector('footer').innerHTML = 'designed and developed by aditi khare 2025';
};

window.addEventListener("resize", renderNav);

renderNav();


$(window).on('load', function(){
  $('.loader').addClass('hide');
  $('.home').css('background-image', 'url(/static/img/hide-smaller.png), url(/static/img/hill3.png)');
  $('.home').removeClass('hide');
});

$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show1");
      } 
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden1");
  hiddenElements.forEach((el) => observer.observe(el));
  
  const hidden2Elements = document.querySelectorAll(".hidden2");
  hidden2Elements.forEach((el) => observer.observe(el));
});
