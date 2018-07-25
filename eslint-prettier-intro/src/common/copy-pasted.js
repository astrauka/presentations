function (root, factory) {
  if (typeof exports === 'object' && exports) {
    module.exports = factory; // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(factory); // AMD
  } else {
    root.CharFunk = factory; // <script>
  }
}(this, (function () {'use strict';
        //Returns the value of this character according to the propSet in question
        getProperty=function(propSet,ch) {
          assertChar(ch);
          if(!propSet.CODEPOINTS) { inflateProperty(propSet); } //only done when needed.  this is pretty fast so ok to do it inline
          return findProperty(ch.charCodeAt(0),propSet.CODEPOINTS,0,propSet.CODEPOINTS.length);
      }
    }())));
