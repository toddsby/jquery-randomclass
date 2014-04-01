#jQuery Random Class

Random class name generator for jQuery

###Install
Download jQuery & jQuery Random Class
	<script src="jquery.js"></script>
	<script src="jquery-randomclass.js"></script>

###Example
Basic usage
	$('p:nth-of-type(3)').randomclass();

	//produces
	<p></p> 
	<p></p>
	<p class="qgh9868a"></p>

###Configuration
Random Class supports the following options
	$('p:nth-of-type(3)').randomclass({
	    length:14
	});

##Helper function
Random Class can also be used to generate random strings of a specified length

###Example
	
	$('p:nth-of-type(3)').randomclass({addClass:false});
	var randomclass = $('p:nth-of-type(3)').data('randomclass');

	var array = randomclass.generate(9,4);
	console.log(array);

	var string = randomclass.generate(9);
	console.log(string);

	//produces
	["99k7ayi50", "iy37kct7p", "f28t7gkhu", "gf66u2haf"] i1ulaq8yf

##AMD / RequireJS
Random Class is also a valid AMD Module that works with RequireJS
	requirejs.config({
		paths: {
			"randomclass" : "/path/to/jquery-randomclass"
		}
	});
	