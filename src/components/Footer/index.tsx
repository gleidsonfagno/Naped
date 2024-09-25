'use client';

import { Content } from './style';
import Image from 'next/image';

export function Footer() {
    return (
        <Content>
            <div>
                <p>Copyright © 2023 <a href="https://gleidsonfagno.github.io/DevLinks/" target="_blank" rel="noopener noreferrer">gleidsonfagno</a> Todos os direitos reservados.</p>

                <span>
                    Powered by
                    <Image src={"/Code.svg"} width={24} height={24} alt="" />
                </span>
            </div>
        </Content>
    )
}