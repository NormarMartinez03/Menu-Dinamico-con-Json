const menu = document.getElementById('menu');

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

// Cargar el menú usando fetch()
function cargardata() {
fetch('https://github.com/NormarMartinez03/Menu-Dinamico-con-Json/edit/main/json/Menu.json')
  .then(response => response.json())
  .then(data => {
    menu.appendChild(createMenu(data.items));
  })
  .catch(error => console.error('Error al cargar el menú:', error));
}
cargardata();
