import styled from 'styled-components';
import { neutrals, spacings } from '../theme';

// TODO: This component needs some more styles
export const StyledRanking = styled.ol`
  max-width: 613px;
  border-radius: 4px;
  margin: 0 auto;
  padding: 0;
  background-color: ${neutrals.lightest};
  box-shadow: 0px 1px 8px ${neutrals.shadowBoxLight};

  > li {
    counter-increment: item;
    display: flex;
    align-items: center;
    padding: ${spacings.ml}px ${spacings.l}px ${spacings.ml}px ${spacings.sm}px;
    font-size: 13px;
    color: ${neutrals.darkest};
    font-weight: bold;

    ::before {
      content: counter(item);
      margin-right: ${spacings.m}px;
      width: ${spacings.m}px;
      text-align: right;
      font-weight: 600;
    }
    
    :nth-child(even){
      background-color: ${neutrals.backgroundLight};
    }

    :nth-child(1)::after,
    :nth-child(2)::after,
    :nth-child(3)::after {
      font-size: 16px;
      margin-left: ${spacings.s}px;
    }

    :nth-child(1)::after {
      content: '🥇';
    }

    :nth-child(2)::after {
      content: '🥈';
    }

    :nth-child(3)::after {
      content: '🥉';
    }
  }
`;

export const StyledPoints = styled.span`
  margin-left: auto;
`;

export const StyledImg = styled.div`
  margin-right: ${spacings.sm}px;
`;


export const StyledContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const StyledHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  background-color: rgba(245, 247, 250, 0.95);
  display: flex;
  padding: ${spacings.m}px;
  justify-content: space-between;
  font-size: 19px;
  line-height: 30px;
  margin-left: ${spacings.s}px;
  color: ${neutrals.darkest};

  > h1 {
    font-weight: 500;
    /* useless code ? but this refactoring is not in the rules, sry */
  }
`;

export const StyledContent = styled.main`
  padding: 16px;
  background-color: rgb(245, 247 ,250);
  padding-top: 106px;
`;
