//useEffect();做副作用的事儿(起辅助作用的,比如声明周期函数)
//useEffect是异步的,不会影响视图更新,但频繁触发会很麻烦
import React, { useState,useEffect } from 'react';

function ExampleE() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`);
    })
    return (
        <div>
            <p>My clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
    )
}


export default ExampleE;