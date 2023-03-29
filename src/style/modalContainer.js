import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(0, 0 0, 0.6);

  .modal-title {
    background: var(--grey-2);

    width: 296px;
    border-radius: 8px 8px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-bottom: -2px;

    p {
      margin-top: 10px;
    }

    @media (min-width: 800px) {
      width: 370px;
    }
  }

  .modalBackground {
    background: var(--grey-3);

    padding: 20px 30px;
    width: 296px;
    border-radius: 0 0 8px 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 800px) {
      width: 370px;
    }

    form {
      width: 120%;
      background: transparent;

      .input-container {
        width: 100%;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
          margin-bottom: 5px;
          margin-left: -120px;
          p {
            font-size: 14px;
          }

          @media (min-width: 800px) {
            margin-left: -150px;
          }
        }
      }

      .status-container {
        width: 90%;
        border: none;
        display: flex;
        flex-direction: column;

        select {
          width: 100%;
          height: 40px;
        }

        label {
          margin-bottom: -15px;
          p {
            font-size: 14px;
          }
        }
      }

      .input-techEdit {
        font-family: 'Inter', sans-serif;

        border: 1px solid var(--grey-0);
        background: var(--grey-2);
        color: var(--grey-0);

        width: 90%;
        height: 40px;

        border-radius: 8px;
        padding: 16px;

        &::placeholder {
          color: var(--grey-1);
        }
      }

      .buttons-card {
        max-width: 120%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
      }

      .btn-register {
        margin-top: 1rem;
        width: 90%;
        padding: 10px 10px;
      }

      @media (min-width: 800px) {
        max-width: 105%;
        padding: 10px 20px;
      }
    }
  }
`;
