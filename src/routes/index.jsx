import React, { useRef } from 'react';
import {Navigate} from "react-router-dom";
import Home from '../pages/Home';

export default [
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'',
      element:<Navigate to ="/home"/>
    },
    // {
    //   path:'/privacy',
    //   element:<Privacy />
    // },
    // {
    //   path:'/environment',
    //   element:<Enviroment />
    // },
    
    
    // {
    //     path:'/about',
    //     element:<About/>
    //   },
 

]