/**
 * Katalog-Filter auf /preise/ (?gruppe=damen|herren|extensions)
 */
const FILTER_KEYS = ["alle", "damen", "herren", "extensions"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

function isFilterKey(v: string | null): v is FilterKey {
  return v !== null && (FILTER_KEYS as readonly string[]).includes(v);
}

function initPreiseFilter(): void {
  const root = document.getElementById("preise-katalog");
  if (!root) return;

  const buttons = root.querySelectorAll<HTMLButtonElement>("[data-preise-filter]");
  const cards = root.querySelectorAll<HTMLElement>("[data-catalog-group]");
  const empty = root.querySelector<HTMLElement>("[data-preise-filter-empty]");

  const apply = (key: FilterKey, updateUrl: boolean) => {
    buttons.forEach((b) => {
      const active = b.dataset.preiseFilter === key;
      b.setAttribute("aria-pressed", active ? "true" : "false");
      b.classList.toggle("preise-page__filter-btn--active", active);
    });

    let visible = 0;
    cards.forEach((card) => {
      const g = card.dataset.catalogGroup;
      const show = key === "alle" || g === key;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (empty) {
      empty.hidden = visible > 0;
    }

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (key === "alle") {
        url.searchParams.delete("gruppe");
      } else {
        url.searchParams.set("gruppe", key);
      }
      history.replaceState({}, "", url.pathname + url.search + url.hash);
    }
  };

  const param = new URLSearchParams(window.location.search).get("gruppe");
  const initial = isFilterKey(param) ? param : "alle";
  apply(initial, false);

  buttons.forEach((b) => {
    b.addEventListener("click", () => {
      const k = b.dataset.preiseFilter;
      if (isFilterKey(k)) apply(k, true);
    });
  });
}

initPreiseFilter();
