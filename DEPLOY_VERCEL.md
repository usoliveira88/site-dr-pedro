# Deploy na Vercel

## Resumo

Forma mais simples para publicar este projeto: usar a Vercel CLI direto da pasta do projeto.

## 1. Preciso criar uma conta na Vercel?

Sim. Crie uma conta em:

https://vercel.com/signup

Pode usar login com e-mail, Google ou GitHub.

## 2. Preciso conectar GitHub?

Não é obrigatório.

Para apresentação ao cliente, o caminho mais simples é publicar pelo terminal com a Vercel CLI. GitHub só é necessário se você quiser deploy automático a cada alteração no repositório.

## 3. Quais arquivos devo enviar?

Envie a pasta inteira do projeto:

```bash
dr-pedro-site
```

Inclua:

- `app`
- `components`
- `data`
- `public`
- `package.json`
- `next.config.mjs`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `tsconfig.json`
- `next-env.d.ts`
- `.gitignore`
- `.vercelignore`

Não envie:

- `node_modules`
- `.next`
- `.env`
- arquivos de log

## 4. Qual comando ou passo devo executar?

No terminal, entre na pasta do projeto:

```bash
cd C:\Users\usoli\Documents\Codex\2026-06-09\files-mentioned-by-the-user-proposta\outputs\dr-pedro-site
```

Depois execute:

```bash
npx vercel
```

Na primeira vez, a Vercel vai pedir login. Depois responda às perguntas assim:

```text
Set up and deploy? Yes
Which scope? escolha sua conta
Link to existing project? No
Project name? dr-pedro-site
In which directory is your code located? ./
Want to modify settings? No
```

Para criar o link final de produção, execute depois:

```bash
npx vercel --prod
```

## 5. Como obter o link público final?

Ao final do comando, a Vercel mostra um link no terminal.

O link de preview costuma aparecer como:

```text
https://dr-pedro-site-xxxxx.vercel.app
```

O link final de produção aparece depois do comando:

```bash
npx vercel --prod
```

Você também pode ver o link no painel da Vercel em:

https://vercel.com/dashboard

## 6. Variáveis de ambiente para a página Anamnese

A página `/anamnese` envia as respostas por e-mail usando a API do Resend. Configure estas variáveis no painel da Vercel antes de usar o formulário em produção:

```text
RESEND_API_KEY=seu_token_resend
EMAIL_FROM=Nome do remetente <email@seudominio.com.br>
EMAIL_TO=contato@doutorpedromachado.com.br
```

Importante:

- `EMAIL_FROM` precisa ser um remetente autorizado/verificado no Resend.
- `EMAIL_TO` deve receber `contato@doutorpedromachado.com.br`.
- Não coloque senhas, tokens ou credenciais diretamente no código.
