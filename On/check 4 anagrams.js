function isAnagram(s1, s2) {
    var str1 = s1.toLowerCase().split('').sort().join('').trim();
    var str2 = s2.toLowerCase().split('').sort().join('').trim();
    return str1===str2;
  }