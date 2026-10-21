document.addEventListener('DOMContentLoaded', () => {
  const phrases = ['HELLO', 'THANK YOU', 'HOW ARE YOU?', 'GOOD MORNING'];
  const phraseNode = document.querySelector('[data-phrase]');
  let phraseIndex = 0;

  if (phraseNode) {
    setInterval(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      phraseNode.textContent = phrases[phraseIndex];
    }, 2200);
  }

  const targetButtons = document.querySelectorAll('[data-target]');
  targetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const mainButtons = document.querySelectorAll('.primary-btn, .secondary-btn');
  mainButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.getElementById('demo');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const toggleButton = document.querySelector('.camera-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isLive = toggleButton.textContent.trim() === 'Live';
      toggleButton.textContent = isLive ? 'Paused' : 'Live';
      toggleButton.setAttribute('aria-pressed', String(!isLive));

      const statusBadge = document.querySelector('.status-badge');
      if (statusBadge) {
        statusBadge.textContent = isLive ? 'Paused' : 'Streaming';
      }
    });
  }
});
