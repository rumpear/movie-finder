import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const handleNotification = (type, title = 'Error') => {
  const notyf = new Notyf({
    position: {
      x: 'center',
      y: 'top',
    },
  });

  type === 'error' ? notyf.error(title) : notyf.success(title);
};
