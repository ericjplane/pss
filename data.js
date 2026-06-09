/* ============================================================================
   PHOENIX SUMMER CALENDAR — SCHEDULE DATA
   ----------------------------------------------------------------------------
   👉 THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE SCHEDULE. 👈

   There are two things below:
     1) CAREGIVERS  – the people/categories and their colors (the legend).
     2) SCHEDULE    – what happens on each day.

   ----------------------------------------------------------------------------
   HOW TO EDIT THE SCHEDULE
   ----------------------------------------------------------------------------
   • Dates use the format 'YYYY-MM-DD'  (e.g. '2026-07-04' = July 4, 2026).
   • Each date holds a LIST of "blocks". Each block looks like this:

        { who: 'taylor', start: '07:30', end: '09:00',
          title: 'Morning care', note: '' }

       who   → must match one of the keys in CAREGIVERS below (taylor, jackie,
               camp, gabe, pixie, shauna, handoff, off, milestone).
       start → 24-hour time as text, e.g. '7:30 AM' is '07:30', '3:00 PM' is '15:00'.
       end   → 24-hour time, or null if there is no end time.
       title → short label shown in bold.
       note  → optional extra detail (instructions, reminders). Use '' for none.

   • To add a day, copy an existing  '2026-XX-XX': [ ... ],  line and change it.
   • To remove something, delete its { ... } block (and the comma after it).
   • Days with no entry simply show "No plans yet".

   ⚠️  THIS IS REAL SCHEDULE DATA you provided. Double-check it against your
       source, then keep it up to date here as plans change.
   ========================================================================== */


/* ----------------------------------------------------------------------------
   1) CAREGIVERS + COLORS  (this powers the legend)
   Change a name or a color here and it updates everywhere automatically.
   Colors are inspired by a Rubik's cube + bright summer tones.
---------------------------------------------------------------------------- */
// Add `inLegend: false` to any entry you want to USE on the calendar but HIDE
// from the color key at the top of the page.
const CAREGIVERS = {
  taylor:    { name: 'Taylor',                color: '#19B4C4' }, // teal  (primary nanny)
  jackie:    { name: 'Jackie',                color: '#8E58D8' }, // purple
  camp:      { name: 'Summer Camp',           color: '#FFB400' }, // sunshine yellow
  gabe:      { name: 'Gabe (with Phoenix)',   color: '#33B66B', inLegend: false }, // green
  pixie:     { name: 'Pixie',                 color: '#FF6FAE' }, // pink
  shauna:    { name: 'Shauna',                color: '#FF5A4D', inLegend: false }, // coral red
  handoff:   { name: 'Handoff / Transition',  color: '#6B7A8F', inLegend: false }, // slate
  off:       { name: 'OFF — no coverage',     color: '#B9C2CC', inLegend: false }, // gray
  milestone: { name: 'Milestone',             color: '#FF8A3D', inLegend: false }, // orange
};


/* ----------------------------------------------------------------------------
   2) SCHEDULE  — keyed by date. Edit freely. (See instructions at top.)
---------------------------------------------------------------------------- */
const SCHEDULE = {

  /* ===== Kickoff ===== */
  '2026-06-12': [ // Friday — last day of school is a minimum (early-release) day
    { who: 'pixie',  start: null,    end: null, title: 'Pickup from school',
      note: 'Minimum day — Pixie picks up Phoenix from school.' },
    { who: 'taylor', start: '18:00', end: null, title: 'Pickup from Pixie → Shauna’s',
      note: 'Taylor picks up Phoenix from Pixie’s at 6:00 PM and drives to Shauna’s house.' },
  ],

  '2026-06-13': [ // Saturday
    { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care', note: '' } ],

  /* ===== Week of June 15–19 ===== */
  '2026-06-15': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-06-16': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-06-17': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care', note: '' } ],
  '2026-06-18': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-06-19': [ // Friday
    { who: 'off',  start: null, end: null, title: 'Taylor OFF', note: '' },
    { who: 'gabe', start: null, end: null, title: 'Gabe has Phoenix', note: '' } ],
  '2026-06-20': [ // Saturday
    { who: 'jackie', start: null, end: null, title: 'Pickup from Gabe',
      note: 'Jackie picks up Phoenix from Gabe on the way to the house.' },
    { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care', note: '' } ],
  '2026-06-21': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of June 22–28 ===== */
  '2026-06-22': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-06-23': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-06-24': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care', note: '' } ],
  '2026-06-25': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-06-26': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care',
                    note: 'Drop Phoenix to Gabe after shift.' } ],
  '2026-06-27': [ { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care',
                    note: 'Must be at the house 11:00 AM–2:00 PM for Jane’s birthday party.' } ],
  '2026-06-28': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of June 29 – July 5 ===== */
  '2026-06-29': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-06-30': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-01': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care', note: '' } ],
  '2026-07-02': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-03': [ // Friday
    { who: 'off',    start: null,    end: null,    title: 'Taylor OFF', note: '' },
    { who: 'jackie', start: '07:30', end: null,    title: 'Pickup from Gabe',
      note: 'Jackie picks up Phoenix from Gabe at 7:30 AM, then stays late that evening.' } ],
  '2026-07-04': [ // Saturday — July 4th
    { who: 'off',  start: null, end: null, title: 'Taylor OFF — July 4th', note: '' },
    { who: 'gabe', start: null, end: null, title: 'Gabe has Phoenix', note: '' } ],
  '2026-07-05': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of July 6–12 ===== */
  '2026-07-06': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-07': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-08': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care', note: '' } ],
  '2026-07-09': [ // Thursday — picnic replaces camp this day
    { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
    { who: 'shauna', start: '11:00', end: '15:00', title: 'Shauna’s Work Family Picnic',
      note: 'Taylor brings Phoenix to the picnic in Woodside (replaces camp today).' } ],
  '2026-07-10': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care',
                    note: 'Drop Phoenix to Gabe after shift.' } ],
  '2026-07-11': [ { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care', note: '' } ],
  '2026-07-12': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of July 13–19 ===== */
  '2026-07-13': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-14': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-15': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care', note: '' } ],
  '2026-07-16': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-17': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care',
                    note: 'Drop Phoenix to Gabe after shift.' } ],
  '2026-07-18': [ { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care', note: '' } ],
  '2026-07-19': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of July 20–26 ===== */
  '2026-07-20': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-21': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-22': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care', note: '' } ],
  '2026-07-23': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',  note: '' },
                  { who: 'pixie',  start: '15:00', end: null,    title: 'Pickup from camp',
                    note: 'Pixie picks up Phoenix from camp at 3:00 PM.' } ],
  '2026-07-24': [ { who: 'taylor', start: '07:30', end: '09:00', title: 'Morning care', note: '' },
                  { who: 'camp',   start: '09:00', end: '15:00', title: 'Summer Camp',
                    note: '🎉 Last day of camp!' },
                  { who: 'taylor', start: '15:00', end: '18:30', title: 'After-camp care',
                    note: 'Drop Phoenix to Gabe after shift.' } ],
  '2026-07-25': [ { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care', note: '' } ],
  '2026-07-26': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of July 27 – August 2  (camp has ended) ===== */
  '2026-07-27': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-07-28': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-07-29': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-07-30': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-07-31': [ // Friday
    { who: 'off',    start: null,    end: null, title: 'Taylor OFF', note: '' },
    { who: 'jackie', start: '07:30', end: null, title: 'Pickup from Gabe',
      note: 'Jackie picks up Phoenix from Gabe at 7:30 AM, then stays late for date night.' } ],
  '2026-08-01': [ { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care',
                    note: 'Pick up from the house. Drop Phoenix to Gabe after shift.' } ],
  '2026-08-02': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of August 3–9 ===== */
  '2026-08-03': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-04': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-05': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-06': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-07': [ // Friday
    { who: 'off',    start: null,    end: null, title: 'Taylor OFF', note: '' },
    { who: 'jackie', start: '07:30', end: null, title: 'Pickup from Gabe',
      note: 'Jackie picks up Phoenix from Gabe at 7:30 AM, then stays late for date night.' } ],
  '2026-08-08': [ { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care',
                    note: 'Pick up from the house. Drop Phoenix to Gabe after shift.' } ],
  '2026-08-09': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of August 10–16 ===== */
  '2026-08-10': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-11': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-12': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-13': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Some days may include dropping Phoenix at Pixie’s at 3:00 PM (TBD).' } ],
  '2026-08-14': [ // Friday
    { who: 'off',    start: null,    end: null, title: 'Taylor OFF', note: '' },
    { who: 'jackie', start: '07:30', end: null, title: 'Pickup from Gabe',
      note: 'Jackie picks up Phoenix from Gabe at 7:30 AM, then stays late for date night.' } ],
  '2026-08-15': [ { who: 'taylor', start: '11:30', end: '19:00', title: 'Saturday care',
                    note: 'Pick up from the house. Drop Phoenix to Gabe after shift.' } ],
  '2026-08-16': [ { who: 'off', start: null, end: null, title: 'OFF', note: 'No scheduled coverage.' } ],

  /* ===== Week of August 17–20  (wind-down) ===== */
  '2026-08-17': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care', note: '' } ],
  '2026-08-18': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care', note: '' } ],
  '2026-08-19': [ { who: 'taylor', start: '07:30', end: '16:30', title: 'Full-day care',
                    note: 'Last day of Taylor’s summer schedule.' } ],
  '2026-08-20': [ { who: 'milestone', start: null, end: null, title: '🎒 School starts!',
                    note: 'Back to school — summer schedule ends.' } ],
};
