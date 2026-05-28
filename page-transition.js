document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('page-loaded');

  document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');

    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.target === '_blank'
    ) {
      return;
    }

    var destination;

    try {
      destination = new URL(href, window.location.href);
    } catch (error) {
      return;
    }

    if (destination.origin !== window.location.origin) {
      return;
    }

    link.addEventListener('click', function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      document.body.classList.add('page-exiting');

      setTimeout(function () {
        window.location.href = destination.href;
      }, 180);
    });
  });
});

window.addEventListener('pageshow', function () {
  document.body.classList.remove('page-exiting');
  document.body.classList.add('page-loaded');
});
