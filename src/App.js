import React from "react";
import styled from "styled-components";

// For handle State
import handleStatePlayList from "./handleState/handleStatePlayList";
import handlePlayer from "./handleState/handlePlayer";

// Components
import InputForm from "./components/InputForm";
import AlbumList from "./components/AlbumList";
import Player from "./components/Player";
import Background from "./components/Background";

const MainFrame = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  z-index: 2;
`;

const BodyFrame = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 80%;
  width: 70%;
`;

const DetailPlayFrame = styled.div`
  /*flex: 1;*/
  width: 700px;
  height: 100%;
`;
const ControllerPlayFrame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background: rgba(50, 50, 50, 0.5);
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12),
    0 3px 6px rgba(0, 0, 0, 0.1725);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1725);
`;
const ControllerTitle = styled.div`
  font-size: 1.2rem;
  color: white;
  padding-top: 30px;
  padding-left: 30px;
`;

function App() {
  const { statePlayList, addStatePlayList } = handleStatePlayList();
  const { nowPlaying, setNowPlaying } = handlePlayer(statePlayList[0]);
  return (
    <div className="App">
      <Background backgroundURL={nowPlaying.thumbnail} />
      <MainFrame>
        <BodyFrame>
          <DetailPlayFrame>
            <Player nowPlaying={nowPlaying} />
          </DetailPlayFrame>
          <ControllerPlayFrame>
            <ControllerTitle>
              <svg
                width="124"
                height="35"
                viewBox="0 0 124 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.78 7.94446V28.1345C12.78 28.4545 12.72 28.6745 12.6 28.7945C12.5 28.8945 12.29 28.9445 11.97 28.9445H10.38V8.75446C10.38 8.43446 10.43 8.22446 10.53 8.12446C10.65 8.00446 10.87 7.94446 11.19 7.94446H12.78ZM4.56 18.9245V28.1345C4.56 28.4545 4.5 28.6745 4.38 28.7945C4.28 28.8945 4.07 28.9445 3.75 28.9445H2.16V8.75446C2.16 8.43446 2.21 8.22446 2.31 8.12446C2.43 8.00446 2.65 7.94446 2.97 7.94446H4.56V17.1845H9.18V18.1145C9.18 18.4345 9.13 18.6545 9.03 18.7745C8.95 18.8745 8.75 18.9245 8.43 18.9245H4.56ZM16.8314 16.5545C16.8314 15.5145 17.0414 14.7845 17.4614 14.3645C17.9014 13.9245 18.6414 13.7045 19.6814 13.7045H23.8814C24.9214 13.7045 25.6514 13.9245 26.0714 14.3645C26.5114 14.7845 26.7314 15.5145 26.7314 16.5545V26.0945C26.7314 27.1345 26.5114 27.8745 26.0714 28.3145C25.6514 28.7345 24.9214 28.9445 23.8814 28.9445H19.6814C18.6414 28.9445 17.9014 28.7345 17.4614 28.3145C17.0414 27.8745 16.8314 27.1345 16.8314 26.0945V16.5545ZM20.6414 15.4445C20.0214 15.4445 19.6314 15.5745 19.4714 15.8345C19.3114 16.0945 19.2314 16.5345 19.2314 17.1545V25.4945C19.2314 26.1145 19.3114 26.5545 19.4714 26.8145C19.6314 27.0745 20.0214 27.2045 20.6414 27.2045H22.9214C23.5414 27.2045 23.9314 27.0745 24.0914 26.8145C24.2514 26.5545 24.3314 26.1145 24.3314 25.4945V17.1545C24.3314 16.5345 24.2514 16.0945 24.0914 15.8345C23.9314 15.5745 23.5414 15.4445 22.9214 15.4445H20.6414ZM30.513 16.5545C30.513 15.5145 30.723 14.7845 31.143 14.3645C31.583 13.9245 32.323 13.7045 33.363 13.7045H37.563C38.603 13.7045 39.333 13.9245 39.753 14.3645C40.193 14.7845 40.413 15.5145 40.413 16.5545V26.0945C40.413 27.1345 40.193 27.8745 39.753 28.3145C39.333 28.7345 38.603 28.9445 37.563 28.9445H33.363C32.323 28.9445 31.583 28.7345 31.143 28.3145C30.723 27.8745 30.513 27.1345 30.513 26.0945V16.5545ZM34.323 15.4445C33.703 15.4445 33.313 15.5745 33.153 15.8345C32.993 16.0945 32.913 16.5345 32.913 17.1545V25.4945C32.913 26.1145 32.993 26.5545 33.153 26.8145C33.313 27.0745 33.703 27.2045 34.323 27.2045H36.603C37.223 27.2045 37.613 27.0745 37.773 26.8145C37.933 26.5545 38.013 26.1145 38.013 25.4945V17.1545C38.013 16.5345 37.933 16.0945 37.773 15.8345C37.613 15.5745 37.223 15.4445 36.603 15.4445H34.323ZM46.6847 28.1345C46.6847 28.4545 46.6247 28.6745 46.5047 28.7945C46.4047 28.8945 46.1947 28.9445 45.8747 28.9445H44.2847V8.75446C44.2847 8.43446 44.3347 8.22446 44.4347 8.12446C44.5547 8.00446 44.7747 7.94446 45.0947 7.94446H46.6847V28.1345ZM47.5847 19.7345L50.8847 14.5145C51.0447 14.2345 51.1947 14.0345 51.3347 13.9145C51.4747 13.7745 51.7047 13.7045 52.0247 13.7045H53.9147L49.3547 20.4845L54.2147 28.9445H52.1447C51.8247 28.9445 51.5947 28.8845 51.4547 28.7645C51.3147 28.6245 51.1647 28.4145 51.0047 28.1345L47.5847 21.6545V19.7345ZM62.9138 18.3845C63.5338 18.3845 63.9238 18.2545 64.0838 17.9945C64.2438 17.7345 64.3238 17.2945 64.3238 16.6745V11.3945C64.3238 10.7745 64.2438 10.3345 64.0838 10.0745C63.9238 9.81446 63.5338 9.68446 62.9138 9.68446H59.4038V28.1345C59.4038 28.4545 59.3438 28.6745 59.2238 28.7945C59.1238 28.8945 58.9138 28.9445 58.5938 28.9445H57.0038V8.75446C57.0038 8.43446 57.0538 8.22446 57.1538 8.12446C57.2738 8.00446 57.4938 7.94446 57.8138 7.94446H63.8738C64.9138 7.94446 65.6438 8.16446 66.0638 8.60446C66.5038 9.02446 66.7238 9.75446 66.7238 10.7945V17.2745C66.7238 18.3145 66.5038 19.0545 66.0638 19.4945C65.6438 19.9145 64.9138 20.1245 63.8738 20.1245H61.3538C61.0338 20.1245 60.8238 20.0745 60.7238 19.9745C60.6438 19.8545 60.6038 19.6345 60.6038 19.3145V18.3845H62.9138ZM72.7331 7.94446V28.1345C72.7331 28.4545 72.6731 28.6745 72.5531 28.7945C72.4531 28.8945 72.2431 28.9445 71.9231 28.9445H70.3331V8.75446C70.3331 8.43446 70.3831 8.22446 70.4831 8.12446C70.6031 8.00446 70.8231 7.94446 71.1431 7.94446H72.7331ZM83.5542 17.1545C83.5542 16.5345 83.4742 16.0945 83.3142 15.8345C83.1542 15.5745 82.7642 15.4445 82.1442 15.4445H76.9542C77.0742 14.8645 77.2542 14.4345 77.4942 14.1545C77.7542 13.8545 78.1742 13.7045 78.7542 13.7045H83.1042C84.1442 13.7045 84.8742 13.9245 85.2942 14.3645C85.7342 14.7845 85.9542 15.5145 85.9542 16.5545V28.9445H84.3642C84.0442 28.9445 83.8242 28.8945 83.7042 28.7945C83.6042 28.6745 83.5542 28.4545 83.5542 28.1345V17.1545ZM79.2042 28.9445C78.1642 28.9445 77.4242 28.7345 76.9842 28.3145C76.5642 27.8745 76.3542 27.1345 76.3542 26.0945V22.7945C76.3542 21.7545 76.5642 21.0245 76.9842 20.6045C77.4242 20.1645 78.1642 19.9445 79.2042 19.9445H81.7542C82.3342 19.9445 82.7442 20.0945 82.9842 20.3945C83.2442 20.6745 83.4342 21.1045 83.5542 21.6845H80.1642C79.5442 21.6845 79.1542 21.8145 78.9942 22.0745C78.8342 22.3345 78.7542 22.7745 78.7542 23.3945V25.7345C78.7542 26.3545 78.8642 26.7545 79.0842 26.9345C79.3242 27.1145 79.7542 27.2045 80.3742 27.2045H82.3542V28.1345C82.3542 28.4545 82.3042 28.6745 82.2042 28.7945C82.1242 28.8945 81.9242 28.9445 81.6042 28.9445H79.2042ZM99.7706 13.7045L94.1006 34.1645C94.0006 34.4845 93.8806 34.6945 93.7406 34.7945C93.6206 34.9145 93.4006 34.9745 93.0806 34.9745H91.7606L93.3506 28.9445H92.5706L88.8806 14.5145C88.7606 13.9745 88.9606 13.7045 89.4806 13.7045H90.8306L93.3806 23.3945L93.9806 27.0245H94.1606L94.9106 23.4245L97.5206 14.5145C97.6006 14.1945 97.7106 13.9845 97.8506 13.8845C97.9906 13.7645 98.2206 13.7045 98.5406 13.7045H99.7706ZM110.625 27.2045V28.1345C110.625 28.4545 110.575 28.6745 110.475 28.7945C110.395 28.8945 110.195 28.9445 109.875 28.9445H105.345C104.305 28.9445 103.565 28.7345 103.125 28.3145C102.705 27.8745 102.495 27.1345 102.495 26.0945V16.5545C102.495 15.5145 102.705 14.7845 103.125 14.3645C103.565 13.9245 104.305 13.7045 105.345 13.7045H108.645C109.685 13.7045 110.415 13.9245 110.835 14.3645C111.275 14.7845 111.495 15.5145 111.495 16.5545V19.9145C111.495 20.9545 111.275 21.6945 110.835 22.1345C110.415 22.5545 109.685 22.7645 108.645 22.7645H106.845C106.525 22.7645 106.315 22.7145 106.215 22.6145C106.135 22.4945 106.095 22.2745 106.095 21.9545V21.0245H107.835C108.455 21.0245 108.845 20.8945 109.005 20.6345C109.165 20.3745 109.245 19.9345 109.245 19.3145V17.0045C109.245 16.3845 109.145 15.9745 108.945 15.7745C108.745 15.5545 108.335 15.4445 107.715 15.4445H106.425C105.765 15.4445 105.345 15.5645 105.165 15.8045C104.985 16.0245 104.895 16.4745 104.895 17.1545V25.4945C104.895 26.1145 104.975 26.5545 105.135 26.8145C105.295 27.0745 105.685 27.2045 106.305 27.2045H110.625ZM117.348 15.4445V28.1345C117.348 28.4545 117.288 28.6745 117.168 28.7945C117.068 28.8945 116.858 28.9445 116.538 28.9445H114.948V14.5145C114.948 14.1945 114.998 13.9845 115.098 13.8845C115.218 13.7645 115.438 13.7045 115.758 13.7045H117.348V15.4445C117.608 14.7645 117.878 14.3045 118.158 14.0645C118.438 13.8245 118.868 13.7045 119.448 13.7045H120.618C120.938 13.7045 121.138 13.7645 121.218 13.8845C121.318 13.9845 121.368 14.1945 121.368 14.5145V15.4445H117.348Z"
                  fill="white"
                />
                <ellipse
                  cx="2.76432"
                  cy="1.62037"
                  rx="1.97452"
                  ry="1.62037"
                  fill="white"
                />
              </svg>
            </ControllerTitle>

            <InputForm
              statePlayList={statePlayList}
              addStatePlayList={addStatePlayList}
            />
            <br />
            <AlbumList
              statePlayList={statePlayList}
              nowPlaying={nowPlaying}
              setNowPlaying={setNowPlaying}
            />
          </ControllerPlayFrame>
        </BodyFrame>
      </MainFrame>
    </div>
  );
}

export default App;
