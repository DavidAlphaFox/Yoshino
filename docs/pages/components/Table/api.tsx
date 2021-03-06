export default [
  {
    title: 'API',
    json: [
      {
        props: 'data',
        intro: '数据源',
        type: 'any[]',
        defaultValue: '-',
      },
      {
        props: 'columns',
        intro: '描述数据源和控制表格渲染，详情见下面`API - columns`',
        type: 'Columns[]',
        defaultValue: '-',
      },
      {
        props: 'fixedTitle',
        intro: '表格锁头',
        type: 'boolean',
        defaultValue: 'true',
      },
      {
        props: 'scroll',
        intro: '控制表格可视区域宽高，当锁头的时候生效',
        type: '{`x`: `number` | `string`; `y`: `number`;}',
        defaultValue: '-',
      },
    ]
  },
  {
    title: 'API - colunms',
    json: [
      {
        props: 'title',
        intro: '表格标题',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'dataIndex',
        intro: '用于描述`title`对应的data中的`key`',
        type: 'string',
        defaultValue: '-',
      },
      {
        props: 'width',
        intro: '当锁列时建议使用width描述每列宽度，否则有可能出现列不对齐的问题',
        type: 'number',
        defaultValue: '-',
      },
      {
        props: 'fixed',
        intro: '开启锁列，左或者右',
        type: '`left` | `right`',
        defaultValue: 'false',
      },
      {
        props: 'render',
        intro: '自定义渲染单元格, v是当前单元格的数据，item是这一行的object',
        type: '(v: any, item?: any) => JSX.Element',
        defaultValue: '-',
      },
      {
        props: 'sorter',
        intro: '排序函数，例如(a, b) => a - b',
        type: '(a, b) => number',
        defaultValue: '-',
      },
      {
        props: 'sortOrder',
        intro: '排序顺序，false，原来顺序排列, ascend升序，descend降序',
        type: `false | 'ascend' | 'descend'`,
        defaultValue: '-',
      },
      {
        props: 'defaultSortOrder',
        intro: '排序顺序，false，原来顺序排列, ascend升序，descend降序',
        type: `false | 'ascend' | 'descend'`,
        defaultValue: '-',
      }
    ]
  }
];
