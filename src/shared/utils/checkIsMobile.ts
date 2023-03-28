export function checkIsMobile() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}
