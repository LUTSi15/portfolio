# Use full Node.js image (non-Alpine to avoid native build issues)
FROM node:20

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only lock + package files first to install deps
COPY package.json pnpm-lock.yaml ./

# Force install devDependencies too (needed for Nuxt dev)
ENV NODE_ENV=development

# Install dependencies
RUN pnpm install

# Copy the rest of your app
COPY . .

# Expose Nuxt dev port
EXPOSE 3001

# Start Nuxt in dev mode
# CMD ["pnpm", "dev"]
CMD ["pnpm", "exec", "nuxt", "dev"]
