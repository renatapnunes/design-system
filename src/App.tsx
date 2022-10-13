import { Envelope, Key } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-900">
      <div className="rounded w-[550px] h-[732px] mx-auto mt-10 p-[4px] bg-gradient-to-r from-green-400 via-teal-300 to-sky-400">
        <div className="flex flex-col items-center justify-center text-slate-300 h-full bg-slate-900 rounded p-4">
          <header className="flex flex-col items-center">
            <Logo />
            <Heading size="lg" className="text-slate-50 mt-4">
              Ignite Lab
            </Heading>
            <Text size="lg" className="text-slate-500 mt-2">
              Faça login e comece a usar!
            </Text>
          </header>
          <form className="flex flex-col gap-4 items-stretch mt-10">
            <label htmlFor="email" className="flex flex-col gap-3">
              <Text className="font-semibold">Email</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                  id="email"
                  type="email"
                  placeholder="alfredo@exemplo.com"
                />
              </TextInput.Root>
            </label>
            <label htmlFor="password" className="flex flex-col gap-3">
              <Text className="font-semibold">Senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Key />
                </TextInput.Icon>
                <TextInput.Input
                  id="password"
                  type="password"
                  placeholder="********"
                />
              </TextInput.Root>
            </label>

            <label htmlFor="remember" className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Text size="sm" className="text-slate-300">
                Lembrar de mim por 30 dias
              </Text>
            </label>

            <Button type="submit" className="mt-4">
              Entrar
            </Button>
          </form>
          <footer className="flex flex-col items-center gap-4 mt-8">
            <Text asChild size="sm">
              <a
                href=""
                className="text-slate-500 underline hover:text-slate-300"
              >
                Esqueceu sua senha?
              </a>
            </Text>
            <Text asChild size="sm">
              <a
                href=""
                className="text-slate-500 underline hover:text-slate-300"
              >
                Não possui uma conta? Crie uma agora!
              </a>
            </Text>
          </footer>
        </div>
      </div>
    </div>
  );
}
