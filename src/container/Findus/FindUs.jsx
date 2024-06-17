import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
        <SubHeading title='Contatct' />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
            <p className='p__opensans'></p>
        </div>
    </div>

    <div className="app__wrapper_img">
        <img src={ images.findus } alt="find us"/>
    </div>
  </div>
);

export default FindUs;
