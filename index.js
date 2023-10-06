const tabsButtons = document.querySelectorAll('.mountain nav div');
const scheduleContainer = document.getElementById('schedule-container');
const mountain1 = document.getElementById('mountain1');
const mountain2 = document.getElementById('mountain2');
const dots = document.querySelectorAll('.dot');
const accordions = document.querySelectorAll('.accordion');

const switchTab = (e) => {
  if (e.target.closest('div').id === 'mountain1') {
    scheduleContainer.style.backgroundImage = 'url("./assets/tab-1.png")';
    mountain1.classList.add('active');
    mountain2.classList.remove('active');
  } else {
    scheduleContainer.style.backgroundImage = 'url("./assets/tab-2.png")';
    mountain2.classList.add('active');
    mountain1.classList.remove('active');
  }
};

const switchDot = (selectedDot) => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => {
    const imgDot = document.querySelector(
      `#img-${dot.getAttribute('data-dot')}`,
    );

    if (dot.getAttribute('data-dot') === selectedDot) {
      dot.classList.add('current-dot');
      imgDot.style.display = 'block';
    } else {
      dot.classList.remove('current-dot');
      imgDot.style.display = 'none';
    }
  });
};

tabsButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (e) => {
    switchTab(e);
  });
});

dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    const selectedDot = e.target.getAttribute('data-dot');
    switchDot(selectedDot);
  });
});

accordions.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    const panel = e.target.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});
