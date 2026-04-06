/**
 * Off-Canvas-Navigation: Toggle, Backdrop, Escape, Fokus zurück auf Toggle.
 * Scroll-Lock mit position:fixed (zuverlässiger auf iOS als nur overflow:hidden).
 */
let savedScrollY = 0;

function lockBodyScroll(): void {
  savedScrollY = window.scrollY;
  document.documentElement.classList.add("drawer-open");
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockBodyScroll(): void {
  document.documentElement.classList.remove("drawer-open");
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, savedScrollY);
}

function initHeaderDrawer(): void {
  const header = document.getElementById("site-header");
  const toggle = header?.querySelector<HTMLButtonElement>("[data-drawer-toggle]");
  const drawer = document.getElementById("site-nav-drawer");
  if (!header || !toggle || !drawer) return;
  // Mehrfach-Initialisierung (z. B. wenn Script auf mehreren Seiten/Slots eingebunden ist) verhindern
  if (header.dataset.drawerInit === "true") return;
  header.dataset.drawerInit = "true";

  const closeBtn = drawer.querySelector<HTMLButtonElement>("[data-drawer-close]");
  const backdrop = drawer.querySelector<HTMLElement>("[data-drawer-backdrop]");

  const setOpen = (open: boolean) => {
    drawer.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) {
      lockBodyScroll();
      drawer.removeAttribute("inert");
      closeBtn?.focus();
    } else {
      unlockBodyScroll();
      drawer.setAttribute("inert", "");
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(!drawer.classList.contains("is-open"));
  });

  backdrop?.addEventListener("click", () => setOpen(false));
  closeBtn?.addEventListener("click", () => setOpen(false));

  drawer.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest("a");
    if (a) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      e.preventDefault();
      setOpen(false);
    }
  });

  const desktopMq = window.matchMedia("(min-width: 1024px)");
  const closeIfDesktop = () => {
    if (desktopMq.matches && drawer.classList.contains("is-open")) setOpen(false);
  };
  desktopMq.addEventListener("change", closeIfDesktop);
  window.addEventListener("resize", closeIfDesktop);
}

function run(): void {
  initHeaderDrawer();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run, { once: true });
} else {
  run();
}
