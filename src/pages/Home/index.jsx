import MahjongList from '@/components/MahjongList'
import './index.scss'
export default function Layout() {
    return (
        <div className="home">
            <MahjongList type="down" />
            <MahjongList type="up" />
            <MahjongList type="left" />
            <MahjongList type="right" />
        </div>
    )
}