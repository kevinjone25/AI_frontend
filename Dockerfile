FROM node:lts-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .
RUN pnpm build

ENV NUXT_PUBLIC_BACKEND_URL=http://202.5.254.247:12345/api/v1/

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]