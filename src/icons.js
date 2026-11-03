import { library, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faArrowUpRightFromSquare,
  faCircleArrowRight,
  faCode,
  faDisplay,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDeviantart,
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSpotify,
  faSteam,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Styles are imported above, so don't let Font Awesome inject them again at runtime
config.autoAddCss = false

// Only the icons listed here are bundled. To use a new one, find it at https://fontawesome.com/icons,
// import it above and add it here, then use it with <FontAwesomeIcon icon="fa-solid fa-name" />
library.add(
  // Solid
  faArrowUpRightFromSquare,
  faCircleArrowRight,
  faCode,
  faDisplay,
  faDownload,
  // Brands
  faDeviantart,
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSpotify,
  faSteam,
  faTwitter,
)
