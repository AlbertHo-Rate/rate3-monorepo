import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  name: {
    fontSize: '0.8em',
    whiteSpace: 'pre-line',
  },
  amount: {
    letterSpacing: 0,
    fontWeight: 'bold',
    fontSize: '1.25em',
    marginTop: '5px',
  },
  currency: {
    fontWeight: 'bold',
    fontSize: '0.8em',
  },
};

const AccountBalance = ({
  classes,
  currencySymbol,
  currency,
  name,
  amount,
}) => (
  <React.Fragment>
    <div className={classes.name}>{`${name}`}</div>
    <div className={classes.amount}>{currencySymbol}{amount}</div>
    <div className={classes.currency}>{currency}</div>
  </React.Fragment>
);

AccountBalance.propTypes = {
  classes: PropTypes.object.isRequired,
  currencySymbol: PropTypes.string,
  currency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

AccountBalance.defaultProps = {
  currencySymbol: '',
};

export default withStyles(styles)(AccountBalance);
