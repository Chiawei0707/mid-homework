const svg = d3.select('body').append('svg').attr('width',600).attr('height',300);
const height_male = svg.append('g').attr('transform','translate(100,100)');
height_male.append('line').attr('x1',0).attr('x2',173.5).style('stroke','blue');
height_male.append('circle').attr('cx',173.5).attr('cy',0).attr('r',5);
height_male.append('text').attr('x',0).attr('y',20).text("台灣男生平均身高173.5 cm");

const height_female = svg.append('g').attr('transform','translate(100,150)');
height_female.append('line').attr('x1',0).attr('x2',161.5).style('stroke','red');
height_female.append('circle').attr('cx',161.5).attr('cy',0).attr('r',5);
height_female.append('text').attr('x',0).attr('y',20).text("台灣女生平均身高161.5 cm");