ARG VARIANT="20"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

ARG HUGO_VERSION="0.127.0"
ARG HUGO_ARCH="64bit"

RUN hugo_url="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}" \
 && hugo_archive="hugo_${HUGO_VERSION}_Linux-${HUGO_ARCH}.tar.gz" \
 && hugo_checksums="hugo_${HUGO_VERSION}_checksums.txt" \
 && curl -fsSL --create-dirs -o "tmp/hugo/${hugo_archive}" \
      "${hugo_url}/${hugo_archive}" \
 && curl -fsSL --create-dirs -o "tmp/hugo/${hugo_checksums}" \
      "${hugo_url}/${hugo_checksums}" \
 && cd tmp/hugo \
 && sha256sum --strict --ignore-missing --check "${hugo_checksums}" \
 && tar -xzf "${hugo_archive}" \
 && mv hugo /usr/local/bin \
 && mkdir -p /files/etc/bash_completion.d \
 && /usr/local/bin/hugo completion bash> /files/etc/bash_completion.d/01-hugo.sh \
 && rm -rf tmp/hugo

USER node
WORKDIR /home/node

RUN mkdir -p .config/git \
 && echo ".vscode/*" >> .config/git/ignore \
 && echo "*.code-workspace" >> .config/git/ignore \
 && echo ".history/" >> .config/git/ignore
