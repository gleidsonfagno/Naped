import { FiUser, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Form, Content } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";

import { Link } from "react-router-dom";

export function Signin() {
    return (
        <>
            <Header />
            <Content>

                <h2>
                    NAPED
                </h2>

                <h3>Entrar na conta</h3>

                <Form>
                    <Input
                        placeholder="Digite seu usuário"
                        type="text"
                        icon={FiUser}
                    />

                    <Input
                        placeholder="Digite sua senha"
                        type="password"
                        icon={FiLock}
                    />

                    <ButtonText title="Logar na conta" to="/register" />
                </Form>

                <Link to="/register">Criar uma conta</Link>
            </Content>
        </>
    );
}