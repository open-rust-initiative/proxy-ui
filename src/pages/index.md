---
title: Getting started
pageTitle: Freighter - A simple crates registry
description: Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.
domain: https://crate-files.rust-lang.pub
---

Learn how to get Freighter set up in your project in under thirty minutes or it's free. {% .lead %}


---

## Quick start


### Freighter - A simple crates registry

Freighter is a simple crates registry that can be used to host your own private crates. It's not a fork of [crates.io](https://crates.io), and it's not a replacement for it also.

### Why?

Usually, you don't need to host your own crate registry. When we are developing program using Rust in the company, we need to host private crates registry for the following reasons:

1. We need to use some crates that are not published to crates.io, such as some internal crates.
2. We need to use some crates that are published to crates.io, but we need to modify them to fit our needs.
3. We need to use crates in our build system or CI/CD workflow.

### What's the major features?

1. Support sync crates index from crates.io.
2. Support cache crates file from crates.io.
3. Support publish crates to the registry.

### How to use?

#### crates.io 镜像

```shell
~/.cargo/config:

[source.crates-io]
# To use sparse index, change 'rsproxy' to 'rsproxy-sparse'
replace-with = 'rsproxy'

[source.rsproxy]
registry = "{% $markdoc.frontmatter.domain %}/crates.io-index" 
[source.rsproxy-sparse]
registry = "sparse+{% $markdoc.frontmatter.domain %}/index/"

[registries.rsproxy]
index = "{% $markdoc.frontmatter.domain %}/crates.io-index"

[net]
git-fetch-with-cli = true
```
#### Rustup 镜像


```bash
~/.zshrc or ~/.bashrc:

export RUSTUP_DIST_SERVER="{% $markdoc.frontmatter.domain %}"
export RUSTUP_UPDATE_ROOT="{% $markdoc.frontmatter.domain %}/rustup"
```

### How to contribute?

This project enforce the [DCO](https://developercertificate.org).

Contributors sign-off that they adhere to these requirements by adding a Signed-off-by line to commit messages.

```bash
This is my commit message

Signed-off-by: Random J Developer <random@developer.example.org>
```

Git even has a -s command line option to append this automatically to your commit message:

```bash
$ git commit -s -m 'This is my commit message'
```

### License

Freighter is licensed under this Licensed:

* MIT LICENSE ( [LICENSE-MIT](LICENSE-MIT) or https://opensource.org/licenses/MIT) 
* Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or https://www.apache.org/licenses/LICENSE-2.0)

### Acknowledgements

更新频率：每分钟一次
test auto build