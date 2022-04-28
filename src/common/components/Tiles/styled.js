import styled, { css } from 'styled-components'

export const TileContainer = styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
    margin: 64px auto 0;

    ${({ list }) =>
        list &&
        css`
            width: 324px;
            height: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            grid-gap: 0px;
            margin: 0px;
        `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        /* display: flex;
        flex-direction: column; */
        padding: 16px;
    }
`

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    display: block;
    border-radius: 5px;

    /* ${({ list }) =>
        list &&
        css`
            width: 177px;
        `} */

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 114px;
    }
`

export const Content = styled.div`
    ${({ list }) =>
        list &&
        css`
            text-align: center;
            margin-right: 8px;
            padding: 0px;
        `}
`

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;

    ${({ list }) =>
        list &&
        css`
            font-weight: 500;
            font-size: 22px;
            margin: 8px 0 8px;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 16px;
    }
`

export const Year = styled.div`
    font-size: 22px;
    margin: 24px 0;

    ${({ list }) =>
        list &&
        css`
            font-weight: 400;
            font-size: 16px;
            margin: 8px 0 0 0;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        margin: 0;
    }
`

export const InfoWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 16px -8px;

    ${({ person }) =>
        person &&
        css`
            display: none;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        flex-direction: column;
    }
`

export const Info = styled.div`
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0 0 8px 8px;
    ${({ person }) =>
        person &&
        css`
            color: ${({ theme }) => theme.color.black};
        `}
`

export const InfoDetails = styled.li`
    font-size: 18px;
    line-height: 1.2;
    margin: 0 0 8px 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 12px;
    }
`

export const Genres = styled.li`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    margin: 16px 8px 8px 8px;
    border-radius: 5px;

    ${({ list }) =>
        list &&
        css`
            font-weight: 400;
            font-size: 14px;
            margin: 8px 8px 0 0;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 10px;
        line-height: 1.1;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 22.87px;
    color: ${({ theme }) => theme.color.candlelight};
    margin: 27.09px 0 - 8px 8px;

    ${({ big }) =>
        big &&
        css`
            width: 40px;
            height: 38.12px;
        `}
`

export const Rate = styled.li`
    width: 32px;
    height: 29px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    align-items: center;
    margin: 27.09px 8px;

    ${({ list }) =>
        list &&
        css`
            font-weight: 600;
            font-size: 16px;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`

export const Score = styled.li`
    font-size: 14px;
    line-height: 1.2;
    margin: 33px 12px 33px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`

export const Overview = styled.p`
    font-size: 20px;
    margin: 0 8px;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 14px;
    }
`
