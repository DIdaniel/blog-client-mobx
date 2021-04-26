// 모든 store를 불러들이는 곳

import { counter } from './stores/counter';

const useStore = () => {
  return { counter };
};

export default useStore;