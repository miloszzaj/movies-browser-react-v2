import styled from "styled-components";
import { ReactComponent as NoResult } from "../../assets/icons/no-result.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-basis: auto;
    justify-content: center;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        //margin-top: 15px;
    }
`;

export const NoResultImage = styled(NoResult)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        height: 50%;
    }
`;