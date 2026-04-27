(function () {
      const hamburger = document.querySelector('.nav-hamburger');
      const menu = document.getElementById('mobile-menu');
      const menuLinks = menu.querySelectorAll('a');

      function openMenu() {
        hamburger.classList.add('is-open');
        menu.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        hamburger.classList.remove('is-open');
        menu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      hamburger.addEventListener('click', function () {
        hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
      });

      menuLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });
    })();

    // ── AI WORKFLOW STEP SEQUENCER ──
    (function () {
      const section = document.querySelector('.ai-workflow');
      if (!section) return;

      const steps = Array.from(section.querySelectorAll('.workflow-step'));
      if (!steps.length) return;

      let current = 0;
      let timer = null;

      function activate(index) {
        steps.forEach(function (step, i) {
          step.classList.toggle('is-active',   i === index);
          step.classList.toggle('is-inactive', i !== index);
        });
        current = index;
      }

      function advance() {
        activate((current + 1) % steps.length);
      }

      function startTimer() {
        clearInterval(timer);
        timer = setInterval(advance, 1400);
      }

      function stopTimer() {
        clearInterval(timer);
      }

      // Pause while the user's mouse is anywhere in the section
      section.addEventListener('mouseenter', stopTimer);
      section.addEventListener('mouseleave', startTimer);

      // Click a step to jump to it, then resume auto-advance
      steps.forEach(function (step, i) {
        step.addEventListener('click', function () {
          activate(i);
          startTimer();
        });
      });

      // Kick off
      activate(0);
      startTimer();
    })();
