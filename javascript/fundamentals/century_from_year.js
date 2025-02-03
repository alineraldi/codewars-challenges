// Given a year, return the century it is in.

function century(year) {
    total = (year + 99) / 100 | 0
    return total;
  }