---
title: "Venus (fj-doc) 8.x — What's new"
description: "Overview of the major improvements in the Venus document generation framework version 8.x."
pubDate: 2026-05-15
author: "Fugerit Coding Org"
tags: ["fj-doc", "venus", "release", "java"]
---

**Venus (fj-doc)** version 8.x brings significant improvements to the document generation framework.

## Key improvements

### Improved modular architecture

Each output format module (PDF via Apache FOP, XLSX via Apache POI, HTML, etc.) can be imported independently. This means you only pull in the dependencies you actually need.

```xml
<!-- Only want PDF? Just import this: -->
<dependency>
  <groupId>org.fugerit.java</groupId>
  <artifactId>fj-doc-mod-fop</artifactId>
</dependency>
```

### GraalVM Native Image support

With [freemarker-native](https://github.com/fugerit-org/freemarker-native), Venus-based applications can now be compiled to native executables using GraalVM — enabling sub-millisecond startup times.

### Spring Boot 3 & Quarkus 3 compatibility

Full compatibility with the latest Spring Boot 3.x and Quarkus 3.x releases. Use Venus as a REST endpoint to serve generated documents on-the-fly.

## Getting started

Add Venus to your Maven project via the Universe BOM:

```xml
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.fugerit.java.universe</groupId>
      <artifactId>fj-universe</artifactId>
      <version>LATEST</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>
```

See the [Venus Guides](https://venusguides.fugerit.org/) for full documentation and examples.
