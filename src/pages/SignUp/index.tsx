import { FiUser, FiAtSign, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Form, Content } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";


export function SignUp() {
    return (
        <>
            <Header />
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

                <Link to="/login">Já tenho uma conta</Link>
            </Content>
        </>
    );
}