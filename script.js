      const toggle_Btn = document.getElementById("menu-toggle");
      const drawer = document.getElementById("drawer");
      const closeBtn = document.getElementById("close-drawer");
      const overlay = document.getElementById("overlay");

      toggle_Btn.addEventListener("click", () => {
        drawer.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
      });

      closeBtn.addEventListener("click", () => {
        drawer.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
      });

      overlay.addEventListener("click", () => {
        drawer.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
      });



      
// drawers menu
function navigateToScheme() {
    Toaster.postMessage('navigateScheme');
  }


  
  
  function navigateToBankDetails() {
    Toaster.postMessage('navigateBankDetails');
  }
  
  function navigateToKyc() {
    Toaster.postMessage('navigateKyc');
  }
  
  function navigateToRate() {
    Toaster.postMessage('navigateRate');
  }
  
  function navigateSchemeRecords() {
    Toaster.postMessage('navigateSchemeRecords');
  }
  
  function navigateToCustomerCard() {
    Toaster.postMessage('navigateCustomerCard');
  }

  function navigateTransactionHistory() {
    Toaster.postMessage('navigateTransactionHistory');
  }

  function navigateToMyOrder() {
    Toaster.postMessage('navigateToMyOrder');
  }

  function navigateToUserProfile() {
    Toaster.postMessage('navigateToUserProfile');
  }

  function navigateToDigitalGold() {
    Toaster.postMessage('navigateToDigitalGold');
  }

  function navigateToPanchang() {
    Toaster.postMessage('navigateToPanchang');
  }

  function navigateToFeedback() {
    Toaster.postMessage('navigateToFeedback');
  }

  function navigateToSetting() {
    Toaster.postMessage('navigateToSetting');
  }

  function setUserName(username) {
    // Find the element by ID and set the text content
    document.getElementById("user-name-display").innerText = "Welcome, " + username;
}
function navigateToHomePage() {
    Toaster.postMessage('navigateToHomePage');
}



// brandingSwiper 
const swiper = new Swiper(".brandingSwiper", {
        effect: "coverflow",
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            const circle = document.querySelector(".autoplay-progress svg");
            const content = document.querySelector(".autoplay-progress span");
            circle.style.setProperty("--progress", 1 - progress);
            content.textContent = `${Math.ceil(time / 1000)}s`;
          },
        },
      });



    //   services 
 const items = [
      { label: "Scheme", icon: "https://cdn-icons-png.flaticon.com/128/10150/10150740.png", action: "navigateToScheme()" },
      { label: "Bank", icon: "https://cdn-icons-png.flaticon.com/128/522/522554.png", action: "navigateToBankDetails()" },
      { label: "KYC", icon: "https://cdn-icons-png.flaticon.com/128/18282/18282110.png", action: "navigateToKyc()" },
      { label: "Rate", icon: "https://cdn-icons-png.flaticon.com/128/592/592015.png", action: "navigateToRate()" },
      { label: "Records", icon: "https://cdn-icons-png.flaticon.com/128/2910/2910768.png", action: "navigateSchemeRecords()" },
      { label: "Card", icon: "https://cdn-icons-png.flaticon.com/128/3037/3037255.png", action: "navigateToCustomerCard()" },
      { label: "History", icon: "https://cdn-icons-png.flaticon.com/128/3503/3503786.png", action: "navigateTransactionHistory()" },
      { label: "Order", icon: "https://cdn-icons-png.flaticon.com/128/10597/10597732.png", action: "navigateToMyOrder()" },
      { label: "Profile", icon: "https://cdn-icons-png.flaticon.com/128/1946/1946429.png", action: "navigateToUserProfile()" },
      { label: "Gold", icon: "https://cdn-icons-png.flaticon.com/128/1473/1473430.png", action: "navigateToDigitalGold()" },
      { label: "Panchang", icon: "https://cdn-icons-png.flaticon.com/128/3013/3013143.png", action: "navigateToPanchang()" },
      { label: "Settings", icon: "https://cdn-icons-png.flaticon.com/128/2099/2099058.png", action: "navigateToSetting()" },
    ];

    const grid = document.getElementById("hexagon-grid");
    const toggleBtn = document.getElementById("toggle-button");

    let isExpanded = false;

    function renderItems() {
      grid.innerHTML = "";

      const visibleItems = window.innerWidth < 768
        ? (isExpanded ? items : items.slice(0, 6))
        : items;

      visibleItems.forEach((item, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "flex flex-col items-center";
        wrapper.setAttribute("data-aos", "zoom-in");
        wrapper.setAttribute("data-aos-delay", index * 100);

        wrapper.innerHTML = `
          <div onclick="${item.action}" class="relative w-[100px] h-[95px] rounded-full cursor-pointer">
            <svg viewBox="0 0 100 100" class="w-full h-full">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ff7e5f" />
                  <stop offset="100%" stop-color="#feb47b" />
                </linearGradient>
              </defs>
              <path 
                d="M30,5 h40 a5,5 0 0 1 4.33,2.5 l20,35 a5,5 0 0 1 0,5 l-20,35 a5,5 0 0 1 -4.33,2.5 h-40 a5,5 0 0 1 -4.33,-2.5 l-20,-35 a5,5 0 0 1 0,-5 l20,-35 a5,5 0 0 1 4.33,-2.5 z"
                fill="#DEBACE"
                stroke="url(#grad)"
                stroke-width="2"
              />
              <path 
                d="M32,10 h36 a4,4 0 0 1 3.5,2 l18,31 a4,4 0 0 1 0,4 l-18,31 a4,4 0 0 1 -3.5,2 h-36 a4,4 0 0 1 -3.5,-2 l-18,-31 a4,4 0 0 1 0,-4 l18,-31 a4,4 0 0 1 3.5,-2 z"
                fill="#AD3436"
              />
            </svg>
            <img 
              src="${item.icon}" 
              alt="${item.label}" 
              class="absolute w-10 h-10 top-[25px] left-[30px] object-contain z-10 invert"
            />
          </div>
          <div class=" text-sm font-semibold uppercase mt-1 text-center">
            ${item.label}
          </div>
        `;
        grid.appendChild(wrapper);
      });
    }

    toggleBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      toggleBtn.textContent = isExpanded ? "▲" : "▼";
      renderItems();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        toggleBtn.classList.add("hidden");
        isExpanded = true;
      } else {
        toggleBtn.classList.remove("hidden");
        isExpanded = false;
        toggleBtn.textContent = "▼";
      }
      renderItems();
    });

    window.addEventListener("load", () => {
      if (window.innerWidth >= 768) toggleBtn.classList.add("hidden");
      renderItems();
    });


      AOS.init({
      duration: 600,
      once: false
    });


    // services end 


    // backToTopBtn 
     const backToTopBtn = document.getElementById("backToTopBtn");

      // Show/hide button on scroll
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.remove("hidden");
        } else {
          backToTopBtn.classList.add("hidden");
        }
      });

      // Scroll to top on click
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });