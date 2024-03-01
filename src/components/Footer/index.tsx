import CodeImg from '/assets/Code.svg';
import { Content } from './style';

export function Footer() {
    return (
        <Content>
            <div>
                <p>Copyright © 2022 iuricode.com. Todos os direitos reservados.</p>

                <span>
                    Powered by
                    <img src={CodeImg} alt="" />
                </span>
            </div>
        </Content>
    )
}