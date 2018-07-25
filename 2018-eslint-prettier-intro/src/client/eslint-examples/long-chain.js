/* eslint-disable no-undef */
const slugify = string => chain(string).toString().map(char => isLetterOrDigit(char)).join('').replace(/-+/g, '-').trim('-').value().toLowerCase();
