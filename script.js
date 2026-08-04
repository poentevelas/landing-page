// Mantém apenas uma pergunta do FAQ aberta por vez.
document.querySelectorAll('.poente-faq__item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;

    document.querySelectorAll('.poente-faq__item[open]').forEach((otherItem) => {
      if (otherItem !== item) otherItem.removeAttribute('open');
    });
  });
});
