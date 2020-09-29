import styled from 'styled-components';

export const Wrapper = styled.div`
    .wrapper-beranda {
        min-height: 615px;

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
            background-color: #41E8B3;
            border-radius: 25px;
            border: none;
            min-height: 500px;
            margin-top: 3rem;
            
            .menus-title{
                font-size: 1.2rem;
            }

            .menus-body{
                min-height: 80px;
            }

            .menus-button{
                color: #41E8B3;
                padding: 10px 50px 10px 50px;
            }
        }
    }
    
`;  
