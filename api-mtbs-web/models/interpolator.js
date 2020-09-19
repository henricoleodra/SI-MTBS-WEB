const interpolator = (point) => {

    const interpolator = dataArray.map((point) =>{
        return(
            {point}
        );
    });

    interpolateCalculate(tinggiBadan){
        var x1 = 0;
        var x2 = 0;
        var y1 = 0;
        var y2 = 0;
        
        for(var i = 0; i<point.length; i++){
            if(tinggiBadan <= point[i].x){
                x1 = point[i-1].x;
                y1 = point[i-1].y;
                x2 = point[i].x;
                y2 = point[i].y;
                break;
            }

            return y1 + (y2 - x1) * (tinggiBadan - x1) / (x2 - x1); 
        }
    };

};