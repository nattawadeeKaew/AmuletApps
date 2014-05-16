var args = arguments[0] || {};
 /*console.log("title:" + args.title + ", division: " + args.division 
 + ", a: " + args.a 
 + ", b: " + args.b
 + ", c: " + args.c
 + ", d: " + args.d
 + ", e: " + args.e
 + ", f: " + args.f
 
 );*/

$.titleLabel.text = args.title   || 'Default Title';
$.divisionLabel.text = args.division || 'Default division';
$.yearLabel.text = args.year || 'Default year';
$.groupLabel.text = args.groups || 'Default group';
$.proviceLabel.text = args.provice || 'Default provice';
$.typeLabel.text = args.type || 'Default type';
$.kindLabel.text = args.kind || 'Default kind';
$.observeLabel.text = args.observe || 'Default observe';