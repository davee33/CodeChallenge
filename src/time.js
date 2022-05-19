function Time() {
  var day = new Date();
  var hr = day.getHours();

  if (
    hr == 24 ||
    hr == 1 ||
    hr == 2 ||
    hr == 3 ||
    hr == 4 ||
    hr == 5 ||
    hr == 6 ||
    hr == 7 ||
    hr == 8
  ) {
    document.write(
      "<link rel='stylesheet' href='./src/styles.css'><h1 class='hello'>Hello World</h1>"
    );
  }
  if (hr == 8 || hr == 9 || hr == 10 || hr == 11) {
    document.write(
      "<link rel='stylesheet' href='./src/styles.css'><h1 class='morning'>Good Morning!</h1>"
    );
  }
  if (hr == 12 || hr == 13 || hr == 14 || hr == 15 || hr == 16) {
    document.write(
      "<link rel='stylesheet' href='./src/styles.css'><h1 class='afternoon'>Good Afternoon!</h1>"
    );
  }
  if (
    hr == 17 ||
    hr == 18 ||
    hr == 19 ||
    hr == 20 ||
    hr == 21 ||
    hr == 22 ||
    hr == 23
  ) {
    document.write(
      "<link rel='stylesheet' href='./src/styles.css'><h1 class='evening'>Good Evening!</h1>"
    );
  }
}
export { Time };
