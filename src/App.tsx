import { defineComponent } from 'vue';
import Add from './components/Add';
import CommentApp from './components/CommentApp';
// import Image from './components/Image';
import LifeCycle from './components/LifeCycle';
import Title from './components/Title';
import './index.css';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
      <Title name="Vue3 + TSX 类拟react hook的写法~"></Title>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <CommentApp/>
        <Add></Add>
        <LifeCycle></LifeCycle>
        </div>
      
      </>
    );
  },
});
