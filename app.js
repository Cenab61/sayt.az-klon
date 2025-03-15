let navBarLanguage = document.querySelector("#navbar-language");
let navFlagAndMoney = document.querySelector("#flag");

let teamShow = document.querySelector("#teamShow");

let btnShow = document.querySelector("#btnShow");
let blogCards = document.querySelector("#blogCards");

const navMenu = [
  { id: 1, title: "Web sayt" },
  { id: 2, title: "Domen" },
  { id: 3, title: "Hostinq" },
  { id: 4, title: "Xidmətlər" },
  { id: 5, title: "Şirkət" },
];

const vebSayt = [
  {
    id: 1,
    title: "Saytların hazırlanması",
    description: "Veb saytların hazırlanması",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 2,
    title: "Hökumət və qeyri-kommersiya saytları",
    description: "Hökumət və qeyri-kommersiya saytları",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 3,
    title: "Kiçik biznes saytları",
    description: "Kiçik bizneslər üçün saytlar",
    icon: "https://api.websiteca.com/storage/fcdQoEskESpjwrkLUcNKqvm0ZFwzn7kAspkBfwI5.svg",
  },
  {
    id: 4,
    title: "E-ticarət saytları",
    description: "E-ticarət saytları",
    icon: "https://api.websiteca.com/storage/vQyageZW9Eb4rKazAWwrY3xUTem15TN9Ofdk8oUk.svg",
  },
  {
    id: 5,
    title: "Hüquq firma saytı",
    description: "Hüquq firma saytı",
    icon: "https://api.websiteca.com/storage/otN2FW4K7vPTfJRqYOqYJMRj1VZDil02yYCmA0mx.svg",
  },
  {
    id: 6,
    title: "Bloqlar və Şəxsi Vebsayt",
    description: "Bloqlar və Şəxsi Vebsayt",
    icon: "https://api.websiteca.com/storage/zJjPDvohOxpgJj7wenVSBaGbTgNOuigFvjxLmhw5.svg",
  },
  {
    id: 7,
    title: "Daşınmaz əmlak veb saytı",
    description: "Daşınmaz əmlak veb saytı",
    icon: "https://api.websiteca.com/storage/RG2ZavDFVNsih7XSr36x2pxKPQxXekuAgO2VXif6.svg",
  },
  {
    id: 8,
    title: "Tibb - Doktor Saytlar",
    description: "Tibb Doktor Saytlar",
    icon: "https://api.websiteca.com/storage/khwNG7uXgAPtW9wilTtK12LaUADpZgeQb3UvOqvB.svg",
  },
  {
    id: 9,
    title: "WordPress Saytları",
    description: "WordPress Saytları",
    icon: "https://api.websiteca.com/storage/qKRz4fKbiAGalPgCtcAGVuV5AnCAhx8WkRAMdV3L.svg",
  },
];

const domen = [
  {
    id: 1,
    title: "Domen",
    description: "etibarlı_domen",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 1,
    title: "Pulsuz Domen Qeydiyyatı",
    description: "Sürətli qeydiyyat",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
];

const hostinq = [
  {
    id: 1,
    title: "Veb Hosting",
    description: "₼10.00/ay-dan başlayaraq",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 2,
    title: "VPS",
    description: "₼15.00/ay-dan başlayaraq",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 3,
    title: "Server",
    description: "99.00/ay-dan başlayaraq",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
];

const xidmet = [
  {
    id: 1,
    title: "Vebsayt sifarişinizi izləyin",
    description: "Sifarişinizi asanlıqla izləyin",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 2,
    title: "Sayt Kalkulyatoru",
    description: "Saytın Qiymətini Öyrən",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 3,
    title: "SEO Xidməti",
    description: "Axtarış Sistemi Optimizasiyası",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 4,
    title: "Mobil Tətbiqlərin Hazırlanması",
    description: "Mobil tətbiq xidməti",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 5,
    title: "Texniki Xidmət",
    description: "Texniki Xidmət",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 6,
    title: "Sosial Media Marketing",
    description: "Sosial Media Marketing",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
];

const sirket = [
  {
    id: "haqqimizda",
    title: "Haqqımızda",
    description: "Bizim komanda üzvlərimiz",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 1,
    title: "Bloq",
    description: "Ən son xəbərlər və faydalı məlumatlar",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 2,
    title: "Bütün StartUplar",
    description: "Startupları idarə edən komandamıza qoşulun",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Hazırladığımız hər bir iş bizim üçün dəyərlidir",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 4,
    title: "Karyera",
    description: "Hazırkı vakansiyalarımız",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 5,
    title: "Freelance",
    description: "Sizdə qeydiyyatdan keçməklə freelance işləyə bilərsiniz",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
  {
    id: 6,
    title: "Əlaqə Forması",
    description: "Əlaqə Saxlayın",
    icon: "https://api.websiteca.com/storage/lJ9i3mHSrGbIyOFk6VnqpcyzeZgiKmjyiUfdEhAc.svg",
  },
];

const navFlag = [
  {
    id: 1,
    title: "₼",
    currencies: [
      { symbol: "₼", name: "AZN" },
      { symbol: "$", name: "USD" },
    ],
  },
  {
    id: 2,
    title: "AZ",
    icon: `<svg class="w-5 h-5 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
            <path fill="#3f9c35" d="M.1 0h640v480H.1z"/>
            <path fill="#ed2939" d="M.1 0h640v320H.1z"/>
            <path fill="#00b9e4" d="M.1 0h640v160H.1z"/>
            <circle cx="304" cy="240" r="72" fill="#fff"/>
            <circle cx="320" cy="240" r="60" fill="#ed2939"/>
            <path fill="#fff" d="M384 200l7.7 21.5 20.6-9.8-9.8 20.6L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8L384 200z"/>
        </svg>`,
  },
];

function navBarDropdown() {
  navBarLanguage.innerHTML = "";

  navMenu.forEach((item, i) => {
    let dropdownContent = "";

    if (item.id === 1) {
      dropdownContent = `
                      <ul  class="custom-scrollbar py-2 whitespace-normal  xsm:w-[340px] lg:w-[400px] text-sm lg:text-[1.1rem] text-gray-700 bg-white  shadow w-auto rounded-lg divide-y divide-gray-100 font-normal lg:top-8 top-10 scrollbar overflow-auto max-h-96 lg:-left-32 " aria-labelledby="dropdownButton${i}">
                        ${vebSayt
                          .map(
                            (item) => `
                          
                          <li>
                                            <a href="#" class="flex items-center h-auto xsm:h-20 px-4 hover:bg-gray-100 ">
                                                <div class="p-4 rounded-lg mr-2 bg-[#dbeafe]  hidden lg:block">
                                                    <img alt="navbar-icon" fetchpriority="high" width="28" height="28" decoding="async" data-nimg="1" class="max-w-[28px]" src="${item.icon}" style="color: transparent;"/>
                                                </div>
                                                <div class="flex flex-col">
                                                    <h3>${item.title}</h3>
                                                    <p class="text-slate-500 lg:text-sm text-xs font-semibold ">${item.description}</p>
                                                </div>
                                            </a>
                                        </li>
                        `
                          )
                          .join("")}
                      </ul>
                    `;
    } else if (item.id === 2) {
      dropdownContent = `
                      <ul   class="custom-scrollbar py-2 whitespace-normalxsm:w-[340px] lg:w-[400px] text-sm lg:text-[1.1rem] text-gray-700 bg-white  shadow w-auto rounded-lg divide-y divide-gray-100 font-normal lg:top-8 top-10  max-h-96 lg:-left-32 " aria-labelledby="dropdownButton${i}">
                        ${domen
                          .map(
                            (item) => `
                          
                          <li>
                                            <a href="#" class="flex items-center h-auto xsm:h-20 px-4 hover:bg-gray-100 ">
                                                <div class="p-4 rounded-lg mr-2 bg-[#dbeafe]  hidden lg:block">
                                                    <img alt="navbar-icon" fetchpriority="high" width="28" height="28" decoding="async" data-nimg="1" class="max-w-[28px]" src="${item.icon}" style="color: transparent;"/>
                                                </div>
                                                <div class="flex flex-col">
                                                    <h3>${item.title}</h3>
                                                    <p class="text-slate-500 lg:text-sm text-xs font-semibold ">${item.description}</p>
                                                </div>
                                            </a>
                                        </li>
                        `
                          )
                          .join("")}
                      </ul>
                    `;
    } else if (item.id === 3) {
      dropdownContent = `
                      <ul class="custom-scrollbar py-2 whitespace-normal  xsm:w-[340px] lg:w-[400px] text-sm lg:text-[1.1rem] text-gray-700 bg-white  shadow w-auto rounded-lg divide-y divide-gray-100 font-normal lg:top-8 top-10  max-h-96 lg:-left-32 " aria-labelledby="dropdownButton${i}">
                        ${hostinq
                          .map(
                            (item) => `
                          
                          <li>
                                            <a href="#" class="flex items-center h-auto xsm:h-20 px-4 hover:bg-gray-100 ">
                                                <div class="p-4 rounded-lg mr-2 bg-[#dbeafe]  hidden lg:block">
                                                    <img alt="navbar-icon" fetchpriority="high" width="28" height="28" decoding="async" data-nimg="1" class="max-w-[28px]" src="${item.icon}" style="color: transparent;"/>
                                                </div>
                                                <div class="flex flex-col">
                                                    <h3>${item.title}</h3>
                                                    <p class="text-slate-500 lg:text-sm text-xs font-semibold ">${item.description}</p>
                                                </div>
                                            </a>
                                        </li>
                        `
                          )
                          .join("")}
                      </ul>
                    `;
    } else if (item.id === 4) {
      dropdownContent = `
                     <ul  class="custom-scrollbar py-2 whitespace-normal  xsm:w-[340px] lg:w-[400px] text-sm lg:text-[1.1rem] text-gray-700 bg-white  shadow w-auto rounded-lg divide-y divide-gray-100 font-normal lg:top-8 top-10  max-h-96 lg:-left-32 " aria-labelledby="dropdownButton${i}">
                        ${xidmet
                          .map(
                            (item) => `
                          
                          <li>
                                            <a href="#" class="flex items-center h-auto xsm:h-20 px-4 hover:bg-gray-100 ">
                                                <div class="p-4 rounded-lg mr-2 bg-[#dbeafe]  hidden lg:block">
                                                    <img alt="navbar-icon" fetchpriority="high" width="28" height="28" decoding="async" data-nimg="1" class="max-w-[28px]" src="${item.icon}" style="color: transparent;"/>
                                                </div>
                                                <div class="flex flex-col">
                                                    <h3 onclick=culcPage(${item.id})>${item.title}</h3>
                                                    <p class="text-slate-500 lg:text-sm text-xs font-semibold ">${item.description}</p>
                                                </div>
                                            </a>
                                        </li>
                        `
                          )
                          .join("")}
                      </ul>
                    `;
    } else if (item.id === 5) {
      dropdownContent = `
                      <ul class="custom-scrollbar py-2 whitespace-normal xsm:w-[340px] lg:w-[400px] text-sm lg:text-[1.1rem] text-gray-700 bg-white  shadow w-auto rounded-lg divide-y divide-gray-100 font-normal lg:top-8 top-10 scrollbar overflow-y-scroll max-h-96 lg:-left-32 " aria-labelledby="dropdownButton${i}">
                        ${sirket
                          .map(
                            (item) => `
                          
                          <li>
                                            <a href="#" class="flex items-center h-auto xsm:h-20 px-4 hover:bg-gray-100 ">
                                                <div class="p-4 rounded-lg mr-2 bg-[#dbeafe]  hidden lg:block">
                                                    <img alt="navbar-icon" fetchpriority="high" width="28" height="28" decoding="async" data-nimg="1" class="max-w-[28px]" src="${item.icon}" style="color: transparent;"/>
                                                </div>
                                                <div class="flex flex-col">
                                                    <h3>${item.title}</h3>
                                                    <p class="text-slate-500 lg:text-sm text-xs font-semibold ">${item.description}</p>
                                                </div>
                                            </a>
                                        </li>
                        `
                          )
                          .join("")}
                      </ul>
                    `;
    } else {
      dropdownContent = `
                      <ul class=" custom-scrollbar py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton${i}">
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Məlumat yoxdur
                          </a>
                        </li>
                      </ul>
                    `;
    }

    navBarLanguage.innerHTML += `
                    <div class="relative inline-block">
                      <button id="dropdownButton${i}" data-dropdown-toggle="dropdown${i}" class="text-[#300B60] bg-transparent hover:text-[#7D3EE6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        ${item.title}
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      </button>

                      <!-- Dropdown menu -->
                      <div id="dropdown${i}" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        ${dropdownContent}
                      </div>
                    </div>
                  `;
  });
}

function culcPage(id) {
  if (id == 2) {
    window.location.href = "http://127.0.0.1:5500/sayt.az/culc.htm?id=2";
  }
}

navBarDropdown();

function flagDropDown() {
  navFlagAndMoney.innerHTML = "";

  navFlag.forEach((item) => {
    let flagContent = `
            <button type="button" data-dropdown-toggle="language-dropdown-menu-${
              item.id
            }"
                class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                ${item.id === 1 ? item.title : item.icon}
            </button>

            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                id="language-dropdown-menu-${item.id}">
                <ul class="py-2 font-medium" role="none">
                    ${
                      item.id === 1
                        ? // cyrenc
                          item.currencies
                            .map(
                              (currency) => `
                            <li>
                                <a href="#"
                                    class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">
                                    <span class="font-bold mr-2">${currency.symbol}</span>
                                    ${currency.name}
                                </a>
                            </li>
                        `
                            )
                            .join("")
                        : // language
                          `<li>
                            <a href="#"
                                class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                <svg class="w-5 h-5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                                    <path fill="#3f9c35" d="M.1 0h640v480H.1z"/>
                                    <path fill="#ed2939" d="M.1 0h640v320H.1z"/>
                                    <path fill="#00b9e4" d="M.1 0h640v160H.1z"/>
                                    <circle cx="304" cy="240" r="72" fill="#fff"/>
                                    <circle cx="320" cy="240" r="60" fill="#ed2939"/>
                                    <path fill="#fff" d="M384 200l7.7 21.5 20.6-9.8-9.8 20.6L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8L384 200z"/>
                                </svg>
                                Azərbaycan
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                <svg class="w-5 h-5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                                    <g fill-rule="evenodd">
                                        <path fill="#fff" d="M0 0h640v480H0"/>
                                        <path fill="#00247d" d="M0 0h640v480H0"/>
                                        <path fill="#fff" d="M0 0l640 480m-640 0l640-480"/>
                                        <path fill="#fff" d="M320 0v480M0 240h640"/>
                                        <path fill="#cf142b" d="M0 288h640v-96H0z"/>
                                        <path fill="#cf142b" d="M288 480h96V0h-96z"/>
                                    </g>
                                </svg>
                                English (US)
                            </a>
                        </li>`
                    }
                </ul>
            </div>
        `;

    navFlagAndMoney.innerHTML += flagContent;
  });
}

flagDropDown();

const burgerBtn = document.querySelector(
  '[data-collapse-toggle="navbar-dropdown"]'
);
const navbarDropdown = document.querySelector("#navbar-dropdown");

const mobileMenu = document.createElement("div");
mobileMenu.id = "mobile-menu";
mobileMenu.className =
  "md:hidden bg-white w-full fixed top-[64px] left-0 right-0 h-screen overflow-y-auto z-50";

function createMobileMenu() {
  let menuHTML = `
        <!-- Price and Login Buttons -->
        <div class="flex flex-col space-y-2 p-4 border-b border-gray-100">
            <button type="button" 
                style="background: linear-gradient(to right, #8b5cf6, #ec4899)"
                class="text-white hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Qiymet teklifi al
            </button>
            <button type="button"
                class="py-[7px] px-5 text-[15px] font-medium text-[#A271F3] focus:outline-none bg-white rounded-lg border border-[#A271F3] focus:z-10 focus:ring-4 focus:ring-gray-100">
                Daxil Olun
            </button>
        </div>

        <!-- Flag and Currency -->
        <div class="flex items-center space-x-4 p-4 border-b border-gray-100">
            ${navFlag
              .map(
                (item) => `
                <button type="button" class="flex items-center space-x-2">
                    ${
                      item.id === 1
                        ? `<span class="text-gray-900">${item.title}</span>`
                        : `<img src="${item.title}" class="w-[20px] h-[20px]" alt="flag">`
                    }
                </button>
            `
              )
              .join("")}
        </div>

        <!-- Navigation Menu -->
        ${navMenu
          .map((item, index) => {
            let submenuItems = [];

            if (item.id === 1) submenuItems = vebSayt;
            else if (item.id === 2) submenuItems = domen;
            else if (item.id === 3) submenuItems = hostinq;
            else if (item.id === 4) submenuItems = xidmet;
            else if (item.id === 5) submenuItems = sirket;

            return `
                <div class="mobile-menu-item border-b border-gray-100">
                    <button class="flex items-center justify-between w-full py-4 px-5 text-[#300B60] hover:bg-gray-50"
                            onclick="toggleMobileSubmenu(${index})">
                        <span>${item.title}</span>
                        <svg class="w-4 h-4 transition-transform" id="mobile-arrow-${index}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="hidden bg-gray-50" id="mobile-submenu-${index}">
                        ${submenuItems
                          .map(
                            (subItem) => `
                            <a href="#" class="flex items-center py-3 px-8 text-gray-600 hover:bg-gray-100">
                                <div class="flex-shrink-0 w-8 h-8 mr-3 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                                    <img src="${subItem.icon}" alt="" class="w-5 h-5">
                                </div>
                                <div>
                                    <div class="text-sm font-medium">${subItem.title}</div>
                                    <div class="text-xs text-gray-500">${subItem.description}</div>
                                </div>
                            </a>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;
          })
          .join("")}
    `;

  mobileMenu.innerHTML = menuHTML;
  document.querySelector("nav").appendChild(mobileMenu);
}

window.toggleMobileSubmenu = function (index) {
  const submenu = document.getElementById(`mobile-submenu-${index}`);
  const arrow = document.getElementById(`mobile-arrow-${index}`);

  submenu.classList.toggle("hidden");
  arrow.style.transform = submenu.classList.contains("hidden")
    ? ""
    : "rotate(180deg)";
};

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

createMobileMenu();

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    // md breakpoint
    mobileMenu.classList.add("hidden");
  }
});

// domain

let domainSelect = document.querySelector("#domainSelect");
let domainName = document.querySelector("#domainName");

const domainExtensions = [
  {
    id: 1,
    name: ".az",
    type: "ölkə",
    price: "₼40/il",
  },
  {
    id: 2,
    name: ".com",
    type: "ümumi",
    price: "₼25/il",
  },
  {
    id: 3,
    name: ".net",
    type: "ümumi",
    price: "₼38/il",
  },
  {
    id: 4,
    name: ".info",
    type: "ümumi",
    price: "₼55/il",
  },
  {
    id: 5,
    name: ".biz",
    type: "biznes",
    price: "₼30/il",
  },
  {
    id: 6,
    name: ".org",
    type: "təşkilat",
    price: "₼35/il",
  },
  {
    id: 7,
    name: ".us",
    type: "ölkə",
  },
  {
    id: 8,
    name: ".in",
    type: "ölkə",
  },
  {
    id: 9,
    name: ".ws",
    type: "ölkə",
  },
  {
    id: 10,
    name: ".mobi",
    type: "mobil",
  },
  {
    id: 11,
    name: ".tv",
    type: "xüsusi",
    rengi: "mavi",
    secilmis: true,
  },
  {
    id: 12,
    name: ".me",
    type: "xüsusi",
  },
  {
    id: 13,
    name: ".ru",
    type: "ölkə",
  },
  {
    id: 14,
    name: ".de",
    type: "ölkə",
  },
  {
    id: 15,
    name: ".com.az",
    type: "ölkə_kombinasiya",
  },
  {
    id: 16,
    name: ".co",
    type: "qısaldılmış",
  },
  {
    id: 17,
    name: ".site.az",
    type: "ölkə_kombinasiya",
  },
  {
    id: 18,
    name: ".sayt.az",
    type: "ölkə_kombinasiya",
  },
  {
    id: 19,
    name: ".ureb.com",
    type: "xüsusi_kombinasiya",
  },
  {
    id: 20,
    name: ".org.az",
    type: "ölkə_kombinasiya",
  },
];

function domainChange() {
  const domainSelect = document.getElementById("domainSelect");
  domainExtensions.forEach((item) => {
    domainSelect.innerHTML += `<option value="${item.id}">${item.name}</option>`;
  });
}
domainChange();

function domainNameChange() {
  const domainName = document.getElementById("domainName");
  domainExtensions.slice(0, 6).forEach((item) => {
    domainName.innerHTML += `
          <div class="p-3 cursor-pointer hover:bg-purple-100 rounded-lg transition-colors" 
               onclick="selectDomain(${item.id})">
            <div class="text-purple-500 font-bold text-[20px]">${item.name}</div>
            <div class="text-sm text-purple-600">${item.price}</div>
          </div>
        `;
  });
}

domainNameChange();

function selectDomain(id) {
  document.getElementById("domainSelect").value = id;
  const domainInput = document.getElementById("domainInput");
  const selectedDomain = domainExtensions.find((item) => item.id === id);
  domainInput.placeholder = `İstədiyiniz domen adını daxil edin ${selectedDomain.name}`;
}

function searchDomain() {
  const domainInput = document.getElementById("domainInput");
  const errorMessage = document.getElementById("errorMessage");
  const resultMessage = document.getElementById("resultMessage");

  const domainPattern = /^[a-zA-Z0-9-]+$/;

  if (!domainInput.value) {
    errorMessage.innerHTML = "*Domen adı daxil edilməyib";
    errorMessage.classList.remove("hidden");
    resultMessage.classList.add("hidden");
  } else if (!domainPattern.test(domainInput.value)) {
    errorMessage.innerHTML =
      "*Domen adı düzgün deyil. Yalnız hərf, rəqəm və '-' işarəsi ola bilər";
    errorMessage.classList.remove("hidden");
    resultMessage.classList.add("hidden");
  } else {
    errorMessage.classList.add("hidden");
    const selectedDomainId = document.getElementById("domainSelect").value;
    const selectedDomain = domainExtensions.find(
      (item) => item.id == selectedDomainId
    );
    const fullDomain = domainInput.value + selectedDomain.name;

    // Nəticəni göstər
    resultMessage.innerHTML = `Domen adı: ${fullDomain} yoxlanılır...`;
    resultMessage.classList.remove("hidden");
  }
}

//  hoistinq

const monthlyPrices = document.querySelectorAll(".monthlyPrice");
const yearlyPrices = document.querySelectorAll(".yearlyPrice");
const toggle = document.getElementById("toggle");
const toggleText = document.getElementById("toggleText");

function initializePricing() {
  yearlyPrices.forEach((item) => item.classList.add("hidden"));
  monthlyPrices.forEach((item) => item.classList.remove("hidden"));
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    toggleText.innerHTML = "İllik";
    monthlyPrices.forEach((item) => item.classList.add("hidden"));
    yearlyPrices.forEach((item) => item.classList.remove("hidden"));
  } else {
    toggleText.innerHTML = "Aylıq";
    monthlyPrices.forEach((item) => item.classList.remove("hidden"));
    yearlyPrices.forEach((item) => item.classList.add("hidden"));
  }
});

// team

const teamMembers = [
  {
    id: 1,
    name: "Ramil Mirzayev",
    position: "CEO",
    imageUrl:
      "https://api.websiteca.com/storage/Cup5kWbVIA9nfp4TN5w9ecGRkQUkhfVh8umVITKe.jpg",
  },
  {
    id: 2,
    name: "Rasim Adurahman",
    position: "Project Manager",
    imageUrl:
      "https://api.websiteca.com/storage/uTGbFRppma9BB7BTTYffzFgy8m1MfQEa7RkNdAVe.jpg",
  },
  {
    id: 3,
    name: "Ahmad Rustamov",
    position: "Team Lead",
    imageUrl:
      "https://api.websiteca.com/storage/cMDfFJGRPFXHH8bqJc6CXw5RT6RbYOjHDmmAhvq4.jpg",
  },
  {
    id: 4,
    name: "Murad Aghamedov",
    position: "Backend Developer",
    imageUrl:
      "https://api.websiteca.com/storage/4RIXyEhwxrU4nkxG2MUT2NqxZk0byqD4W7VyvnRf.jpg",
  },
  {
    id: 5,
    name: "Fuad Mammadov",
    position: "Developer",
    imageUrl:
      "https://api.websiteca.com/storage/S3chfzTRjo3ykhVY7JaRbRNbJ28LVeXA1duP7YAN.png",
  },
  {
    id: 6,
    name: "Mirafgan Eminbayli",
    position: "Developer",
    imageUrl:
      "https://api.websiteca.com/storage/8imyJH3yz86nxrP3fTkAfq9faXyfrPhLMsD5nWvm.jpg",
  },
  {
    id: 7,
    name: "Idrak Mustafazada",
    position: "Designer",
    imageUrl:
      "https://api.websiteca.com/storage/UFeJ0M6cDGYTUcdTSz79BOYyuQMUIU5NWfhk2wuv.jpg",
  },
  {
    id: 8,
    name: "Saida Chinani",
    position: "Designer",
    imageUrl:
      "https://api.websiteca.com/storage/k6AiYFMXvZ3HIpwTdQAZiHZMyjeOnGQ8TpZY4VTz.jpg",
  },
];

function teamCard() {
  const teamShow = document.getElementById("teamShow");
  teamMembers.forEach((item) => {
    teamShow.innerHTML += `
          <div class="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-[#A271F2] w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] mx-auto">
            <div class="relative">
              <img src="${item.imageUrl}" alt="${item.name}" 
                   class="w-full h-48 sm:h-52 lg:h-56 object-cover object-center rounded-t-lg">
              <div class="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div class="p-4 sm:p-5 lg:p-6 text-center">
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-[#2D3748] mb-2">${item.name}</h3>
              <p class="text-sm sm:text-base lg:text-lg text-gray-600">${item.position}</p>
            </div>
          </div>`;
  });
}

teamCard();

// son isler

let workShow = document.querySelector("#workShow");

const works = [
  {
    id: 1,
    img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
    title: "BİOPHYSİCS.AZ",
  },
  {
    id: 2,
    img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
    title: "UREB.COM",
  },
  {
    id: 3,
    img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
    title: "UG.NEWS",
  },
  {
    id: 4,
    img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
    title: "FOOTBALL.BİZ",
  },
  {
    id: 5,
    img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
    title: "WISHER.AZ",
  },
  {
    id: 6,
    img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
    title: "IMEXCOMMODITIES.COM",
  },
  {
    id: 7,
    img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
    title: "BİOPHYSİCS.AZ",
  },
  {
    id: 8,
    img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
    title: "UREB.COM",
  },
  {
    id: 9,
    img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
    title: "UG.NEWS",
  },
  {
    id: 10,
    img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
    title: "FOOTBALL.BİZ",
  },
  {
    id: 11,
    img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
    title: "WISHER.AZ",
  },
  {
    id: 12,
    img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
    title: "IMEXCOMMODITIES.COM",
  },
  {
    id: 13,
    img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
    title: "BİOPHYSİCS.AZ",
  },
  {
    id: 14,
    img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
    title: "UREB.COM",
  },
  {
    id: 15,
    img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
    title: "UG.NEWS",
  },
  {
    id: 16,
    img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
    title: "FOOTBALL.BİZ",
  },
  {
    id: 17,
    img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
    title: "WISHER.AZ",
  },
  {
    id: 18,
    img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
    title: "IMEXCOMMODITIES.COM",
  },
  {
    id: 19,
    img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
    title: "BİOPHYSİCS.AZ",
  },
  {
    id: 20,
    img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
    title: "UREB.COM",
  },
  {
    id: 21,
    img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
    title: "UG.NEWS",
  },
  {
    id: 22,
    img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
    title: "FOOTBALL.BİZ",
  },
  {
    id: 23,
    img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
    title: "WISHER.AZ",
  },
  {
    id: 24,
    img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
    title: "IMEXCOMMODITIES.COM",
  },
  {
    id: 25,
    img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
    title: "BİOPHYSİCS.AZ",
  },
  {
    id: 26,
    img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
    title: "UREB.COM",
  },
  {
    id: 27,
    img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
    title: "UG.NEWS",
  },
  {
    id: 28,
    img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
    title: "FOOTBALL.BİZ",
  },
  {
    id: 29,
    img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
    title: "WISHER.AZ",
  },
  {
    id: 30,
    img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
    title: "IMEXCOMMODITIES.COM",
  },
  {
    id: 31,
    img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png",
    title: "BİOPHYSİCS.AZ",
  },
  {
    id: 32,
    img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png",
    title: "UREB.COM",
  },
  {
    id: 33,
    img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png",
    title: "UG.NEWS",
  },
  {
    id: 34,
    img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png",
    title: "FOOTBALL.BİZ",
  },
  {
    id: 35,
    img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png",
    title: "WISHER.AZ",
  },
  {
    id: 36,
    img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png",
    title: "IMEXCOMMODITIES.COM",
  },
];

let currentPage = 1;
const itemsPerPage = 6;
const totalPagess = Math.ceil(works.length / itemsPerPage);

function showPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = works.slice(startIndex, endIndex);

  workShow.innerHTML = "";
  pageItems.forEach((item) => {
    workShow.innerHTML += `
          <div class="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <div class="relative">
              <img src="${item.img}" alt="${item.title}" 
                  class="w-full h-64 sm:h-72 lg:h-80 object-cover object-center">
              <div class="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div class="p-4 sm:p-5 lg:p-6 text-center">
              <h3 class="text-lg sm:text-xl font-bold text-[#2D3748] mb-2">${item.title}</h3>
              <p class="text-sm text-gray-600">${item.id}</p>
            </div>
          </div>
        `;
  });

  updatePagination(page);
}

function updatePagination(currentPage) {
  const pagination = document.querySelector("#pageNav #pageUl");
  pagination.innerHTML = "";

  pagination.innerHTML += `
        <li>
          <button id="prevBtn" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }">
            <span class="sr-only">Previous</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
          </button>
        </li>
      `;

  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPagess, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const isActive = i === currentPage;
    pagination.innerHTML += `
          <li>
            <button data-page="${i}" class="page-link flex items-center justify-center px-4 h-10 leading-tight ${
      isActive
        ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 z-10"
        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
    }">${i}</button>
          </li>
        `;
  }

  pagination.innerHTML += `
        <li>
          <button id="nextBtn" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
            currentPage === totalPagess ? "opacity-50 cursor-not-allowed" : ""
          }">
            <span class="sr-only">Next</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </li>
      `;

  document.querySelectorAll(".page-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const page = parseInt(e.target.getAttribute("data-page"));
      showPage(page);
    });
  });

  document.getElementById("prevBtn").addEventListener("click", (e) => {
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  document.getElementById("nextBtn").addEventListener("click", (e) => {
    if (currentPage < totalPagess) {
      showPage(currentPage + 1);
    }
  });
}

showPage(1);

// musteri

var swiperm = new Swiper(".mySwipermm", {
  speed: 2000,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// blog

const blogPosts = [
  {
    id: 1,
    title: "Uğurlu biznes üçün hansı veb trendləri izləməlisən?",
    image:
      "https://api.websiteca.com/storage/F9fi8pQIutOxgHSQBQdOz3IYGZjHvpCjPMyeKbWQ.jpg",
    date: "Feb 27, 2025",
    tags: ["webdesign", "marketing", "sayt"],
    link: "#",
  },
  {
    id: 2,
    title: "DeepSeek AI: Yeni Nəsil Süni İntellekt Aləti",
    image:
      "https://api.websiteca.com/storage/DUPcyTWGCtnRzHz9801ms8fDZWbMUsRIoErzIdyW.jpg",
    date: "Feb 6, 2025",
    tags: ["sayt yaratmaq", "sayt sifarişi", "saytların hazırlanması"],
    link: "#",
  },
  {
    id: 3,
    title: "2025-ci ildə Onlayn Biznesin Trendləri",
    image:
      "https://api.websiteca.com/storage/numKcPzot4A6JVvsEvxWnmTKm1LRLr3svtTxTDU5.jpg",
    date: "Jan 29, 2025",
    tags: ["marketinq", "social", "peşəkar veb dizayn"],
    link: "#",
  },
];

function blogShow() {
  blogPosts.forEach((item) => {
    blogCards.innerHTML += `
            <div class="bg-white border border-[#6829C7] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <a href="#" class="block overflow-hidden rounded-t-lg">
                <img class="w-full h-48 sm:h-52 lg:h-56 object-cover object-center" 
                     src="${item.image}" alt="${item.title}" />
              </a>
              <div class="p-4 sm:p-5">
                <p class="mb-3 font-medium text-gray-800 line-clamp-2 h-12">${
                  item.title
                }</p>
                <div class="flex flex-wrap gap-2">
                  <a href="#" class="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-[#A271F2] hover:bg-[#7D3BE2] rounded-lg transition-colors duration-200">${
                    item.date
                  }</a>
                  ${item.tags
                    .map(
                      (tag) => `
                    <a href="#" class="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-[#A271F2] hover:bg-[#7D3BE2] rounded-lg transition-colors duration-200">${tag}</a>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>
          `;
  });
}

blogShow();

// swiper videolar

var swiper = new Swiper(".mySwiper", {
  speed: 2000,
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
