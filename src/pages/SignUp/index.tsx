import { FiUser, FiAtSign, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Form, Content } from "./styles";
import { ButtonText } from "../../components/ButtonText";



export function SignUp() {
    return (
        <Content>

            <h2>
                NAPED
            </h2>

            <h3> Faça uma conta</h3>

            <Form>
                <Input
                    placeholder="Digite seu usuário"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="Digite seu e-mail"
                    type="text"
                    icon={FiAtSign}
                />
                <Input
                    placeholder="Digite uma senha"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Digite novamente a senha"
                    type="password"
                    icon={FiLock}
                />

                <ButtonText title="Criar conta" />
            </Form>

            <a href="">Já tenho uma conta</a>
        </Content>
    );
}