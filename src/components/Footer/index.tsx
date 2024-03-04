import CodeImg from '/assets/Code.svg';
import { Content } from './style';

export function Footer() {
    return (
        <Content>
            <div>
                <p>Copyright © 2023 <a href="https://gleidsonfagno.github.io/DevLinks/" target="_blank" rel="noopener noreferrer">gleidsonfagno</a> Todos os direitos reservados.</p>

                <span>
                    Powered by
                    <img src={CodeImg} alt="" />
                </span>
            </div>
        </Content>
    )
}