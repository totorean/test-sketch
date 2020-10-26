import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransparentButton } from '../style/globalTheme';
import close from '../assets/close.svg';

const Close = styled(TransparentButton)`
    height: 3rem;
    width: 3rem;
`;

function CloseButton({ closeHandler }) {
    return (
        <Close type="button" ariaLabel="Close" onClick={closeHandler}>
            <img src={close} alt="" />
        </Close>
    );
}

CloseButton.propTypes = {
    closeHandler: PropTypes.func.isRequired,
};

export default CloseButton;
