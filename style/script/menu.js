 const menu = document.getElementById('menu');

 const data = {
    "items": [
      {
        "name": "Inicio",
        "url": "index.html"
      },
      {
        "name": "Quienes Somos",
        "url": "info.html"
      },
      {
        "name": "Servicios",
        "url": "#",
        "items": [
          {
            "name": "mantenimiento",
            "url": "mantenimiento.html",
            "box": true
          },
          {
            "name": "Venta",
            "url": "venta.html",
            "box": true
          }
        ]
      },
      {
        "name": "Contacto",
        "url": "contacto.html"
      },
    {
      "name": "Registrate", 
      "url":"#"
    }
    ]
  };



  function createMenu(items) {
    const ul = document.createElement('ul');
    ul.classList.add('menu');

    items.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.textContent = item.name;
      a.href = item.url;

      li.appendChild(a);
      ul.appendChild(li);

      if (item.items) {
        const submenu = createMenu(item.items);
        li.appendChild(submenu);
        submenu.style.display = 'none';
        li.addEventListener('mouseover', () => {
          submenu.style.display = 'block';
        });
        li.addEventListener('mouseout', () => {
          submenu.style.display = 'none';
        });

        if (item.box) {
          const submenuBox = document.createElement('div');
          submenuBox.classList.add('submenu-box');
          submenuBox.appendChild(submenu);
          document.body.appendChild(submenuBox);
        }
      }
    });

    return ul;
  }

  menu.appendChild(createMenu(data.items));