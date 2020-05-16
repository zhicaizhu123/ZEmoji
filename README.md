# z-emoji

### 安装

```sh
npm i -S z-emoji
```

### `ZEmoji` 组件

#### 参数说明

| 参数      | 描述                           | 类型   | 可选值                                                                                                                                       | 默认值          |
| --------- | ------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| placement | 表情列表悬浮框的位置           | String | "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end" | "top-start"     |
| trigger   | 触发表情列表悬浮框显示隐藏条件 | String | "hover"                                                                                                                                      | "hover","click" |

#### 事件

| 事件名称 | 描述           | 回调参数                                                                                                  |
| -------- | -------------- | --------------------------------------------------------------------------------------------------------- |
| select   | 选中表情时触发 | (code: string, el: string)， `code`为表情对应的标识字符串，如"[微笑]"， `el`为表情的 img 表情对应的字符串 |

#### slot

| 名称 | 说明                               |
| ---- | ---------------------------------- |
| ——   | 自定义触发按钮，默认为`[微笑]`表情 |

#### 使用示例

- 全局使用

```js
// 在项目入口文件引入，如'main.js'
...
import ZEmoji from 'z-emoji'
...
Vue.use(ZEmoji)
...

// 在需要使用的组件中直接使用
<z-emoji @select="onSelect" />
```

- 局部使用

```js
// 在需要使用的组件中引入使用
import { ZEmoji } from 'z-emoji'
...
components: {
  ZEmoji
}
...
<z-emoji @select="onSelect" />
...
```

#### 效果

![image](https://note.youdao.com/yws/public/resource/213455744da3b2b0174c553f515d6a35/5BBC7B707F294FBEA62B28C901C1B1D9?ynotemdtimestamp=1589637351784)

### ZEmojiList 组件

#### 参数说明

| 参数   | 描述                 | 类型          | 可选值 | 默认值  |
| ------ | -------------------- | ------------- | ------ | ------- |
| text   | 表情对应的文本表示   | string        | ——     | "275px" |
| height | 表情列表悬浮框的高度 | string,number | ——     | "200px" |

#### 事件

| 事件名称 | 描述           | 回调参数                                                                                                  |
| -------- | -------------- | --------------------------------------------------------------------------------------------------------- |
| select   | 选中表情时触发 | (code: string, el: string)， `code`为表情对应的标识字符串，如"[微笑]"， `el`为表情的 img 表情对应的字符串 |

#### 使用示例

- 只支持局部使用

```js
// 在需要使用的组件中引入使用
import { ZEmojiList } from 'z-emoji'
...
components: {
  ZEmojiList
}
...
<z-emoji-list @select="onSelect" />
...
```

#### 效果

![image](https://note.youdao.com/yws/public/resource/213455744da3b2b0174c553f515d6a35/CCF46AD1B79A4342A3DAB2FEA80F28D3?ynotemdtimestamp=1589637351784)

### ZEmojiItem 组件

| 参数 | 描述               | 类型   | 可选值             | 默认值 |
| ---- | ------------------ | ------ | ------------------ | ------ |
| text | 表情对应的文本标识 | string | 支持的表情文本标识 | ——     |

#### 事件

| 事件名称 | 描述           | 回调参数                                                                                                  |
| -------- | -------------- | --------------------------------------------------------------------------------------------------------- |
| select   | 选中表情时触发 | (code: string, el: string)， `code`为表情对应的标识字符串，如"[微笑]"， `el`为表情的 img 表情对应的字符串 |

#### 使用示例

- 只支持局部使用

```js
// 在需要使用的组件中引入使用
import { ZEmojiItem } from 'z-emoji'
...
components: {
  ZEmojiItem
}
...
<z-emoji-item text="[大哭]" @select="onSelect" />
<z-emoji-item text="[微笑]" @select="onSelect" />
<z-emoji-item text="[调皮]" @select="onSelect" />
<z-emoji-item text="[哭]" @select="onSelect" />
...
```

#### 效果

![image](https://note.youdao.com/yws/public/resource/213455744da3b2b0174c553f515d6a35/C52300DD6EEB4081BFFF2C39A29FE470?ynotemdtimestamp=1589637351784)
