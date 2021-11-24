import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchProduct} from '../API/Index';
import {Authprovider} from './AuthProvider';
import Routes from './Routes';

const App = () => {
  const dispatch = useDispatch();
  useEffect(async() => {
    
    await fetchProduct()
      .then(res => {
        
        const {product} = res.data;        
        dispatch({
          type: 'FETCH_PRODUCT',
          payload: product,
        },{
          type:"Loader",
          payload:false

        });
        
      })
      .catch(err => console.log(err.response));
  }, []);

  return (
    <Authprovider>
      <Routes />
    </Authprovider>
  );
};

export default App;
