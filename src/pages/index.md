---
title: Rust 中国开源社区基础设施服务
pageTitle: Rust 中国开源社区基础设施服务
description: Rust 中国开源社区基础设施服务目标为中国的开发者提供 crates.io 镜像服务，crate 缓存服务和 Rust 安装服务等。
domain: https://infra.rust-lang.pub
---

Rust 中国开源社区基础设施服务目标为中国的开发者提供 crates.io 镜像服务，crate 缓存服务和 Rust 安装服务等。 {% .lead %}


---

## Quick start

[Rust 基础设施](https://infra.rust-lang.pub)是由 [Rust 中国开源社区](https://rust-lang.pub) 维护的，目前提供了以下服务：

  * crates.io 镜像
  * crates 缓存
  * Rust 安装

### Why?

由于网络原因，访问 crates.io 的索引和下载可能会非常慢，甚至无法访问。为了解决这个问题，我们提供了一个 crates.io 代理服务，可以让你访问 crates.io 时更快。

### Freighter - A Crates Registry and Official Mirror

[Rust 中国开源社区](https://rust-lang.pub) 维护的 [Rust 基础设施](https://infra.rust-lang.pub)是使用 [Freighter](https://github.com/rust-lang-cn/freighter) 部署，目前提供 Rust crate 索引代理，以及为中国大陆地区开发者使用的 crates 缓存服务。

### How to use?

#### rust-lang.pub 代理的使用方式

编辑 ``~/.cargo/config`` 文件，添加如下内容：

```toml
[source.crates-io]
replace-with = 'rustpub'

[source.rustpub]
registry = "{% $markdoc.frontmatter.domain %}/crates.io-index" 

[registries.rustpub]
index = "{% $markdoc.frontmatter.domain %}/crates.io-index"
```

### How to contribute?

向 [Freighter](https://github.com/open-rust-initiative/freighter) 项目提交 PR 必须签署 [DCO](https://developercertificate.org).

贡献者通过在提交信息中添加 __Signed-off-by__ 行来证明他们遵守这些要求：

```bash
This is my commit message

Signed-off-by: Random J Developer <random@developer.example.org>
```


如果使用 __Git__ 提交代码，可以使用 ``-s`` 参数自动添加 ``Signed-off-by`` 行：

```bash
$ git commit -s -m 'This is my commit message'
```

### License

[Freighter](https://github.com/open-rust-initiative/freighter) 是使用 Rust 编程语言开发的开源项目，基于 MIT 开源协议和 Apache 2.0 开源协议发布。

* MIT LICENSE ( [LICENSE-MIT](https://github.com/open-rust-initiative/freighter/blob/main/LICENSE-MIT) or https://opensource.org/licenses/MIT) 
* Apache License, Version 2.0 ([LICENSE-APACHE](https://github.com/open-rust-initiative/freighter/blob/main/LICENSE-APACHE) or https://www.apache.org/licenses/LICENSE-2.0)

### Contact

如在使用中遇到问题，请发邮件到 [infra@rust-lang.pub](mailto:infra@rust-lang.pub) 联系咨询。 

如果您在部署中遇到 [Freighter](https://github.com/open-rust-initiative/freighter) 的问题，欢迎提交 [issue](https://github.com/open-rust-initiative/freighter/issues) ，我们会尽快解决。