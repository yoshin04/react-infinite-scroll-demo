import React, { useState } from 'react';
import './App.css';
import { getUsers } from './adaptors/apis/users/GetUsers';
import InfiniteScroll from 'react-infinite-scroller';

type User = {
  name: string;
  age: number
}

function App() {
  //データ
  const [list, setList] = useState<User[]>([]);
  //再読み込み判定
  const [hasMore, setHasMore] = useState(true); 

  const loadMore = async(pageIndex: number) => { //引数にページ番号が渡ってくる
    //API通信
    const users: User[] = await getUsers(pageIndex)
    setList([...list, ...users])

    if (users?.length < 1) {
      setHasMore(false);
      return;
    }
    setList([...list, ...users])
  }
  const loader =<div>Loading ...</div>;
  return (
    <div>
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={hasMore}
        loader={loader} 
      >
        <ul>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default App;
