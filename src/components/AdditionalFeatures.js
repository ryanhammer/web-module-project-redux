import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';
import { addFeature } from '../actions/index';

const AdditionalFeatures = ({addFeature, additionalFeatures}) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
