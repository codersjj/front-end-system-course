import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 16px;

  .title {
    margin-bottom: 8px;
    padding: 8px;
    font-size: 22px;
    color: #222;
  }

  .room-list {
    display: flex;
    flex-wrap: wrap;

    .room-item {
      width: 100%;
    }

    @media (min-width: 550px) {
      .room-item {
        width: 50%;
      }
    }

    @media (min-width: 950px) {
      .room-item {
        width: 33.333%;
      }
    }

    @media (min-width: 1128px) {
      .room-item {
        width: 25%;
      }
    }

    @media (min-width: 1640px) {
      .room-item {
        width: 20%;
      }
    }

    /* @media (min-width: 1880px) {
      .room-item {
        width: 16.666%;
      }
    } */
  }

  > .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255,255,255,.8);
  }
`