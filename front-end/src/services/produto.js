import api from './api';


function getProduto() {
return(
    api.get('/getProduto')
        .then(function(res){
            return res.data
        })
        .catch(function(error){
            if(error)  console.log(error)
        })
    )
};

export { getProduto };