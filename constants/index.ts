export const DAYS_OF_A_WEEK_IN_ORDER = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
] as const

export const PrivateNavLinks = [
    {
      imgURL: '/asset/events.svg',
      route: '/events',
      label: 'My Events',
    },
    {
      imgURL: '/asset/schedule.svg',
      route: '/schedule',
      label: 'My Schedule',
    },
    {
      imgURL: '/asset/public.svg',
      route: '/book',
      label: 'Public Profile',
    },
  ] as const