(function () {
    const script = document.currentScript;
    const startSelector = script.dataset.startSelector;
    const destination = script.dataset.destination;
    const button = document.createElement('button');

    button.type = 'button';
    button.textContent = 'Pular jogo';
    button.hidden = true;
    button.setAttribute('aria-label', 'Pular minigame');
    button.style.cssText = [
        'position:fixed',
        'top:16px',
        'right:16px',
        'z-index:10000',
        'padding:12px 18px',
        'border:2px solid #173b45',
        'border-radius:6px',
        'background:#fff',
        'color:#173b45',
        'font:700 16px Arial,sans-serif',
        'cursor:pointer',
        'box-shadow:0 2px 8px rgba(0,0,0,.25)'
    ].join(';');
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        if (destination === 'stick-next') {
            let score = {};
            try {
                score = JSON.parse(localStorage.getItem('pontuacao')) || {};
            } catch (error) {
                score = {};
            }
            const winner = Object.keys(score).reduce((best, group) =>
                score[group] > (score[best] || 0) ? group : best, 'GRP1');
            const nextStage = { GRP1: 'grp1', GRP2: 'grp2', GRP3: 'grp3', GRP4: 'grp4' }[winner] || 'grp1';
            window.location.href = `../P2/${nextStage}.html`;
            return;
        }

        window.location.href = destination;
    });

    function revealAfterFiveSeconds() {
        window.setTimeout(function () {
            button.hidden = false;
        }, 5000);
    }

    if (startSelector) {
        const startButton = document.querySelector(startSelector);
        if (startButton) {
            startButton.addEventListener('click', revealAfterFiveSeconds, { once: true });
        }
    } else {
        revealAfterFiveSeconds();
    }
})();