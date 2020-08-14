function reverse(str) {
    return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
  }