window.APP = window.APP || {};
(function(APP, d, w) {

  Element.prototype.hasClass = function (className) {
    return new RegExp('\\b' + className + '\\b').test(this.className);
  };

  Array.prototype.shuffle = function(shouldUnshift) {
    var i, j, temp;

    if (shouldUnshift) { this.unshift('') };
    for (i = this.length -1; i > 0; i --) {
      j = Math.floor(Math.random() * i);
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }

    return this;
  };

  APP.helpers = {

    ajax: function(url, callback) {
      if (!url) { throw new Error('URL is required.'); }

      let ajax = new XMLHttpRequest();
      if (callback && 'function' === typeof callback) {
        ajax.addEventListener('load', callback);
      }
      ajax.open('GET', url);
      ajax.send();
    },

    createElement: function(tagname, className, id) {
      let el = d.createElement(tagname);
      if (id) { el.id = id; }
      el.className = className;
      return el;
    }

  };
})(window.APP, document, window);
