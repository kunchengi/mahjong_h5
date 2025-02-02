import React from 'react'
import classNames from 'classnames';
import './index.scss'
import MahjongItem from '../MahjongItem'

export default function DownMahjongList({type}) {
  const containerClass = classNames('mahjong-container', {
    'down-mahjong': type === 'down',
    'up-mahjong': type === 'up',
    'left-mahjong': type === 'left',
    'right-mahjong': type === 'right',
  });

  const listClass = classNames('mahjong-list', {
    'mahjong-list-h': type === 'left' || type === 'right',
  });

  const mahjongList = [
    {id: 1, name: 's1'},
    {id: 2, name: 'w2'},
    {id: 3, name: 't3'},
    {id: 4, name: 'w4'},
    {id: 5, name: 'w5'},
    {id: 6, name: 'z6'},
    {id: 7, name: 'z7'},
    {id: 8, name: 'w8'},
    {id: 9, name: 'z1'},
    {id: 10, name: 'z2'},
    {id: 11, name: 'z3'},
    {id: 12, name: 'z4'},
    {id: 13, name: 'z5'},
  ]
  return (
    <div className={containerClass}>
      <div className={listClass}>
        {mahjongList.map((item) => (
          <MahjongItem key={item.id} mahjong={item} type={type} />
        ))}
      </div>
    </div>

  )
}
