import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    top: 64px;
    .Toastify__toast {
      border-radius: 4px;
    }
  }
`;