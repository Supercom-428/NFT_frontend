
import LINKS from 'utils/constants/links';

const DEFAULT_FOOTER_MENU = [
  {
    HREF: LINKS.HOME.HREF,
    TITLE: LINKS.HOME.TITLE
  },
  {
    HREF: LINKS.MARKETPLACE.HREF,
    TITLE: LINKS.MARKETPLACE.TITLE
  },
  {
    TITLE: LINKS.TRANSACTION_HISTORY.TITLE,
    HREF: LINKS.TRANSACTION_HISTORY.HREF,
  },
]

const SIGN_IN_FOOTER_MENU = [
  {
    HREF: LINKS.CREATE_NFT.HREF,
    TITLE: LINKS.CREATE_NFT.TITLE
  }
]

export {
  DEFAULT_FOOTER_MENU,
  SIGN_IN_FOOTER_MENU
}