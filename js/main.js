// スクロールして画面に入った項目を、下からふわっと浮き出させる
(function () {
  const items = document.querySelectorAll('.reveal');

  // 古いブラウザなど、仕組みが使えないときは最初から全部表示する
  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // 一度出たら、もう見張らない
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  items.forEach(item => observer.observe(item));
})();