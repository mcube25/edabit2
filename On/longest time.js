function longestTime(h, m, s) {
    let hour = h * 60 * 60,
      minutes = m * 60;
    if (hour > minutes && hour > s) {
      return h;
    } else if (minutes > hour && minutes > s) {
      return m;
    } else if (s > hour && s > hour) {
      return s;
    }
  }