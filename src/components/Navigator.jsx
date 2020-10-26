import React, { useState } from 'react';
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
    &:disabled .img {
        opacity: 0.7;
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

function Navigator({ count, startIndex, goToItem }) {
    const [currentIndex] = useState(startIndex);
    return (
        <NavWrapper>
            <NavButton
                type="button"
                ariaLabel="Go to previous"
                onClick={() => goToItem(currentIndex - 1)}
                disabled={currentIndex === 1}
            >
                <img src={prev} alt="" />
            </NavButton>
            <Number>{currentIndex}</Number>
            <Breadcrumb src={breadcrumb} alt="" />
            <Number>{count}</Number>
            <NavButton
                type="button"
                ariaLabel="Go to next"
                onClick={() => goToItem(currentIndex + 1)}
                disabled={currentIndex === count}
            >
                <img src={next} alt="" />
            </NavButton>
        </NavWrapper>
    );
}

Navigator.propTypes = {
    count: PropTypes.number.isRequired,
    startIndex: PropTypes.number.isRequired,
    goToItem: PropTypes.func.isRequired,
};

export default Navigator;
