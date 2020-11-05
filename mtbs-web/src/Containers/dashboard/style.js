import styled from "styled-components";

export const Wrapper = styled.div`
  .dashboard-wrapper {
    min-height: 690px;
    margin: 10px 8px 8px 8px;
    background-color: var(--white);

    .dashboard-title {
      font-size: 16px;
    }

    .dashboard-diagram-title {
      font-size: 24px;
    }

    .dashboard-diagram {
      width: 45%;
      height: auto;
      border: solid 1px black;
    }

    .sky-blue {
      color: #bdf2ff;
    }

    .aqua-blue {
      color: #46d0fe;
    }

    .azure-blue {
      color: #007bff;
    }
  }
`;
