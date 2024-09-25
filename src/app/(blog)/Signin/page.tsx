"use client";

import { ButtonText } from "@/components/ButtonText";
import Link from "next/link";
import { Content, Form } from "./styles";
import { FiLock, FiUser } from "react-icons/fi";
import { Input } from "@/components/Input";

export default function Signin() {
  return (
    <>
      <Content>
        <h2>NAPED</h2>

        <h3>Entrar na conta</h3>

        <Form>
          <Input placeholder="Digite seu usuário" type="text" icon={FiUser} />

          <Input placeholder="Digite sua senha" type="password" icon={FiLock} />

          <ButtonText title="Logar na conta" />
        </Form>

        <Link href="/Signup">Criar uma conta</Link>
      </Content>
    </>
  );
}
