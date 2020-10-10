import styled from 'styled-components';

export const Wrapper = styled.div`
    .wrapper-beranda {
        min-height: 594px;

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
            background-color: #46D0FE;
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
                background-color: #FE8D3B; 
                border: 0;
                padding: 10px 50px 10px 50px;
            }
        }
    }
    
`;  
