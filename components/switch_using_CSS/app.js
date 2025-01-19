const d = document;
const $checkboxes = d.querySelectorAll('input[type="checkbox"]');
const $mainTitle = d.getElementById('main-title');
const originalColor = getComputedStyle($mainTitle).color;

console.log($checkboxes)
console.log($mainTitle)
console.log(originalColor)


$checkboxes.forEach($checkbox => {
  $checkbox.addEventListener('click', (e) => {
    const $slider = e.target.nextElementSibling;
    console.log($slider)
    if (e.target.checked) {
      if ($slider.classList.contains('s1')) {
        $mainTitle.style.color = getComputedStyle(d.documentElement).getPropertyValue('--color-button-one');
      } else if ($slider.classList.contains('s2')) {
        $mainTitle.style.color = getComputedStyle(d.documentElement).getPropertyValue('--color-button-two');
      } else if ($slider.classList.contains('s3')) {
        $mainTitle.style.color = getComputedStyle(d.documentElement).getPropertyValue('--color-button-three');
      } else if ($slider.classList.contains('s4')) {
        $mainTitle.style.color = getComputedStyle(d.documentElement).getPropertyValue('--color-button-four');
      }
    } else {
      $mainTitle.style.color = originalColor;
    }
  });
});
