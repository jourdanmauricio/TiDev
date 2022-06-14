const d = document;

export default function searchFilters(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      console.log(e.key);
    }
  });
}
