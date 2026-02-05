+++
title = 'Markdown 显示效果测试'
date = '2026-02-04T20:36:30+08:00'
description = '展示并测试 markdown 显示效果。'
draft = false
isCjkLanguage = true
categories = ['示例文章']
tags = ['markdown', '测试', '展示']
[build]
  list = 'always'  # Use 'never' to exclude this page from all page collections.
+++

## 标题

# H1
## H2
### H3
#### H4
##### H5
###### H6

## 文本

来做一些简单的文本测试。

看到这一段内容了吗？

好的继续，现在塞一些`小片段`到文本里面。

可以在`任意`的位置添加任意的`内容`，非常简单。

然后是**粗体文本**和*斜体*。

*哦，中文显示为斜体的话可能会比较奇怪？*

~~先不管这么多了。~~

更多：

真空磁导率常量：µ~0~，（不过这种最好还是用 `Tex` 来写）。

上标：cm^2^。

==这是一段被标记（mark）的文本。==

这是一段==含有标记==的文本。

分割线：
---

> 这是一个`引用块（blockquote）`.

> 开启自定义 markdown 属性后，这应该是一个绿色的块。
{ .block-sanity }

> 要显示**非常重要**的信息时，可以使用这个块。
{ .block-critical }

> 还是挺吓人的？那么警告信息可以使用这个块。
{ .block-warning }

## 格式化代码块

```go-html-template
{{/* 这是 Go HTML 模板的语法示例： */}}
{{ with . }}
  <h1 class="title">
    {{ printf "Hello %d" now.Year }}
  </h1>
  <div class="toc">{{ .TableOfContent }}</div>
  <p>{{ .Content }}</p>
{{ end }}
```

```python
# Python 的示例代码：
tools = ['hammer', 'drill', 'saw']
print(f"We have {len(tools)} tool(s)")
for tool in tools:
    if tool == 'saw':
        print(f"found a chain{tool}!")
    else:
        print(f"a {tool}")
```

```css
/* CSS 示例代码：*/
:root {
  --content-width: 1600px;
  --content-padding: 10px;
  --shadow: 1px 1px 3px 0 rgb(114, 246, 255);
  --toc-background: rgba(255, 255, 255, 0.2);
}

#toc {
  color: rgb(15, 15, 17);

  &:hover {
    background-color: var(--toc-background);
  }
}

.container {
  box-shadow: var(--shadow);
  max-width: var(--content-width);
  padding: var(--padding-padding);
}

.container > a {
  text-decoration: underline;
}
```

## 列表

### 水果

- 葡萄
- Banana
- Orange
- Apple
- 西柚
- Melon
- 菠萝

### 搭建一个 Hugo 站点的步骤

1. 安装 [Hugo](https://gohugo.io/)
2. 使用 Hugo 的命令行工具初始化站点
3. 选择一个[主题](https://themes.gohugo.io/)
3. 修改、自定义主题
5. 添加内容（写文章）
6. 构建并测试效果
7. 部署

如果对上述过程有任何疑问，请查阅 [Hugo 文档](https://gohugo.io/documentation/)。
