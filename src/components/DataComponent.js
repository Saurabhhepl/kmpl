// DataComponent.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions';
const DataComponent = ({ token, fetchData, data, loading, error }) => {
  useEffect(() => {
    fetchData(token);
  }, [fetchData, token]);

  return (
    <div>
      <h2>Data from API:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
           
            <p key={item.id}>
              
              <p>{item.id}
              
              <li>{item.body}</li>
               </p>
              
             
            
            
            </p>
            
            
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps, { fetchData })(DataComponent);
