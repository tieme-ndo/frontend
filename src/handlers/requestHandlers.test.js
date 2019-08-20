import React from 'react';

const requestHandlers = require('./requestHandlers')



it('renders without crashing', () => {
  const wrapper = requestHandlers.loginHandler({email: 'john', password: 'passw'})
  
});
