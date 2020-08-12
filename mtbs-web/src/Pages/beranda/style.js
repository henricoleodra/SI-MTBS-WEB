import styled from 'styled-components';

export const Wrapper = styled.div`
    .wrapper-thumbnail {
        border-radius: 25px;

        .thumbnail-img{
            border-radius: 25px;
        }

        .wrapper-thumbnail-caption{
            position: absolute;
            opacity: 0.8;
            width: 200px;
            top: 0;
            border-radius: 25px 0 0 0;

            .thumbnail-caption{
                font-size: 1.2rem;
            }
        }
    }

    .wrapper-menus{
        background-color: var(--blue);
        border-radius: 25px;

        .menus-title{
            font-size: 1.2rem;
        }
    }
`;  
