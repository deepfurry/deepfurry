const canonicalPath = (pathname: string): string => {
    const normalized = pathname.replace(/\\/g, "/");

    if (normalized === "/" || normalized.endsWith("/index.html")) {
        return "/index.html";
    }

    return normalized.replace(/\/+$/, "");
};

const syncNavigationState = () => {
    const currentPath = canonicalPath(window.location.pathname);

    document.querySelectorAll<HTMLAnchorElement>("nav a[href]").forEach((link) => {
        const href = link.getAttribute("href");

        if (!href) {
            return;
        }

        const linkPath = canonicalPath(new URL(href, window.location.href).pathname);
        const isCurrent = linkPath === currentPath;

        link.toggleAttribute("aria-current", isCurrent);

        if (isCurrent) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncNavigationState, { once: true });
} else {
    syncNavigationState();
}
