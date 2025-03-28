---
pubDatetime: 2025-03-21
title: "Create your own GitHub alternative with Gitea, Opengist, and Forgejo"
description: Then you can deploy your apps and websites with Coolify on a cheap VPS. Easy peasy lemon squeezy.
featured: true
tags:
  - selfhosting
  - coolify
  - github
  - forgejo
  - gitea
  - opengist
  - pikapods
---

I mentioned on Mastodon that I was trying to move most of my projects off of Big Tech™️ and one of the ways I am doing that is [hosting similar platforms on my own servers](/posts/selfhosting-coolify).

Recently I decided to use decentralized and open source platforms for my website deployment and hosting, where I can create a webhook from my GitHub-like platform of choice and instantly deploy that site to Coolify.

## Another option

I also use [PikaPods](https://pikapods.com) to deploy more resource intensive apps like Nextcloud as PikaPods doesn't bill you; you just top up your account. This way you're not saddled with an unexpected server bill.

## First pick a platform

I am using both [Gitea](https://github.com/go-gitea/gitea) and [Forgejo](https://forgejo.org/), both for very different things. But the idea is to decentralize _git_ as a hosted service that doesn't need to funnel through Big Tech™️ infrastructure.

Both of these options are extremely lightweight and don't require a ton of resources. Neither will bog down your server.

Both are using the Gitea _framework_, or _platform_ if you want to call it that. You can do pretty much the same _GitHub-like_ things on both.

### Simple way of installing

Either using `docker-compose.yaml` or a service like PikaPods.

An example of a docker compose file:

```yaml
networks:
  forgejo:
    external: false

services:
  server:
    image: codeberg.org/forgejo/forgejo:10
    container_name: forgejo
    environment:
      - USER_UID=1000
      - USER_GID=1000
+      - FORGEJO__database__DB_TYPE=postgres
+      - FORGEJO__database__HOST=db:5432
+      - FORGEJO__database__NAME=forgejo
+      - FORGEJO__database__USER=forgejo
+      - FORGEJO__database__PASSWD=forgejo
    restart: always
    networks:
      - forgejo
    volumes:
      - ./forgejo:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
+    depends_on:
+      - db
+
+  db:
+    image: postgres:14
+    restart: always
+    environment:
+      - POSTGRES_USER=forgejo
+      - POSTGRES_PASSWORD=forgejo
+      - POSTGRES_DB=forgejo
+    networks:
+      - forgejo
+    volumes:
+      - ./postgres:/var/lib/postgresql/data
```

_Example of a docker-compose file from the Forgejo website_

Usually you wouldn't need a full-on database for this; the initial setup just needs sqlite, most self-hosted projects using Forgejo don't need a database like Postgres because most of the time, the scale is smaller[^1].

This process is similar for Gitea as well.

## Opengist for hosting your own code snippets

I discovered [Opengist](https://opengist.io/) sometime last year. The end of last year was an absolute _nightmare_ so I didn't install it, I didn't have the energy. It wasn't until recent events in the US that I thought it might be a good idea to bring all my projects over to Gitea, Forgejo, and host my gists on Opengist.

Their docker compose example is simple:

```yaml
services:
  opengist:
    image: ghcr.io/thomiceli/opengist:1
    container_name: opengist
    restart: unless-stopped
    ports:
      - "6157:6157" # HTTP port
      - "2222:2222" # SSH port, can be removed if you don't use SSH
    volumes:
      - "$HOME/.opengist:/opengist"
    environment:
      # OG_LOG_LEVEL: info
      # other configuration options
```

You can configure auth and permissions when you first login or you can add environment variables in a `secrets.env` file on your server. Then run `docker compose up -d` and off you go.

You can also just run: `docker run --name opengist -p 6157:6157 -v "$HOME/.opengist:/opengist" ghcr.io/thomiceli/opengist:1`

### Opengist embed example

<script src="https://gists.tifflabs-software.org/tiffmin/4e80165e59b24b959d8f56a362d99935.js"></script>

## Your choice

I know there is a lot of chatter about self-hosting and decentralized networks in general lately and it is definitely a time commitment to roll your own tech stack but I find it works for me. You can do it cheaply or in your own home using your own hardware and internet service[^2]. Either way, there are choices. Self-host is the best one, and I want to convince you of this. But it _is_ your choice to make.

[^1]: Unless you're uploading large files then maybe something like Postgres is needed.

[^2]: Be careful; some ISPs don't like giving out static IP addresses on home networks so check with them before doing it. Or, just try it and see what happens.
