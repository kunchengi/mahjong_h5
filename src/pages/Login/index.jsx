import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import './index.scss'
export default function Login() {
    const navegate = useNavigate();
    const onLogin = () => {
        navegate('/home')
    }

    return (
        <div className="login-container">
            <Button className='login-btn' size='small' color='success' onClick={onLogin}>开始游戏</Button>
        </div>
    )
}