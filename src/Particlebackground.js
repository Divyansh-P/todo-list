import React from 'react';
import Particles from 'react-particles-js';
import Particleconfig from './config/Particle-config';
const Particlebackground=()=>{
    return(
        <Particles params={Particleconfig}></Particles>
    )
}
export default Particlebackground;