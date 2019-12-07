//Hooks这样写,react版本16.8以上才可以
//改变状态用useState
//useState是不能存在与条件判断语句中的!
import React, { useState } from 'react';

function Example(){
    //数组解构
    //为什么每次点击都能做到加一,浏览器怎么知道上一次的数字的?
    //声明的顺序知道的,如果同时声明并使用多个需求(也可以是状态),会更明显,下面只是声明并使用一个计数的需求
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>My clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
    )
}
 
export default Example;