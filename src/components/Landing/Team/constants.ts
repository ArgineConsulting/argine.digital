import facebook from '../../../images/facebook.png'
import amazon from '../../../images/amazon.svg'
import twitch from '../../../images/twitch.svg'
import kabam from '../../../images/kabam.png'
import alexanderAvatar from '../../../images/newAlex.webp'

import gigster from '../../../images/gigster.svg'
import microsoft from '../../../images/microsoft.svg'
import canon from '../../../images/canon.svg'
import danAvatar from '../../../images/newDan.webp'

export const NEWS_TEAM_TEXT_MEDIA = [
  {
    username: 'Alexander Ronalds',
    iconList: [
      {
        alt: 'facebook',
        img: facebook,
      },
      {
        alt: 'amazon',
        img: amazon,
      },
      {
        alt: 'twitch',
        img: twitch,
      },
      {
        alt: 'kabam',
        img: kabam,
      },
    ],
    avatar: alexanderAvatar,
    description:
      'Alex Ronalds is the chief executive officer & co-founder of Argine Consulting, a business consulting firm that helps companies drive business impact through continuous innovation.',
    title: 'CEO',
  },
  {
    username: 'Dan Demchenko',
    iconList: [
      {
        alt: 'gigster',
        img: gigster,
      },
      {
        alt: 'microsoft',
        img: microsoft,
      },
      {
        alt: 'canon',
        img: canon,
      },
    ],
    avatar: danAvatar,
    description:
      'Dan Demchenko is the chief product officer & co-founder of Argine Consulting. Dan has over a decade of experience working with dozens of multinational corporations delicately crafting software that drive user value.',
    title: 'CPO',
  },
]
