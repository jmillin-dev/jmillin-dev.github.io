document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-links').forEach(function (navLinks) {
    if (navLinks.querySelector('.dropdown')) {
      return;
    }

    var dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    var button = document.createElement('button');
    button.className = 'dropdown-toggle';
    button.type = 'button';
    button.textContent = 'Contacts';

    var menu = document.createElement('div');
    menu.className = 'dropdown-menu';

    var contacts = [
      {
        label: 'Personal Email: ' + 'jeremyhome' + '888' + '@' + 'gmail' + '.com',
        href: 'mailto:' + 'jeremyhome' + '888' + '@' + 'gmail' + '.com'
      },
      {
        label: 'School Email: ' + 'jmillin' + '@' + 'browning' + '.edu',
        href: 'mailto:' + 'jmillin' + '@' + 'browning' + '.edu'
      },
      {
        label: 'Phone Number: ' + '917' + '-' + '670' + '-' + '4273',
        href: 'tel:' + '+1' + '917' + '670' + '4273'
      },
      {
        label: 'Instagram: jeremy.millin',
        href: 'https://www.instagram.com/jeremy.millin/',
        newTab: true
      }
    ];

    contacts.forEach(function (contact) {
      var link = document.createElement('a');
      link.href = contact.href;
      link.textContent = contact.label;
      if (contact.newTab) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      menu.appendChild(link);
    });

    dropdown.appendChild(button);
    dropdown.appendChild(menu);
    navLinks.appendChild(dropdown);
  });
});
