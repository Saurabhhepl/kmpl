// HomeComponent.js
import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import DataComponent from './DataComponent'; // The component to display fetched data

const HomeComponent = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? (
        <DataComponent />
      ) : (
        <p>Please log in to view the data.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomeComponent);
