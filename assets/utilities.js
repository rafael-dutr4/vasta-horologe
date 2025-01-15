const desktopMatch = window.matchMedia('(min-width: 1024px)');
const tabletMatch = window.matchMedia('(min-width: 768px)');

var mediaQueries = {
    desktop: desktopMatch,
    tablet: tabletMatch
}
