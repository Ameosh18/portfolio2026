# Dark/Light Mode Toggle — Implementation Plan

## Context
The portfolio (vanilla JS SPA, no framework) is permanently dark. The user wants a navbar toggle to switch between dark and light themes for accessibility. All colours in both modes must meet WCAG AA/AAA contrast ratios. The user confirmed: default to OS preference (`prefers-color-scheme`), icon-only sun/moon toggle, light-mode accent `#7A5C2E`.

## Non-Negotiable Constraint
**Do not break the current dark mode.** Every change is purely additive:
- New CSS variables in `:root` are assigned the exact same values as today's hardcoded equivalents — dark mode is pixel-identical before and after.
- `html[data-theme="light"]` only activates when the attribute is explicitly set to `"light"`.
- The FOUC script defaults to `"dark"` unless the OS preference or localStorage says otherwise.
- Replacing hardcoded values with `var()` references is safe because each variable's `:root` value matches what was hardcoded.

---

## WCAG-Compliant Colour Palettes

### Dark mode (current — verified)
| Token | Value | Contrast vs bg |
|---|---|---|
| `--bg` | `#0A0A0A` | — |
| `--surface` | `#111111` | — |
| `--border` | `#1F1F1F` | — |
| `--text` | `#FFFFFF` | 21:1 ✅ AAA |
| `--muted` | `#AAAAAA` | 8.5:1 ✅ AAA |
| `--accent` | `#C8A97E` | 9:1 ✅ AAA |

### Light mode (new)
| Token | Value | Contrast vs bg |
|---|---|---|
| `--bg` | `#F8F5EF` | — |
| `--surface` | `#FFFFFF` | — |
| `--border` | `#DDD8CF` | — |
| `--text` | `#1A1A1A` | ~16:1 ✅ AAA |
| `--muted` | `#595550` | ~6:1 ✅ AA |
| `--accent` | `#7A5C2E` | ~5.1:1 ✅ AA (AAA for large text) |

---

## Additional Semantic Variables (new)
These cover RGBA values currently hardcoded throughout the codebase:

```
--nav-bg              dark: rgba(10,10,10,0.92)      light: rgba(248,245,239,0.92)
--mobile-menu-bg      dark: rgba(10,10,10,0.97)      light: rgba(248,245,239,0.97)
--nav-link-color      dark: rgba(255,255,255,0.55)   light: rgba(26,26,26,0.70)
--mobile-menu-divider dark: rgba(255,255,255,0.04)   light: rgba(26,26,26,0.08)
--card-bg             dark: rgba(17,17,17,0.65)      light: rgba(255,255,255,0.85)
--dot-color           dark: #1A1A1A                  light: #DDD8CF
--scrollbar-thumb     dark: rgba(200,169,126,0.2)    light: rgba(122,92,46,0.3)
--scrollbar-thumb-hover dark: rgba(200,169,126,0.4)  light: rgba(122,92,46,0.5)
--noise-opacity       dark: 0.4                      light: 0.15
```

Nav link contrast in light mode: `rgba(26,26,26,0.70)` ≈ #4D4D4D on nav bg `#F1EEE8` → ~5.8:1 ✅ AA

---

## Files to Modify

### 1. `style.css`
**a) Extend `:root` with new semantic variables** (add after existing 6 variables on line 9):
- `--nav-bg`, `--mobile-menu-bg`, `--nav-link-color`, `--mobile-menu-divider`, `--card-bg`, `--dot-color`, `--scrollbar-thumb`, `--scrollbar-thumb-hover`, `--noise-opacity`

**b) Add `html[data-theme="light"]` block** after `:root`:
- Override all 6 base tokens + all 9 semantic tokens with light-mode values

**c) Update hardcoded values → CSS variables:**
- Line 23: `scrollbar-color` → `var(--scrollbar-thumb) transparent`
- Line 29: scrollbar thumb → `var(--scrollbar-thumb)`
- Line 32: scrollbar hover → `var(--scrollbar-thumb-hover)`
- Line 52: `body::before` opacity → `var(--noise-opacity)`
- Line 66: nav background → `var(--nav-bg)`
- Line 96: nav link color → `var(--nav-link-color)`
- Line 209: mobile menu background → `var(--mobile-menu-bg)`
- Line 249: mobile menu divider border → `var(--mobile-menu-divider)`
- Line 405: dot grid color → `var(--dot-color)`
- Line 434: floating card background → `var(--card-bg)`

**d) Add theme transition** — append `background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease` to the **existing** `transition` declarations on `body`, `nav`, `.mobile-menu`, `.site-footer`. Where no transition exists yet, add a new scoped rule. **Do not use a broad `*` rule** — that would override the precise cubic-bezier transitions on buttons, cards, and nav links already in place.

**e) Add theme toggle button styles** in the nav section:
```css
.theme-toggle { width:40px; height:40px; border-radius:50%; background:transparent;
  border:1px solid var(--border); color:var(--text); cursor:pointer;
  display:flex; align-items:center; justify-content:center; padding:0; flex-shrink:0;
  transition:background 0.2s, border-color 0.2s; margin-right:12px; }
.theme-toggle:hover { background:var(--surface); border-color:var(--accent); }
.theme-toggle:focus-visible { outline:2px solid var(--accent); outline-offset:2px; }
.theme-toggle svg { width:16px; height:16px; stroke:currentColor; fill:none;
  stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
/* Show sun in dark mode (click → light), moon in light mode (click → dark) */
html[data-theme="light"] .icon-sun { display:none; }
html:not([data-theme="light"]) .icon-moon { display:none; }
```

**f) Responsive toggle visibility** — the toggle sits between `.nav-links` and `.nav-hamburger` in the DOM. At ≤768px, nav-links are hidden but the toggle must stay visible. Add responsive rules:
```css
/* Toggle always visible, but tighten margin on small screens */
@media (max-width: 768px) {
  .theme-toggle { margin-right: 8px; }
}
@media (max-width: 480px) {
  .theme-toggle { margin-right: 4px; }
}
```
The hamburger and toggle sit side-by-side on mobile; no layout change needed since both are `flex-shrink:0` items in the nav flex row.

---

### 2. `components.js`
**a) Add theme toggle button** to `navHTML` between `.nav-links` and `.nav-hamburger`:
```html
<button class="theme-toggle" id="theme-toggle" aria-label="Switch to light mode">
  <svg class="icon-sun" viewBox="0 0 24 24"><!-- sun rays + circle --></svg>
  <svg class="icon-moon" viewBox="0 0 24 24"><!-- crescent path --></svg>
</button>
```

**b) Replace all hardcoded hex/rgba values** in the injected `<style>` block:
- `rgba(10,10,10,0.92)` → `var(--nav-bg)`
- `rgba(10,10,10,0.97)` → `var(--mobile-menu-bg)`
- `rgba(255,255,255,0.55)` → `var(--nav-link-color)`
- `rgba(255,255,255,0.04)` → `var(--mobile-menu-divider)`
- `#1F1F1F` → `var(--border)`
- `#fff` / `#ffffff` / `#FFFFFF` → `var(--text)`
- `#C8A97E` → `var(--accent)`
- `#888` / `#888888` → `var(--muted)`
- `#666666` → `var(--muted)`
- `#0A0A0A` (footer bg) → `var(--bg)`
- `#FFFFFF` (footer statement) → `var(--text)`
- `#D4B896` (footer link hover) → `var(--accent)`

**c) Add theme toggle JavaScript** at the end of the IIFE (after hamburger init):
```javascript
// ── THEME TOGGLE ──
var themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  function syncToggleBtn() {
    var t = document.documentElement.getAttribute('data-theme') || 'dark';
    themeToggleBtn.setAttribute('aria-label',
      t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  themeToggleBtn.addEventListener('click', function() {
    var cur = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncToggleBtn();
  });
  syncToggleBtn();
  // Respond to OS changes when user has no saved preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        syncToggleBtn();
      }
    });
  }
}
```

---

### 3. `index.html`
**Add FOUC-prevention script** in `<head>` BEFORE the `<link rel="stylesheet">` tag:
```html
<script>
(function(){
  var s = localStorage.getItem('theme');
  var p = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', s || p);
})();
</script>
```
This sets `data-theme` before any CSS parses, preventing flash of wrong theme.

---

### 4. `digisense.html`, `pfsone.html`, `work.html`
Each has its own `<style>` block with `:root` dark variables. For each file:

**a) Add FOUC script** in `<head>` before the `<style>` tag (same inline script as index.html).

**b) Add `html[data-theme="light"]` block** immediately after the existing `:root { }` block inside the `<style>` tag:
```css
html[data-theme="light"] {
  --bg: #F8F5EF; --surface: #FFFFFF; --border: #DDD8CF;
  --text: #1A1A1A; --muted: #595550; --accent: #7A5C2E;
  --nav-bg: rgba(248,245,239,0.92); --mobile-menu-bg: rgba(248,245,239,0.97);
  --nav-link-color: rgba(26,26,26,0.70); --mobile-menu-divider: rgba(26,26,26,0.08);
  --noise-opacity: 0.15; --scrollbar-thumb: rgba(122,92,46,0.3);
  --scrollbar-thumb-hover: rgba(122,92,46,0.5);
}
```
Also update `body::before { opacity: var(--noise-opacity); }` in each file.

---

## Responsive Behaviour Summary
| Breakpoint | Toggle position | Nav links | Hamburger |
|---|---|---|---|
| Desktop (>1024px) | Right of nav links, left of nothing | Visible | Hidden |
| Tablet (768–1024px) | Right of nav links | Visible | Hidden |
| Mobile (≤768px) | Left of hamburger button | Hidden | Visible |

The toggle is always visible in all three layouts. On mobile it appears as a 40×40 circle immediately to the left of the hamburger, giving both controls a comfortable combined tap target area.

The **mobile menu overlay** (`--mobile-menu-bg`) and all its text/accent colours already use CSS variables, so it inherits the correct theme automatically at all viewport sizes.

---

## Execution Order
1. `style.css` — extend `:root`, add `[data-theme="light"]` block, update hardcoded values, add transition + toggle styles
2. `components.js` — add toggle button HTML, replace hardcoded values in injected styles, add theme JS
3. `index.html` — add FOUC script in `<head>`
4. `digisense.html` — add FOUC script + light mode `:root` overrides
5. `pfsone.html` — same
6. `work.html` — same

---

## WCAG Checklist
| Criterion | Requirement | Status |
|---|---|---|
| 1.4.3 Contrast (AA) | Text ≥ 4.5:1 | `--text` 16:1, `--muted` 6:1, `--accent` 5.1:1 ✅ |
| 1.4.6 Contrast (AAA) | Text ≥ 7:1 | `--text` 16:1 ✅, `--muted` 6:1 (AA only) |
| 1.4.11 Non-text | UI components ≥ 3:1 | Borders `#DDD8CF` vs `#FFFFFF` = low; decorative only. Interactive borders use `--accent` (5.1:1) ✅ |
| 2.4.7 Focus visible | Focus indicators visible | `outline: 2px solid var(--accent); offset: 2px` ✅ |
| 2.5.5 Target size | ≥ 44×44px | Toggle is 40×40 (minimum) — note for user |
| 1.4.13 No FOUC | No content flash | Inline FOUC script in `<head>` ✅ |
| SC 1.3.3 | Not colour-only | Icon + aria-label used ✅ |

**Note on 2.5.5**: The 40×40px toggle meets WCAG 2.5.8 (AA, 24px minimum) and is close to 2.5.5 (AAA, 44px). Can be bumped to 44px if needed.

---

## Verification
1. Open `index.html` in a browser — confirm dark mode loads by default (or light if OS is set to light)
2. Click the toggle — confirm smooth transition, icon flips (sun ↔ moon), aria-label updates
3. Refresh page — confirm preference is persisted via localStorage
4. Open DevTools → toggle OS colour scheme — confirm the site responds when no localStorage preference is set
5. Navigate to `digisense.html` / `pfsone.html` / `work.html` — confirm theme persists across pages
6. Tab to toggle button — confirm `focus-visible` ring is clearly visible in both modes
7. Run contrast checker on both themes (e.g. browser accessibility panel)
