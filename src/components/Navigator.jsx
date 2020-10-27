import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransparentButton } from '../style/globalTheme';
import prev from '../assets/arrow-left.svg';
import next from '../assets/arrow-right.svg';
import breadcrumb from '../assets/breadcrumb.svg';

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const NavButton = styled(TransparentButton)`
    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const Number = styled.div`
    font-size: 1.3rem;
    color: ${(props) => props.theme.labelColor};
    margin: 0 2px 3px 2px;
`;

const Breadcrumb = styled.img`
    height: 10px;
    margin-bottom: 3px;
`;

function Navigator({ count, index, goToIndex }) {
    return (
        <NavWrapper>
            <NavButton
                type="button"
                ariaLabel="Go to previous"
                onClick={() => goToIndex(index - 1)}
                disabled={index === 0}
            >
                <img src={prev} alt="" />
            </NavButton>
            <Number>{index + 1}</Number>
            <Breadcrumb src={breadcrumb} alt="" />
            <Number>{count}</Number>
            <NavButton
                type="button"
                ariaLabel="Go to next"
                onClick={() => goToIndex(index + 1)}
                disabled={index === count - 1}
            >
                <img src={next} alt="" />
            </NavButton>
        </NavWrapper>
    );
}

Navigator.propTypes = {
    count: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    goToIndex: PropTypes.func.isRequired,
};

export default Navigator;
