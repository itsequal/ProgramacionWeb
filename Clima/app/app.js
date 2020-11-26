let geocodeReverse=require('./modules/geocode');
let statusClima=require('./modules/clima');

let coordenada={lat:19.265371,     lon:-103.709334};
geocodeReverse(coordenada,(error,dataResponse)=>{
    if(error){
        console.log('Ocurrio un error');
    }else{
        console.log(dataResponse.state);
        statusClima(dataResponse.state,(error,climaResponse)=>{
            if (error){
                console.log("Se presento un error");
                //grabo en la BD en la bitacora
            }else{
                console.log(climaResponse.current.temperature);
            }
        })
    }
})
