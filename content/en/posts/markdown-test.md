+++
title = 'Markdown Test'
date = '2026-02-04T20:36:30+08:00'
description = 'Testing markdown features.'
draft = false
isCjkLanguage = false
categories = ['example']
tags = ['markdown', 'test', 'showcase']
[build]
  list = 'always'  # Use 'never' to exclude this page from all page collections.
+++

## Title

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Text

Let's do some simple tests.

Hi, can you see this?

You see it? Good.

Now insert `something` into this sentence.

Here we have some *Italic* and **Bold** texts.

~~You can try this on other languages.~~

More:

The sign of the vacuum magnetic permeablity: µ~0~.
But usually it is written using `Tex`.

upper: cm^2^.

==This sentence is marked.==

And here is a sentence ==has some marked text==.

Divider:
---

> Now do some `blockquote`s.

> When configured `extra` features of markdown, this block now should be green.
{ .block-sanity }

> To show something **VERY IMPORTANT**, this block can be used.
{ .block-critical }

> A little bit terrifing? For warnings, you can use this block instead of the one above.
{ .block-warning }

## Fenced Code Block
```go-html-template
{{/* go html template syntax: */}}
{{ with . }}
  <h1 class="title">
    {{ printf "Hello %d" now.Year }}
  </h1>
  <div class="toc">{{ .TableOfContent }}</div>
  <p>{{ .Content }}</p>
{{ end }}
```

```python
# python:
tools = ['hammer', 'drill', 'saw']
print(f"We have {len(tools)} tool(s)")
for tool in tools:
    if tool == 'saw':
        print(f"found a chain{tool}!")
    else:
        print(f"a {tool}")
```

```css
/* css example:*/
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

## List

### Fruits

- Banana
- Orange
- Apple
- Melon

### Step to build a hugo site

1. Install [Hugo](https://gohugo.io/)
2. Use Hugo CLI tool to initialize a site
3. Pick up a [theme](https://themes.gohugo.io/)
3. Customize theme
5. Adding contents
6. Build & test it
7. Deploy

If you have any questions, go check the [Hugo Documetation](https://gohugo.io/documentation/).
