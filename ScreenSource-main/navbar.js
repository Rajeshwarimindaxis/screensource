const navbarHTML = `
  <section id="navbar-section">
    <style>
      /* ============================================================
         NAVBAR - Clean Floating Pill Design System
         ============================================================ */

      *, *::before, *::after {
        box-sizing: border-box;
      }

      .navbar-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        transition: all 0.4s ease;
        box-sizing: border-box;
      }

      /* ---- Top Bar ---- */
      .top-bar {
        background: #00AEEF; /* Light Sky Blue */
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.3px;
        padding: 4px 0;
        border-bottom: none;
        transition: all 0.4s ease;
        overflow: hidden;
        height: 34px;
        min-height: 34px;
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
      }

      .navbar-wrapper.scrolled .top-bar {
        height: 0;
        min-height: 0;
        padding: 0;
        margin: 0;
        opacity: 0;
      }

      .top-bar-container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
      }

      .top-bar-contact {
        display: flex;
        align-items: center;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .top-bar-contact a {
        color: #000000;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
      }

      .top-bar-contact a:hover {
        color: #ffffff;
      }

      .top-bar-contact .separator {
        margin: 0 8px;
        opacity: 0.5;
      }

      .top-bar-socials {
        display: flex;
        align-items: center;
        gap: 12px;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .top-bar-socials a {
        color: #000000;
        text-decoration: none;
        font-size: 14px;
        transition: transform 0.2s ease;
      }

      .top-bar-socials a:hover {
        transform: scale(1.15);
        color: #ffffff;
      }

      /* ---- Navbar Container & Floating Pill ---- */
      .navbar-container {
        width: 100%;
        max-width: 1280px;
        margin: 6px auto 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
        transition: all 0.4s ease;
      }

      .navbar-wrapper.scrolled .navbar-container {
        margin-top: 4px;
      }

      .navbar {
        background: rgba(255, 255, 255, 0.97);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-radius: 50px;
        padding: 8px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        box-shadow: 0 4px 28px rgba(0, 0, 0, 0.10), 0 1px 4px rgba(0,0,0,0.06);
        transition: all 0.4s ease;
        width: 100%;
        box-sizing: border-box;
      }

      .navbar-wrapper.scrolled .navbar {
        box-shadow: 0 8px 40px rgba(0,0,0,0.14);
        padding: 6px 24px;
      }

      /* ---- Logo ---- */
      .nav-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        flex-shrink: 0;
      }

      .nav-logo-icon {
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .nav-logo-icon img {
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      /* ---- Center Nav Links ---- */
      .nav-center {
        display: flex;
        align-items: center;
        gap: 4px;
        list-style: none;
        margin: 0;
        padding: 0;
        flex: 1;
        justify-content: center;
      }

      .nav-center li {
        position: relative;
      }

      .nav-center > li > a {
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-size: 13.5px;
        font-weight: 600;
        color: #333333;
        padding: 5px 2px;
        margin: 0 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: all 0.25s ease;
        position: relative;
        white-space: nowrap;
      }

      /* Colored underlines for each link */
      .nav-center > li > a::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: 0;
        height: 2.5px;
        border-radius: 99px;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }

      .nav-center > li:nth-child(1) > a::after { background: #00b5e2; } /* Home */
      .nav-center > li:nth-child(2) > a::after { background: #ed1607; } /* About */
      .nav-center > li:nth-child(3) > a::after { background: #9b59b6; } /* Brands */
      .nav-center > li:nth-child(4) > a::after { background: #EC008C; } /* Products */
      .nav-center > li:nth-child(5) > a::after { background: #00AEEF; } /* Services */
      .nav-center > li:nth-child(6) > a::after { background: #f39c12; } /* Machines */
      .nav-center > li:nth-child(7) > a::after { background: #ed1607; } /* Contact Us */

      .nav-center > li > a:hover::after,
      .nav-center > li > a.nav-active::after,
      .nav-center > li > a.active::after,
      .nav-center > li.active > a::after {
        width: 100%;
      }

      .nav-center > li > a:hover,
      .nav-center > li > a.nav-active {
        color: #ed1607;
      }

      /* ---- Dropdown Arrow ---- */
      .dd-arrow {
        font-size: 9px;
        opacity: 0.6;
        transition: transform 0.25s ease;
      }
      .nav-center li:hover .dd-arrow {
        transform: rotate(180deg);
      }

            /* ---- Dropdown Menu System - Clean & Professional ---- */
      .nav-center .dropdown-menu {
        display: none;
        position: absolute;
        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
        border: 1px solid #e2e8f0;
        border-top: 3px solid #00AEEF;
        padding: 14px 18px 12px;
        z-index: 9999;
        animation: navDropIn 0.2s ease-out;
        list-style: none;
        margin: 0;
      }

      /* Hover bridge to prevent mouse-leave jitter */
      .nav-center .dropdown-menu::before {
        content: '';
        position: absolute;
        top: -12px;
        left: 0;
        width: 100%;
        height: 12px;
        background: transparent;
      }

      @keyframes navDropIn {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(-6px);
        }
        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }

      .nav-center li:hover > .dropdown-menu {
        display: block;
      }

      /* Width Variants */
      .nav-center .dropdown-menu.dd-brands {
        width: 720px;
        max-width: 92vw;
      }
      .nav-center .dropdown-menu.dd-compact {
        width: 290px;
        max-width: 85vw;
      }

      /* Header inside Dropdown */
      .dd-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #f1f5f9;
      }
      .dd-header-title {
        font-size: 11.5px;
        font-weight: 700;
        color: #0f172a;
        text-transform: uppercase;
        letter-spacing: 0.6px;
      }
      .dd-view-all {
        font-size: 11.5px;
        font-weight: 600;
        color: #00AEEF;
        text-decoration: none;
        transition: color 0.15s ease;
      }
      .dd-view-all:hover {
        color: #ed1607;
      }

      /* Column Grids */
      .dd-grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      .dd-grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
      .dd-col {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .dd-col-heading {
        font-size: 11px;
        font-weight: 700;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 0 8px 6px;
        margin-bottom: 4px;
        border-bottom: 1px solid #f1f5f9;
      }

      /* Clean Professional Item */
      .dd-item {
        display: block;
        padding: 6px 8px;
        border-radius: 6px;
        text-decoration: none;
        background: transparent;
        transition: background 0.15s ease, padding-left 0.15s ease;
      }
      .dd-item:hover {
        background: #f8fafc;
        padding-left: 11px;
      }
      .dd-name {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #1e293b;
        line-height: 1.35;
        transition: color 0.15s ease;
      }
      .dd-item:hover .dd-name {
        color: #00AEEF;
      }
      .dd-desc {
        display: block;
        font-size: 11px;
        color: #64748b;
        line-height: 1.3;
      }

      /* ---- Right Icons ---- */
      .nav-right {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }

      .mob-call-btn {
        display: none;
      }

      .mob-drawer-call {
        padding: 12px 18px;
        background: rgba(0, 174, 239, 0.12);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .mob-drawer-call-btn {
        display: flex !important;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #ffffff !important;
        background: #00AEEF !important;
        font-weight: 700 !important;
        font-size: 13.5px !important;
        padding: 10px 16px !important;
        border-radius: 8px;
        text-decoration: none;
        border-bottom: none !important;
        box-shadow: 0 2px 8px rgba(0, 174, 239, 0.4);
      }

      .mob-drawer-call-btn:hover {
        background: #ed1607 !important;
        color: #ffffff !important;
      }

      /* ---- Mobile Toggle ---- */
      .menu-toggle {
        display: none;
        font-size: 20px;
        color: #333;
        cursor: pointer;
        background: #f5f5f5;
        border: none;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
      }

      /* ---- Mobile Responsive ---- */
      .nav-links-mobile, .mob-close-btn {
        display: none;
      }

      @media (max-width: 960px) {
        .top-bar {
          display: none;
        }

        .mob-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #00AEEF;
          color: #ffffff;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 174, 239, 0.35);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .mob-call-btn:hover {
          background: #ed1607;
          transform: scale(1.05);
        }

        .navbar-container {
          padding: 0 12px;
          margin-top: 8px;
        }

        .navbar {
          border-radius: 16px;
          padding: 8px 14px;
        }

        .nav-center {
          display: none;
        }

        .menu-toggle {
          display: flex;
        }

        .nav-links-mobile {
          position: fixed;
          top: 0; left: -100%;
          width: 280px;
          height: 100vh;
          background: #0f0f1a;
          z-index: 9998;
          padding: 80px 0 20px;
          overflow-y: auto;
          transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          list-style: none;
          margin: 0;
          flex-direction: column;
          display: flex;
          gap: 0;
          box-shadow: 4px 0 40px rgba(0,0,0,0.35);
        }

        .nav-links-mobile.active {
          left: 0;
        }

        .nav-links-mobile li {
          width: 100%;
        }

        .nav-links-mobile > li > a {
          display: block;
          color: rgba(255,255,255,0.85);
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
        }

        .nav-links-mobile > li > a:hover {
          color: #fff;
          background: rgba(237,22,7,0.2);
        }

        .nav-links-mobile > li > a.mob-header-link {
          color: #ed1607;
          font-weight: 700;
          pointer-events: none;
          background: rgba(0,0,0,0.2);
        }

        .nav-links-mobile > li > a.mob-sub-link {
          padding-left: 40px;
          font-weight: 400;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }

        .nav-links-mobile > li > a.mob-sub-link:hover {
          color: #fff;
        }

        .mob-close-btn {
          position: absolute;
          top: 20px; right: 20px;
          font-size: 22px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          background: rgba(255,255,255,0.1);
          border: none;
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .mob-close-btn:hover { background: rgba(237,22,7,0.4); color: #fff; }

        .mob-overlay {
          display: none;
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 9997;
        }

        .mob-overlay.active { display: block; }
      }

      /* ============================================================
         Universal Hero Section Separation from Floating Pill Navbar
         ============================================================ */
      .three-m-hero, .hero-section, .hero-films, .avery-hero, #contact-us,
      .hero-exposing-compact, .machine-hero, .nitto-hero, .nittoku-hero,
      .orafol-hero, .poly-hero, .printcolor-hero, .signage-hero,
      .stretching-hero, .yessor-hero, .sunsui-hero, .nontear-hero,
      .specialty-hero, .synthetic-hero, .technova-hero, .hero,
      .brands-hero, .services-hero, .machines-hero, .hero-container,
      #navbar-section + section, #navbar-section + div:not(.mob-overlay):not(#mobOverlay) {
        margin-top: 112px !important;
      }

      @media (max-width: 768px) {
        .three-m-hero, .hero-section, .hero-films, .avery-hero, #contact-us,
        .hero-exposing-compact, .machine-hero, .nitto-hero, .nittoku-hero,
        .orafol-hero, .poly-hero, .printcolor-hero, .signage-hero,
        .stretching-hero, .yessor-hero, .sunsui-hero, .nontear-hero,
        .specialty-hero, .synthetic-hero, .technova-hero, .hero,
        .brands-hero, .services-hero, .machines-hero, .hero-container,
        #navbar-section + section, #navbar-section + div:not(.mob-overlay):not(#mobOverlay) {
          margin-top: 72px !important;
        }
      }

      /* Breadcrumb Navigation Pill */
      .ss-breadcrumb-nav {
        width: 100%;
        max-width: 1280px;
        margin: 100px auto 0 auto;
        padding: 0 20px 8px;
        box-sizing: border-box;
        position: relative;
        z-index: 10;
      }
      .ss-breadcrumb-wrap {
        display: flex;
        align-items: center;
      }
      .ss-breadcrumb-list {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        list-style: none;
        padding: 8px 18px;
        margin: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 50px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 500;
      }
      .ss-breadcrumb-item a {
        color: #64748b;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        transition: color 0.2s ease;
      }
      .ss-breadcrumb-item a:hover {
        color: #00AEEF;
      }
      .ss-breadcrumb-separator {
        color: #94a3b8;
        font-size: 10px;
        display: inline-flex;
        align-items: center;
      }
      .ss-breadcrumb-item.active {
        color: #ed1607;
        font-weight: 600;
      }
      @media (max-width: 768px) {
        .ss-breadcrumb-nav {
          margin-top: 68px;
          padding: 0 16px 6px;
        }
        .ss-breadcrumb-list {
          padding: 6px 14px;
          font-size: 12px;
          gap: 6px;
        }
      /* ===================================================
         LOCATION DROPDOWN ACCORDION SECTION (FluidTech Style)
      =================================================== */
      .location-dropdown-section {
        padding: 20px 20px 60px 20px;
        width: 100%;
        box-sizing: border-box;
      }
      .location-accordion-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .location-accordion-wrapper {
        width: 100%;
        margin: 0 auto;
        border-radius: 50px;
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .location-toggle-bar {
        width: 100%;
        background: linear-gradient(135deg, #0077b6 0%, #00AEEF 100%);
        color: #ffffff;
        border: none;
        outline: none;
        border-radius: 50px;
        padding: 14px 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        box-shadow: 0 6px 22px rgba(0, 174, 239, 0.25);
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }
      .location-toggle-bar:hover {
        background: linear-gradient(135deg, #006296 0%, #009ad4 100%);
        box-shadow: 0 8px 26px rgba(0, 174, 239, 0.35);
      }
      .location-accordion-wrapper.open .location-toggle-bar {
        border-radius: 18px 18px 0 0;
        box-shadow: 0 4px 15px rgba(0, 174, 239, 0.2);
      }
      .location-bar-title {
        display: inline-flex;
        align-items: center;
        gap: 12px;
      }
      .location-icon-badge {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.22);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: #ffffff;
        backdrop-filter: blur(4px);
      }
      .location-text {
        font-family: 'Poppins', sans-serif;
        font-size: 1.18rem;
        font-weight: 700;
        letter-spacing: 0.4px;
        color: #ffffff;
      }
      .location-btn-badge {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.35);
        color: #ffffff;
        padding: 6px 20px;
        border-radius: 50px;
        font-size: 0.88rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        backdrop-filter: blur(4px);
        transition: all 0.25s ease;
      }
      .location-toggle-bar:hover .location-btn-badge {
        background: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.5);
      }
      .location-content-panel {
        display: none;
        background: #ffffff;
        border: 1px solid #E2E8F0;
        border-top: none;
        border-radius: 0 0 18px 18px;
        padding: 28px 24px;
        box-shadow: 0 14px 35px rgba(7, 27, 47, 0.08);
        box-sizing: border-box;
      }
      .location-accordion-wrapper.open .location-content-panel {
        display: block;
        animation: locPanelSlideDown 0.35s ease-out;
      }
      @keyframes locPanelSlideDown {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .location-card {
        background: #ffffff;
        border: 1px solid #E2E8F0;
        border-radius: 16px;
        padding: 24px 28px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease;
      }
      .location-card:hover {
        border-color: #CBD5E1;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
      }
      .location-card-header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-weight: 800;
        color: #0077b6;
        letter-spacing: 1px;
        margin-bottom: 22px;
        padding-bottom: 14px;
        border-bottom: 2px solid #E2E8F0;
      }
      .location-card-header i {
        color: #00AEEF;
        font-size: 1.15rem;
      }
      .location-columns-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px 24px;
      }
      .location-links-col {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .location-links-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 10px;
      }
      .location-link-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px 12px;
        border-radius: 8px;
        text-decoration: none;
        color: #334155;
        font-size: 0.91rem;
        font-weight: 500;
        transition: all 0.2s ease;
        background: transparent;
        border: 1px solid transparent;
      }
      .loc-link-left {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        line-height: 1.35;
      }
      .loc-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #00AEEF;
        flex-shrink: 0;
        transition: transform 0.22s ease, background-color 0.22s ease;
      }
      .loc-arrow {
        color: #94A3B8;
        font-size: 0.82rem;
        flex-shrink: 0;
        margin-left: 8px;
        transition: transform 0.22s ease, color 0.22s ease;
      }
      .location-link-item:hover {
        background: #EFF6FF;
        color: #0077b6;
        border-color: #BAE6FD;
        font-weight: 600;
        transform: translateX(2px);
      }
      .location-link-item:hover .loc-dot {
        background: #0077b6;
        transform: scale(1.35);
      }
      .location-link-item:hover .loc-arrow {
        color: #00AEEF;
        transform: translateX(4px);
      }
      .location-link-item.active-location-link {
        color: #0077b6 !important;
        font-weight: 700 !important;
        background: #EFF6FF !important;
        border-color: #00AEEF !important;
      }
      .location-link-item.active-location-link .loc-dot {
        background: #0077b6 !important;
        transform: scale(1.35);
      }
      .location-link-item.active-location-link .loc-arrow {
        color: #00AEEF !important;
      }
      @media (max-width: 1024px) {
        .location-columns-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 20px;
        }
      }
      @media (max-width: 768px) {
        .location-toggle-bar {
          padding: 10px 18px;
        }
        .location-text {
          font-size: 1.05rem;
        }
        .location-btn-badge {
          padding: 5px 14px;
          font-size: 0.8rem;
        }
        .location-content-panel {
          padding: 18px 14px;
        }
        .location-links-list {
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .location-card {
          padding: 16px 14px;
        }
      }
      @media (max-width: 640px) {
        .location-columns-grid {
          grid-template-columns: 1fr;
          gap: 6px;
        }
        .location-link-item {
          padding: 8px 8px;
        }
      }

    </style>

    <!-- Navbar HTML -->
    <div class="navbar-wrapper" id="navbarWrapper">
      <!-- Top Bar -->
      <div class="top-bar">
        <div class="top-bar-container">
          <div class="top-bar-contact">
            <a href="tel:+919607806010" style="display: flex; align-items: center; gap: 5px; font-weight: 700;"><img src="images/call-01.webp" alt="Call" style="width: 15px; height: 15px; object-fit: contain;"> +91 96078 06010</a>
            <span class="separator">|</span>
            <!--email_off--><a href="mailto:designatscreensource@gmail.com"><i class="fas fa-envelope"></i> designatscreensource@gmail.com</a><!--/email_off-->
          </div>
          <div class="top-bar-socials">
            <a href="https://www.instagram.com/screensource_india/?hl=en" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/ScreensourcePune/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>

      <div class="navbar-container">
        <nav class="navbar" id="navbar">
          <!-- Logo -->
          <a class="nav-logo" href="index.html">
            <div class="nav-logo-icon">
              <img src="images/logo-final.webp" alt="Screensource Logo" />
            </div>
          </a>

          <!-- Center Nav Links (Desktop) -->
          <ul class="nav-center" id="navCenter">
            <li><a href="index.html">Home</a></li>
            <li><a href="about-us.html">About</a></li>

            <!-- Brands Dropdown -->
            <li>
              <a href="brands.html" class="dropdown-toggle">Brands <span class="dd-arrow">▾</span></a>
              <div class="dropdown-menu dd-brands">
                <div class="dd-header">
                  <span class="dd-header-title">Authorized Brands</span>
                  <a href="brands.html" class="dd-view-all">View All Brands &rarr;</a>
                </div>
                <div class="dd-grid-3">
                  <!-- Col 1 -->
                  <div class="dd-col">
                    <div class="dd-col-heading">Films & Polycarbonate</div>
                    <a href="sabic.html" class="dd-item">
                      <span class="dd-name">SABIC Films</span>
                      <span class="dd-desc">LEXAN™ Polycarbonate Films</span>
                    </a>
                    <a href="macdermid.html" class="dd-item">
                      <span class="dd-name">MacDermid Alpha</span>
                      <span class="dd-desc">Autotype HMI & Membrane Films</span>
                    </a>
                    <a href="polyvantis.html" class="dd-item">
                      <span class="dd-name">Polyvantis</span>
                      <span class="dd-desc">Optical Polycarbonate Sheets</span>
                    </a>
                    <a href="technova.html" class="dd-item">
                      <span class="dd-name">TechNova</span>
                      <span class="dd-desc">NovaLife Synthetic Paper</span>
                    </a>
                  </div>

                  <!-- Col 2 -->
                  <div class="dd-col">
                    <div class="dd-col-heading">Graphics & Inks</div>
                    <a href="orafol.html" class="dd-item">
                      <span class="dd-name">Orafol</span>
                      <span class="dd-desc">Graphic & Reflective Vinyl</span>
                    </a>
                    <a href="avery.html" class="dd-item">
                      <span class="dd-name">Avery Dennison</span>
                      <span class="dd-desc">Signage & Wrapping Media</span>
                    </a>
                    <a href="print-color.html" class="dd-item">
                      <span class="dd-name">Printcolor Ltd</span>
                      <span class="dd-desc">Swiss Precision Screen Inks</span>
                    </a>
                    <a href="photo-kina.html" class="dd-item">
                      <span class="dd-name">Photo-Kina</span>
                      <span class="dd-desc">Direct Emulsions & Chemicals</span>
                    </a>
                  </div>

                  <!-- Col 3 -->
                  <div class="dd-col">
                    <div class="dd-col-heading">Tapes & Mesh</div>
                    <a href="3m.html" class="dd-item">
                      <span class="dd-name">3M India Limited</span>
                      <span class="dd-desc">VHB™ Tapes & Adhesives</span>
                    </a>
                    <a href="nittol.html" class="dd-item">
                      <span class="dd-name">Nitto Denko</span>
                      <span class="dd-desc">Double-Coated Adhesive Tapes</span>
                    </a>
                    <a href="nittoku.html" class="dd-item">
                      <span class="dd-name">Nittoku Mesh</span>
                      <span class="dd-desc">High-Precision Polyester Mesh</span>
                    </a>
                    <a href="sansui.html" class="dd-item">
                      <span class="dd-name">Sunsui Tapes</span>
                      <span class="dd-desc">Specialized Industrial Tapes</span>
                    </a>
                    <a href="yessor.html" class="dd-item">
                      <span class="dd-name">Yessor Techs</span>
                      <span class="dd-desc">Lint-Free Cleanroom Wipes</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>



            <!-- Services Dropdown -->
            <li>
              <a href="services.html" class="dropdown-toggle">Services <span class="dd-arrow">▾</span></a>
              <div class="dropdown-menu dd-compact">
                <div class="dd-header">
                  <span class="dd-header-title">Pre-Press Services</span>
                  <a href="services.html" class="dd-view-all">All &rarr;</a>
                </div>
                <div class="dd-col">
                  <a href="stretching.html" class="dd-item">
                    <span class="dd-name">Screen Stretching Services</span>
                    <span class="dd-desc">Pneumatic tensioning up to 50 N/cm</span>
                  </a>
                  <a href="exposing.html" class="dd-item">
                    <span class="dd-name">Screen Exposing Services</span>
                    <span class="dd-desc">UV precision stencil preparation</span>
                  </a>
                </div>
              </div>
            </li>

            <!-- Machines Dropdown -->
            <li>
              <a href="machines.html" class="dropdown-toggle">Machines <span class="dd-arrow">▾</span></a>
              <div class="dropdown-menu dd-compact">
                <div class="dd-header">
                  <span class="dd-header-title">Workshop Machinery</span>
                  <a href="machines.html" class="dd-view-all">All &rarr;</a>
                </div>
                <div class="dd-col">
                  <a href="machine-stretching.html" class="dd-item">
                    <span class="dd-name">Screen Stretching Machines</span>
                    <span class="dd-desc">Modular pneumatic clamping units</span>
                  </a>
                  <a href="machines-exposing.html" class="dd-item">
                    <span class="dd-name">Screen Exposing Machines</span>
                    <span class="dd-desc">UV vacuum exposure equipment</span>
                  </a>
                </div>
              </div>
            </li>

            <li><a href="contact.html">Contact Us</a></li>
          </ul>

          <!-- Right Icons -->
          <div class="nav-right">
            <a href="tel:+919607806010" class="mob-call-btn" title="Call +91 96078 06010" aria-label="Call +91 96078 06010">
              <i class="fas fa-phone-alt"></i>
            </a>
            <button class="menu-toggle" id="menuToggle" aria-label="Menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div class="mob-overlay" id="mobOverlay"></div>
    <ul class="nav-links-mobile" id="navLinksMobile">
      <button class="mob-close-btn" id="mobCloseBtn"><i class="fas fa-times"></i></button>
      <li class="mob-drawer-call">
        <a href="tel:+919607806010" class="mob-drawer-call-btn">
          <i class="fas fa-phone-alt"></i>
          <span>Call Us: +91 96078 06010</span>
        </a>
      </li>
      <li><a href="index.html">Home</a></li>
      <li><a href="about-us.html">About</a></li>

      <li><a href="brands.html" class="mob-header-link" style="pointer-events: auto; display: flex; justify-content: space-between; align-items: center;">Brands <i class="fas fa-chevron-right" style="font-size: 11px;"></i></a></li>
      <li><a href="macdermid.html" class="mob-sub-link">MACDERMID ALPHA ELECTRONICS SOLUTIONS</a></li>
      <li><a href="orafol.html" class="mob-sub-link">ORAFOL</a></li>
      <li><a href="technova.html" class="mob-sub-link">TechNova Imaging Systems Pvt Limited (Novalife)</a></li>
      <li><a href="3m.html" class="mob-sub-link">3M India Limited</a></li>
      <li><a href="polyvantis.html" class="mob-sub-link">Polyvantis (Sabic)</a></li>
      <li><a href="sabic.html" class="mob-sub-link">SABIC Polycarbonate Films</a></li>
      <li><a href="nittoku.html" class="mob-sub-link">Nittoku Mesh</a></li>
      <li><a href="print-color.html" class="mob-sub-link">Printcolor Ltd</a></li>
      <li><a href="yessor.html" class="mob-sub-link">Yessor Techs Wipes</a></li>
      <li><a href="sansui.html" class="mob-sub-link">Sunsui Adhesive Tapes</a></li>
      <li><a href="nittol.html" class="mob-sub-link">Nitto Denko Corporation ( Adhesive Tapes)</a></li>
      <li><a href="avery.html" class="mob-sub-link">Avery Dennison Corporation</a></li>



      <li><a href="services.html" class="mob-header-link" style="pointer-events: auto; display: flex; justify-content: space-between; align-items: center;">Services <i class="fas fa-chevron-right" style="font-size: 11px;"></i></a></li>
      <li><a href="stretching.html" class="mob-sub-link">Stretching Services</a></li>
      <li><a href="exposing.html" class="mob-sub-link">Exposing Services</a></li>

      <li><a href="machines.html" class="mob-header-link" style="pointer-events: auto; display: flex; justify-content: space-between; align-items: center;">Machines <i class="fas fa-chevron-right" style="font-size: 11px;"></i></a></li>
      <li><a href="machine-stretching.html" class="mob-sub-link">Stretching Machines</a></li>
      <li><a href="machines-exposing.html" class="mob-sub-link">Exposing Machines</a></li>

      <li><a href="contact.html">Contact Us</a></li>
    </ul>

    <script>
      const navWrapper = document.getElementById('navbarWrapper');
      const menuToggle = document.getElementById('menuToggle');
      const mobMenu = document.getElementById('navLinksMobile');
      const mobOverlay = document.getElementById('mobOverlay');
      const mobClose = document.getElementById('mobCloseBtn');

      window.addEventListener('scroll', () => {
        if(navWrapper) navWrapper.classList.toggle('scrolled', window.scrollY > 30);
      });

      function openMobMenu() {
        if(mobMenu) mobMenu.classList.add('active');
        if(mobOverlay) mobOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeMobMenu() {
        if(mobMenu) mobMenu.classList.remove('active');
        if(mobOverlay) mobOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }

      if (menuToggle) menuToggle.addEventListener('click', openMobMenu);
      if (mobClose) mobClose.addEventListener('click', closeMobMenu);
      if (mobOverlay) mobOverlay.addEventListener('click', closeMobMenu);
    <\/script>
  </section>
`;

document.write(navbarHTML);

// Auto-set the active link based on the current URL
setTimeout(() => {
  const currentUrl = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = document.querySelectorAll('.nav-center > li > a');

  const brandPages = [
    'brands.html', 'brand.html', 'macdermid.html', 'orafol.html', 'technova.html', '3m.html', 'polyvantis.html',
    'sabic.html', 'sabic-polycarbonate.html', 'nittoku.html', 'print-color.html', 'yessor.html', 'sansui.html',
    'nittol.html', 'avery.html', 'jk-lite.html', 'photo-kina.html',
    // Pune location landing pages (linked from Brands -> Locations We Serve)
    'printable-polycarbonate-sheets-supplier-distributor-in-pune.html',
    'adhesive-tapes-supplier-distributor-in-pune.html',
    'transfer-tapes-supplier-distributor-in-pune.html',
    'non-tearable-sheets-supplier-distributor-in-pune.html',
    'tissue-tapes-supplier-distributor-in-pune.html',
    'pp-rubber-screen-printing-inks-supplier-distributor-in-pune.html',
    'polyester-meshes-supplier-distributor-in-pune.html',
    'polyester-mesh-supplier-distributor-in-pune.html',
    'polyester-tapes-supplier-distributor-in-pune.html',
    'graphics-and-industrial-films-supplier-distributor-in-pune.html',
    'graphics-industrial-films-supplier-distributor-in-pune.html',
    'vhb-and-uhb-tapes-supplier-distributor-in-pune.html',
    'vhb-uhb-tapes-supplier-distributor-in-pune.html',
    'self-adhesive-vinyls-supplier-distributor-in-pune.html',
    'prepress-solutions-provider-in-pune.html',
    'pre-press-solutions-supplier-distributor-in-pune.html',
    'customized-aluminium-screen-printing-frames-manufacturer-in-pune.html',
    'customized-aluminium-screen-printing-frames-in-pune.html',
    'aluminium-screen-frame-exposing-services-provider-in-pune.html',
    'aluminium-screen-frame-exposing-services-in-pune.html',
    'aluminium-screen-making-services-provider-in-pune.html',
    'aluminium-screen-making-services-in-pune.html',
    'customized-shade-matching-services-provider-in-pune.html',
    'customized-shade-matching-services-in-pune.html'
  ];
  const servicePages = ['services.html', 'service.html', 'stretching.html', 'exposing.html'];
  const machinePages = ['machines.html', 'machine.html', 'machine-stretching.html', 'machines-exposing.html'];

  links.forEach(a => {
    a.classList.remove('nav-active', 'active');
    const href = (a.getAttribute('href') || '').toLowerCase();

    if (href === currentUrl || (currentUrl === '' && href === 'index.html')) {
      a.classList.add('nav-active');
    } else if (href.includes('brands') && brandPages.includes(currentUrl)) {
      a.classList.add('nav-active');
    } else if (href.includes('services') && servicePages.includes(currentUrl)) {
      a.classList.add('nav-active');
    } else if (href.includes('machines') && machinePages.includes(currentUrl)) {
      a.classList.add('nav-active');
    }
  });
}, 50);

// Global Location Accordion Initializer (FluidTech style)
function initGlobalLocationAccordion() {
  const toggleBtn = document.getElementById("locationToggleBtn");
  const wrapper = document.getElementById("locationAccordion");
  const btnText = document.getElementById("locationBtnText");

  if (toggleBtn && wrapper && !toggleBtn.dataset.bound) {
    toggleBtn.dataset.bound = "true";
    toggleBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const isOpen = wrapper.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (btnText) {
        btnText.innerHTML = isOpen
          ? 'Close <i class="fa-solid fa-chevron-up ms-1"></i>'
          : 'Expand <i class="fa-solid fa-chevron-down ms-1"></i>';
      }
    });

    if (window.location.hash === '#locationAccordionSection' || window.location.hash === '#location' || window.location.hash === '#locations' || window.location.hash === '#locations-we-serve') {
      wrapper.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (btnText) btnText.innerHTML = 'Close <i class="fa-solid fa-chevron-up ms-1"></i>';
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGlobalLocationAccordion);
} else {
  initGlobalLocationAccordion();
}

