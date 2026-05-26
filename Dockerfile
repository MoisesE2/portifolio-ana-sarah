# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar dependências do stage anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build da aplicação Angular (saída em dist/portifolio/browser)
RUN npm run build

# Stage 3: Runner (produção usando Nginx)
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Copiar arquivo de configuração do Nginx personalizado para SPAs
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos estáticos compilados do Angular
COPY --from=builder /app/dist/portifolio/browser ./

EXPOSE 80

ENV PORT=80

CMD ["nginx", "-g", "daemon off;"]
