import React from 'react';
import Info from './info';
import UserList from './users';

const Login = () => {
    
  return (
      <div className='login'>
          <div className='container py-5 h-100'>
              <Row>
                <Col>
                  <UserList />
                </Col>
              </Row>
          </div>
        </div>
  );
};

export default Login;
