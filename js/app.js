(function () {
  var filter = 'All';
  var favorites = {};
  var cartCount = 0;

  var header = document.getElementById('header');
  var grid = document.getElementById('productGrid');
  var filterBar = document.getElementById('filterBar');
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');
  var toast = document.getElementById('toast');
  var cartBadge = document.getElementById('cartBadge');
  var fabTop = document.getElementById('fabTop');

  var toastTimer;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }

  function buildCard(p, i) {
    var card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = (i * 0.06) + 's';
    card.dataset.id = p.id;
    var heart = favorites[p.id] ? '❤️' : '🤍';
    card.innerHTML =
      '<div class="card-img-wrap">' +
        '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">' +
        '<span class="card-tag tag-' + p.tag + '">' + p.tag + '</span>' +
        '<button class="favorite-btn" data-action="favorite">' +
          '<span class="fav-icon">' + heart + '</span>' +
        '</button>' +
      '</div>' +
      '<div class="card-body">' +
        '<h3 class="card-title">' + p.title + '</h3>' +
        '<p class="card-price">' + p.price + '</p>' +
        '<button class="card-btn" data-action="addToCart">Add to Cart</button>' +
      '</div>';
    return card;
  }

  function renderProducts(f) {
    var list = f === 'All' ? PRODUCTS : PRODUCTS.filter(function (p) { return p.tag === f; });
    grid.innerHTML = '';
    if (!list.length) {
      grid.innerHTML = '<div class="empty-state"><div class="empty-icon">📦</div><p>No products found for "<strong>' + f + '</strong>".</p></div>';
      return;
    }
    var frag = document.createDocumentFragment();
    list.forEach(function (p, i) { frag.appendChild(buildCard(p, i)); });
    grid.appendChild(frag);
  }

  function updateFav(id) {
    var card = grid.querySelector('.card[data-id="' + id + '"]');
    if (!card) return;
    var icon = card.querySelector('.fav-icon');
    var btn = card.querySelector('.favorite-btn');
    if (favorites[id]) {
      icon.textContent = '❤️';
      btn.classList.add('favorited');
    } else {
      icon.textContent = '🤍';
      btn.classList.remove('favorited');
    }
  }

  function updateBadge() {
    cartBadge.textContent = cartCount;
    cartBadge.classList.toggle('show', cartCount > 0);
  }

  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('scrolled', y > 10);
    fabTop.classList.toggle('visible', y > 500);

    var sections = document.querySelectorAll('section[id], footer[id]');
    var current = 'home';
    sections.forEach(function (sec) {
      if (y >= sec.offsetTop - 120) current = sec.id;
    });
    document.querySelectorAll('.nav-link[data-section]').forEach(function (link) {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  grid.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var card = btn.closest('.card');
    var id = Number(card.dataset.id);
    var p = productMap[id];
    if (!p) return;

    if (btn.dataset.action === 'favorite') {
      favorites[id] = !favorites[id];
      updateFav(id);
      showToast(favorites[id] ? '❤️ "' + p.title + '" saved to favorites' : '"' + p.title + '" removed');
    }

    if (btn.dataset.action === 'addToCart') {
      cartCount++;
      updateBadge();
      btn.textContent = 'Added ✓';
      btn.style.background = 'var(--color-tag-new)';
      showToast('🛒 "' + p.title + '" added to cart (' + cartCount + ')');
      setTimeout(function () {
        btn.textContent = 'Add to Cart';
        btn.style.background = '';
      }, 1500);
    }
  });

  filterBar.addEventListener('click', function (e) {
    var chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterBar.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
    chip.classList.add('active');
    filter = chip.dataset.filter;
    renderProducts(filter);
  });

  function closeMenu() {
    menuBtn.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', function () {
    var opening = !mobileNav.classList.contains('open');
    menuBtn.classList.toggle('open', opening);
    mobileNav.classList.toggle('open', opening);
    document.body.style.overflow = opening ? 'hidden' : '';
  });

  mobileNav.addEventListener('click', function (e) {
    if (e.target.closest('.mobile-nav-item')) closeMenu();
  });

  fabTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  renderProducts('All');
  onScroll();
})();
