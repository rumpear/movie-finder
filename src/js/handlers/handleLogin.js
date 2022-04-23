import { store } from '../store';

import { loginGoogle } from '../services/serviceAuth';
import { fetchLibrary } from '../services/serviceDatabase';

import { showLibSelector } from '../handlers/showLibSelector';
import { initLibrary } from '../pages/library';

export const handleLogin = () =>
  loginGoogle().then((res) => {
    if (res.status === 200) {
      const { uid, displayName } = res;
      localStorage.setItem('user', JSON.stringify({ uid, displayName }));
      store.user = { uid, displayName };

      fetchLibrary(uid, 'queue').then((res) => (store.queue = res));
      fetchLibrary(uid, 'watched').then((res) => (store.watched = res));

      showLibSelector();
      initLibrary();
    }
  });

store.refs.btnLogin.addEventListener('click', handleLogin);
