import styled from "styled-components";

export const RoomsWrapper = styled.div`
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
`