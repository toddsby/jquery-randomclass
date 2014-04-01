/**
 * RandomClass - Random Class name generator - v1.0
 * http://doctype.co
 *
 * Copyright (c) 2014 Drew Toddsby
 * Licensed under MIT
 *
 */

// Object.create support test, and fallback for browsers without it
if ( typeof Object.create !== "function" ) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

(function( window, document, undefined ) {

var name = 'randomclass';

// Uses AMD or browser globals to create a jQuery plugin. See more: https://github.com/umdjs/umd/blob/master/jqueryPlugin.js
(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if(jQuery && !jQuery.fn.randomclass) {
      factory(jQuery);
  }
}
(function ($) {
  var Plugin = {
    init: function( elem, opts ) {
      var defaults = {
        length: 8,
        addClass: true
      };
      // Mix in the passed-in options with the default options
      this.opts = $.extend( {}, defaults, opts );

      // Save the element reference, both as a jQuery
      // reference and a normal reference
      this.elem  = elem;
      this.$elem = $(elem);

      // add class to elem
      this._display( this.$elem, this.opts );

      // return this so that we can chain and use the bridge with less code.
      return this;
    },
    generate: function ( len, loop ) {
      var l = 0, arr = [], text = '', possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
      if (typeof loop === 'undefined') {
        loop = 0; // if loop not defined, set loop to 0
      }
      // loop through possible characters and add them to text
     do {
        for ( var i=0; i < parseInt(len); i++ ) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        arr.push(text);
        if (loop > 0) {
          text = '';
        }
        l++;
      } while ( l < loop);
      if ( loop < 1 ) {
        return text;
      } else {
        return arr;
      }
    },
    _display: function ( elem, opts) {
      var text = this.generate( parseInt(opts.length));
      if ( opts.addClass === true ) {
          elem.addClass(text);
        }
    }
  };

// Create a plugin based on a defined object
  $.fn.randomclass = function( options ) {
    return this.each(function() {
      if ( ! $.data( this, name ) ) {
        $.data( this, name, Object.create(Plugin).init(
        this, options ) );
      }
    });
  };
}))
}( window, document ));
