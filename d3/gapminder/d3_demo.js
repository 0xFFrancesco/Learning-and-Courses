d3.select('.main').html('');

//INSERT SVG
let svg = d3.select('.main').append('svg');
svg.attr('width', 600).attr('height', 300);

//CREATE AXIS SCALES
let scaleY = d3.scale.linear().domain([ 15, 90 ]).range([ 250, 0 ]);
let scaleX = d3.scale.log().domain([ 250, 100000 ]).range([ 0, 600 ]);

//CREATE A SCALE FOR ENCODING DATA TO CIRCLE AREAS
let scaleCircle = d3.scale.sqrt().domain([ 52070, 1380000000 ]).range([ 10, 40 ]);

svg.append('circle').attr('fill', 'red').attr('r', scaleCircle(1380000000)).attr('cx', scaleX(13330)).attr('cy', scaleY(77));