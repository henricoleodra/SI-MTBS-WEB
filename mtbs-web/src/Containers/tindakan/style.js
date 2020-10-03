import styled from 'styled-components';

export const Wrapper = styled.div`
    .wrapper-tindakan {
        overflow-x: hidden;

        .underline-tindakan {
            background-color: #46d0fe;
            height: 5px;
            width: 95%;
        }

        .button-sebelumnya-tindakan {
            background-color: #fe8d3b;
            border: 0;
        }

        .button-sebelumnya-tindakan:hover {
            background-color : #e87e33;
        }

        .button-selanjutnya-tindakan {
            background-color: #46d0fe;
            border: 0;
        }

        .button-selanjutnya-tindakan:hover {
            background-color: #3bb1d9;
        }
    }
`;  
