function Main(){
    const hotspots = document.getElementsByClassName("hotspot");
    [...hotspots].forEach((element) => {
      if (element.hasAttribute("h-height") && element.hasAttribute("h-width")) {

        const hHeight=Number(element.getAttribute('h-height'));
        const hWidth=Number(element.getAttribute('h-width'));
        let height=Number(element.offsetHeight)
        let width=Number(element.offsetWidth)
        
        var ar=hWidth/hHeight;
        if(width<=height){
            var calculatedHeight=ar>1?width/ar:width*ar;    //taking into account the origibak aspect ratio of the image
            var calculatedWidth=width;
            console.log(calculatedHeight,calculatedWidth)
            
        }else{
            
            var calculatedWidth=(ar>1?height*ar:height/ar);    //taking into account the origibak aspect ratio of the image
            var calculatedHeight=height;
            console.log(calculatedHeight,calculatedWidth)
           
        }
        adjustMaps(element,calculatedWidth,calculatedHeight,width,height,hWidth,hHeight);   //adjust the reactangular areas of interest
        
      } else {
        element.setAttribute("h-height", element.offsetHeight);
        element.setAttribute("h-width", element.offsetWidth);
      }
    });
  
    }
  
   function adjustMaps(parent,calculatedWidth,calculatedHeight,width,height,hWidth,hHeight){
     parent.children[0].style.width=calculatedWidth;
     parent.children[0].style.height=calculatedHeight;
     
        [...parent.children[1].children].forEach((element)=>{
            let dimensions=numerify(element.getAttribute('coords'));  //get co-ordinates in a proper format
            // if(calculatedWidth===width){
            //     var setWidth=(hWidth>=calculatedWidth?calculatedWidth/hWidth:hWidth/calculatedWidth);
            //     dimensions[0]*=setWidth;
            //     dimensions[2]*=setWidth;
            // }
            // else{
            //     var setWidth=(hWidth>=calculatedWidth?calculatedWidth/hWidth:hWidth/calculatedWidth);
            //     console.log(setWidth)
            //     dimensions[0]*=setWidth ;
            //     dimensions[0]+=(width-calculatedWidth)/2;
            //     dimensions[2]*=setWidth ;
            //     dimensions[2]+=(width-calculatedWidth)/2;
                
            // }

            var setWidth=hWidth<=calculatedWidth?(calculatedWidth/hWidth):(calculatedWidth/hWidth);
                dimensions[0]*=setWidth;
                dimensions[2]*=setWidth;

            // if(calculatedHeight===height){
               
            //     var setHeight=(hHeight>=calculatedHeight?calculatedHeight/hHeight:hHeight/calculatedHeight);
            //     dimensions[1]*=setHeight;
            //     dimensions[3]*=setHeight;
            // }
            // else{
            //     //console.log(hHeight,calculatedHeight)
            //     var setHeight=(hHeight>=calculatedHeight?calculatedHeight/hHeight:hHeight/calculatedHeight);
            //     //console.log(setHeight)
            //     dimensions[1]*=setHeight ;
            //     dimensions[1]+=(height-calculatedHeight)/2;
            //    // console.log((height-calculatedHeight)/2)
            //     dimensions[3]*=setHeight ;
            //     dimensions[3]+=(height-calculatedHeight)/2;
                
            // }
            var setHeight=(hHeight<=calculatedHeight?calculatedHeight/hHeight:calculatedHeight/hHeight);
                dimensions[1]*=setHeight;
                dimensions[3]*=setHeight;
          
                console.log(setHeight,setWidth)
          
            element.setAttribute('coords',stringify(dimensions));
        })
    }

    function numerify(string){
        var dimensions=[];
        var temp=string.split(',');
        temp.forEach(element => {
            dimensions.push(Number(element.trim()));
        });
        return dimensions;
    }
    
    function stringify(array){
        var string="";
        array.forEach((element)=>{
            element=Math.round(element)
            string+=element;
            string+=","
        })
        string = string.substring(0, string.length - 1);
        //console.log(string)
        return string;
    }

    function Run(){

        window.addEventListener('resize',()=>{
            Main();
        })
    }
    Run()