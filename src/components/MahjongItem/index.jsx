import React from 'react'
import { Image } from 'antd-mobile'
import './index.scss'

export default function MahjongItem({ mahjong, type }) {
    const isVertical = type === 'down' || type === 'up';

    const bgName = type === 'down' ? mahjong.name : 'pai';
    const myImage = require(`@/assets/mahjongImages/${bgName}.gif`);
    return (
        <div className={isVertical ? 'mahjong-item-v' : 'mahjong-item-h'}>
            <Image className='mahjong-img' src={myImage} />
        </div>
    )
}
