import "../styles/modern-normalize.css"; /*lowest priority*/
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css"; /*must have highest priority for them to work(for comp we use often)*/

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
mobileNav();
darkMode();
