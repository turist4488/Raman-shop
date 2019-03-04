import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SpecItem.css';

class SpecItem extends Component {
  getBooleanIcon = flag => {
    return flag ? '\u2713' : '\u2718';
  };
  render() {
    const { specName, value } = this.props;
    return (
      <div className="d-flex flex-column">
        {Array.isArray(value) ? (
          <div>
            <span className="mt-1 spec-name">{specName}</span>
            {value.map(i => (
              <span className="d-block spec-value">{i}</span>
            ))}
          </div>
        ) : (
          Object.entries(value).map(v => {
            return (
              <div>
                <span className="mt-1 spec-name">{v[0]}</span>
                {typeof v[1] === 'boolean' ? (
                  <span className="ml-2 font-weight-bold spec-value">
                    {this.getBooleanIcon(v[1])}
                  </span>
                ) : (
                  <span className="d-block spec-value">
                    {Array.isArray(v[1])
                      ? v[1].map(i => (
                          <span>
                            {i}
                            <br />
                          </span>
                        ))
                      : v[1]}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default SpecItem;
