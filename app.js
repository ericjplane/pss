/* ============================================================================
   PHOENIX SUMMER CALENDAR — APP LOGIC
   ----------------------------------------------------------------------------
   This file builds the calendar from the data in data.js.
   You normally DON'T need to edit this file — edit data.js to change the
   schedule. Only touch this if you want to change how things look/behave.

   Overview:
     • The app shows ONE WEEK at a time (Monday → Sunday).
     • Prev / Next buttons move between weeks; "This Week" jumps to today.
     • The legend is built automatically from CAREGIVERS in data.js.
   ========================================================================== */

(function () {
  'use strict';

  /* ---- Config: which day the week starts on (1 = Monday) ---- */
  const WEEK_START = 1; // Monday

  const WEEKDAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONTH_NAMES   = ['January','February','March','April','May','June','July',
                         'August','September','October','November','December'];

  /* ---- Figure out the first & last dates that appear in the schedule ---- */
  const allDates = Object.keys(SCHEDULE).sort();
  const FIRST_DATE = parseDate(allDates[0]);
  const LAST_DATE  = parseDate(allDates[allDates.length - 1]);

  /* State: the Monday of the week currently being viewed. */
  let currentMonday = mondayOf(clampToSchedule(startOfToday()));


  /* =========================================================================
     DATE HELPERS  (kept simple & timezone-safe by using local dates)
     ========================================================================= */

  // Parse 'YYYY-MM-DD' into a local Date at midnight (avoids UTC off-by-one).
  function parseDate(str) {
    const [y, m, d] = str.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  // Format a Date back into the 'YYYY-MM-DD' key used by SCHEDULE.
  function dateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function startOfToday() {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }

  // Return the Monday on or before the given date.
  function mondayOf(date) {
    const d = new Date(date);
    const day = d.getDay();                       // 0=Sun … 6=Sat
    const diff = (day - WEEK_START + 7) % 7;       // days since Monday
    d.setDate(d.getDate() - diff);
    return d;
  }

  function addDays(date, n) {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d;
  }

  // Keep the view within the season (don't let users wander far past the data).
  function clampToSchedule(date) {
    if (date < FIRST_DATE) return new Date(FIRST_DATE);
    if (date > LAST_DATE)  return new Date(LAST_DATE);
    return date;
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
  }

  // Convert '15:30' → '3:30 PM'. Returns '' for null/empty.
  function to12Hour(t) {
    if (!t) return '';
    const [h, m] = t.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12}:${String(m).padStart(2, '0')} ${period}`;
  }

  // A readable time range for a block: '7:30 AM – 9:00 AM', '7:30 AM', or 'All day'.
  function timeRange(block) {
    if (!block.start) return 'All day';
    if (!block.end)   return to12Hour(block.start);
    return `${to12Hour(block.start)} – ${to12Hour(block.end)}`;
  }


  /* =========================================================================
     RENDERING
     ========================================================================= */

  // Build the legend from CAREGIVERS (so it always matches the data).
  function renderLegend() {
    const legend = document.getElementById('legend');
    legend.innerHTML = '';
    Object.values(CAREGIVERS).forEach(function (c) {
      const item = document.createElement('div');
      item.className = 'legend__item';
      item.innerHTML =
        `<span class="legend__swatch" style="background:${c.color}"></span>` +
        `<span class="legend__label">${c.name}</span>`;
      legend.appendChild(item);
    });
  }

  // Build one day card.
  function renderDay(date) {
    const card = document.createElement('article');
    card.className = 'day';
    if (sameDay(date, startOfToday())) card.classList.add('day--today');

    const weekend = date.getDay() === 0 || date.getDay() === 6;
    if (weekend) card.classList.add('day--weekend');

    // Header: weekday + date number
    const header = document.createElement('header');
    header.className = 'day__header';
    header.innerHTML =
      `<span class="day__weekday">${WEEKDAY_NAMES[date.getDay()]}</span>` +
      `<span class="day__date">${MONTH_NAMES[date.getMonth()].slice(0,3)} ${date.getDate()}</span>` +
      (sameDay(date, startOfToday()) ? `<span class="day__today-tag">Today</span>` : '');
    card.appendChild(header);

    // Body: the responsibility blocks
    const body = document.createElement('div');
    body.className = 'day__body';

    const blocks = (SCHEDULE[dateKey(date)] || []).slice();
    if (blocks.length === 0) {
      body.innerHTML = `<p class="day__empty">No plans yet</p>`;
    } else {
      // Sort so timed blocks appear in chronological order; all-day items first.
      blocks.sort(function (a, b) {
        if (!a.start && b.start) return -1;
        if (a.start && !b.start) return 1;
        return (a.start || '').localeCompare(b.start || '');
      });
      blocks.forEach(function (block) {
        body.appendChild(renderBlock(block));
      });
    }

    card.appendChild(body);
    return card;
  }

  // Build a single responsibility block (one colored entry inside a day).
  function renderBlock(block) {
    const cg = CAREGIVERS[block.who] || CAREGIVERS.handoff;
    const el = document.createElement('div');
    el.className = 'block';
    if (block.who === 'off') el.classList.add('block--off');
    el.style.setProperty('--block-color', cg.color);

    let html =
      `<div class="block__top">` +
        `<span class="block__who">${cg.name}</span>` +
        `<span class="block__time">${timeRange(block)}</span>` +
      `</div>` +
      `<div class="block__title">${block.title}</div>`;

    if (block.note) {
      html += `<div class="block__note">${block.note}</div>`;
    }
    el.innerHTML = html;
    return el;
  }

  // Render the whole current week (the 7 day cards + the week label).
  function renderWeek() {
    const grid = document.getElementById('week-grid');
    grid.innerHTML = '';

    const sunday = addDays(currentMonday, 6);

    // Week label, e.g. "June 15 – 21, 2026"
    const label = (currentMonday.getMonth() === sunday.getMonth())
      ? `${MONTH_NAMES[currentMonday.getMonth()]} ${currentMonday.getDate()} – ${sunday.getDate()}, ${sunday.getFullYear()}`
      : `${MONTH_NAMES[currentMonday.getMonth()].slice(0,3)} ${currentMonday.getDate()} – ` +
        `${MONTH_NAMES[sunday.getMonth()].slice(0,3)} ${sunday.getDate()}, ${sunday.getFullYear()}`;
    document.getElementById('week-label').textContent = label;

    for (let i = 0; i < 7; i++) {
      grid.appendChild(renderDay(addDays(currentMonday, i)));
    }

    // Enable/disable nav buttons at the edges of the season.
    document.getElementById('prev-week').disabled = mondayOf(FIRST_DATE) >= currentMonday;
    document.getElementById('next-week').disabled = addDays(currentMonday, 7) > LAST_DATE;
  }


  /* =========================================================================
     NAVIGATION
     ========================================================================= */

  function goPrev() { currentMonday = addDays(currentMonday, -7); renderWeek(); }
  function goNext() { currentMonday = addDays(currentMonday,  7); renderWeek(); }
  function goToday() {
    currentMonday = mondayOf(clampToSchedule(startOfToday()));
    renderWeek();
  }


  /* =========================================================================
     INIT
     ========================================================================= */

  function init() {
    renderLegend();
    renderWeek();

    document.getElementById('prev-week').addEventListener('click', goPrev);
    document.getElementById('next-week').addEventListener('click', goNext);
    document.getElementById('today-btn').addEventListener('click', goToday);

    // Keyboard arrows for quick navigation on desktop.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'ArrowRight') goNext();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
