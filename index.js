const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
  animate: true,
  fps: 1200,
};


const sketch = (context, width, height, frame) => {
  
  let ox  = 1080 / 2;
  let oy = 1080 / 2;
  let llarg = 10;
  let gruix = 20;
  let quants = 1000;
  let llargada = 10;
  let ombra = 20;
  let t = 50;
  let i = 0;
  let r = 0
  let g = 0
  let b = 0;
  
  console.log(t)
  
  const image = new Image();
  image.src = "plumeria.jpg"; 
  
  //context.fillStyle = 'blue';
  
  //context.fillRect(0, 0, width, height);

  return ({ context, width, height, frame }) => {
    //context.fillStyle = 'blue'
    //context.fillRect(0, 0, width, height);
    context.lineWidth = gruix; 
   
    t = Math.random()*100;

    //for (i = 1; i <= quants; i++) {
      
    c = (Math.random()*6)-1;
    c = Math.round(c);
      
     

      switch (c){
      
        case (1):
          
          ox = ox+llarg;
          
         
          
          
          break;
        case (2):
          
          
          ox = ox-llarg;
         
          
          break;
        case (3):
          
          
          oy = oy+llarg;
         
          
          
          break;
        case (4):
          
          oy = oy-llarg;
         
          break;
      
      }
      

      colorf = `rgba(0,0,0,0.01 )`
      colors = `rgba(0,0,0,0.02 )`
      colorf = `rgba(255,255,255,0.01)`

      context.beginPath();
      
      context.strokeStyle = colorf;
      context.fillStyle = colorf;
      context.moveTo(ox,oy);
      context.lineTo(ox+llargada,oy+llargada);
      context.stroke(); 
      context.strokeStyle = colors;
      context.fillStyle = colors;
      context.moveTo(ox+llargada,oy+llargada);
      context.lineTo(ox+llargada+ombra,oy+llargada+ombra);
      
    
      context.stroke();

      context.fillStyle = colorf;
      context.fillRect(0, 0, width, height);
      
      context.closePath();


      



      

    
    
  };
};

canvasSketch(sketch, settings);
