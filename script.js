var cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    // Remove flip from all cards
    for (var j = 0; j < cards.length; j++) {
      cards[j].classList.remove('flipped');
    }

    // Add flip to the clicked one
    this.classList.add('flipped');
  });
}
