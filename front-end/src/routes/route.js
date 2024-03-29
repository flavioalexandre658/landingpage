import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function RouteWrapper({
    redirectTo, isPrivate, component: Component, ...rest
}) {
    const authenticated = sessionStorage.getItem('@api-landing:JWT_TOKEN');
    console.log(!!authenticated)
    if (!authenticated && isPrivate) 
    {
        
        return <Redirect to={redirectTo} />
    }

    return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
    redirectTo: PropTypes.string,
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    redirectTo: '/',
    isPrivate: false,
};

export default RouteWrapper;