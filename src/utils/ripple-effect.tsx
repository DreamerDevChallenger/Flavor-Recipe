export default function RippleEffect(
  event: React.MouseEvent<HTMLButtonElement>
) {
  const ref = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(ref.clientWidth, ref.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - ref.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - ref.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = ref.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  ref.appendChild(circle);
}
