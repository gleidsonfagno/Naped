import { inter } from "@/app/layout"
import styled from "styled-components"


export const Container = styled.section`
    padding: 140px 16px  0;
    text-align: center;
    margin-bottom: 81px;
    max-width: 1168px;
    margin: auto;
    /* padding: 0 16px; */

    .category {
        color: ${props => props.theme.BUTTOM};
        text-transform: uppercase;
        line-height: 25.2px;
        font-size: 18px;

    }

    h2 {
        font-size: 40px;
        line-height: 56px;
        font-weight: 400;
        padding-top: 16px;
    }
    p{
        /* font-family: "Inter" sans-serif; */
        font-family: ${inter.style.fontFamily};
        color: ${props => props.theme.DARCK_20};
        font-size: 24px;
        font-weight: 400;
        line-height: 38.4px;
        text-align: center;
        padding-top: 18px;
    }

    .imageUrl {
        width: 100%;
        height: 400px;
        top: 528px;
        left: 352px;
        gap: 0px;
        border-radius: 4px ;
        opacity: 0px;
        object-fit: cover;
        margin: 56px 0;
    }

    article {

        h3 {
            /* margin-top: 18px !important;
            font-size: 3.5rem;
            margin-bottom: 32px;
            line-height: 120%;
            font-weight: 400; */
            font-family: 'Rubik', sans-serif;
            font-size: 32px;
            font-weight: 400;
            line-height: 37.92px;
            text-align: left;
            padding: 80px 0 47px;
        }
         /* p {
            
            font-size: 2rem;
            font-weight: 300;
            line-height: 160%;
        } */
    }

`
