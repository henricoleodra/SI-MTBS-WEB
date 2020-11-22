import styled from "styled-components";

export const Wrapper = styled.div`
  .wrapper-form-pencarian-anak {
    width: 35%;

    .wrapper-form-input {
      border-right: 5px solid;
      height: 100%;
      padding-right: 20px;
      border-color: #46d0fe;

      .input-data-anak {
        border-color: #46d0fe;
      }

      .input-add-on-anak {
        background-color: #46d0fe;
        border-color: #46d0fe;
      }
    }

    .button-cari-data-anak {
      width: 100%;
      background-color: #46d0fe;
      border: 0;
    }

    .button-sebelumnya {
      width: 100%;
      background-color: #fe8d3b;
      border: 0;
    }

    .button-cari-data-anak:hover {
      background-color: #3bb1d9;
    }

    .button-sebelumnya:hover {
      background-color: #e87e33;
    }
    
    .loading-pencarian-anak {
      width: 5rem;
      height: 5rem;
    } 
  }
`;
