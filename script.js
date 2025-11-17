// IntersectionObserverで .fade-in 要素を監視し、ビューに入ったら .visible を付与してフェードインさせます.
document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // 一度フェードインしたら監視を止める
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(t => io.observe(t));
  } else {
    // IntersectionObserver 非対応ブラウザ: 全部表示
    targets.forEach(t => t.classList.add('visible'));
  }
});