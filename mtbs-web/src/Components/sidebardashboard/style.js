import styled from "styled-components";

export const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    .right {
      &.active {
        margin-left: 0px !important;
      }
    }
  }

  .right {
    margin-left: 0px;
    transition: all ease 0.3s;

    &.active {
      margin-left: 300px;
    }
  }

  .left {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: all ease 0.3s;

    //When Active
    &.active {
      width: 300px;

      #sidebar {
        .content {
          opacity: 1;

          .navbar-brand {
            h3 {
              font-size: 1.5rem;
              font-weight: bold;
            }
          }
        }
      }
    }

    //Condition normal and Not-Active
    #sidebar {
      width: 100%;
      position: relative;
      background: #2f4050;
      color: var(--light);
      margin-right: 0.7em;

      .content {
        opacity: 0;
        transition: all ease 0.3s;

        .navbar-brand {
          .sidebar-brand {
            width: 100px;
            height: auto;
          }

          h3 {
            font-size: 0.4rem;
            transition: all ease 0.3s;
          }
        }

        .sidebar-menu {
          font-size: 16px;
        }

        .sidebar-menu:hover {
          background-color: #2a3948;
        }

        .sidebar-menu.active {
          background-color: #2a3948;
          border-left: 5px solid #46d0fe;
        }
      }
    }
  }
`;
