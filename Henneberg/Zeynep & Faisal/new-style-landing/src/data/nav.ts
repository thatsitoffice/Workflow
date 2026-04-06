export type NavItem = { href: string; label: string };

/**
 * Hauptnavigation — gleiche Ziele wie im Header (Unterseiten: Anker zeigen auf Startseite).
 */
export function getNavColumns(pathname: string): { left: NavItem[]; right: NavItem[] } {
  const path = pathname.replace(/\/$/, "") || "/";
  const isHome = path === "/";
  const toSection = (fragment: string) => (isHome ? `#${fragment}` : `/#${fragment}`);

  const left: NavItem[] = [
    { href: "/", label: "Home" },
    { href: toSection("vertrauen"), label: "Vorteile" },
    { href: "/preise/", label: "Preise" },
  ];

  const right: NavItem[] = [
    { href: toSection("stimmen"), label: "Stimmen" },
    { href: toSection("stimmung"), label: "Atmosphäre" },
    { href: toSection("produkte"), label: "Produkte" },
  ];

  return { left, right };
}

export function getMainNavItems(pathname: string): NavItem[] {
  const { left, right } = getNavColumns(pathname);
  return [...left, ...right];
}
