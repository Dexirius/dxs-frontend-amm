import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dexirius.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://dexirius.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://dexirius.finance/nests'
  },
  {
    label: 'Network',
    icon: 'NftIcon',
    href: 'https://dexirius.finance/network'
  },  
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://dexirius.finance/lottery'
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/Dexirius",
      },
      {
        label: "Blog",
        href: "https://dexirius.medium.com/",
      },
    ],
  },
]

export default config
