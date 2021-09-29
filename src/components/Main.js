import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="user" />
          <button>Start a post</button>
        </div>

        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="photo-icon" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="event" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="event" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="event" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      min-height: 48px;
      background: transparent;
      border: none;
      &:first-child {
        img {
          filter: invert(73%) sepia(5%) saturate(7435%) hue-rotate(181deg)
            brightness(96%) contrast(102%);
        }
      }
      &:nth-child(2) {
        img {
          filter: invert(65%) sepia(35%) saturate(549%) hue-rotate(56deg)
            brightness(98%) contrast(91%);
        }
      }
      &:nth-child(3) {
        img {
          filter: invert(83%) sepia(55%) saturate(2472%) hue-rotate(333deg)
            brightness(100%) contrast(82%);
        }
      }
      &:nth-child(4) {
        img {
          filter: invert(62%) sepia(48%) saturate(1470%) hue-rotate(312deg)
            brightness(121%) contrast(108%);
        }
      }
    }
  }
`;

export default Main;
